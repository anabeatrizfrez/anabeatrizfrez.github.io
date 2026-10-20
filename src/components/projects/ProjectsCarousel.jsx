import { useMemo, useRef, useState, useEffect } from "react";
import ProjectsCards from "./ProjectCard";

const MIN_CARDS = 10;
const SPEED = 40;
const DRAG_THRESHOLD = 5;

export default function ProjectsCarousel({ projects }) {
    const [paused, setPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    const trackRef = useRef(null);
    const offsetRef = useRef(0);
    const halfWidthRef = useRef(0);
    const dragStartRef = useRef({ x: 0, offset: 0, href: null });

    const loop = useMemo(() => {
        if (projects.length === 0) return [];
        const repeats = Math.max(1, Math.ceil(MIN_CARDS / projects.length));
        const filled = Array.from({ length: repeats }, () => projects).flat();

        return [...filled, ...filled];
    }, [projects]);

    useEffect(() => {
        if (!trackRef.current) return;
        halfWidthRef.current = trackRef.current.scrollWidth / 2;
    }, [loop]);

    useEffect(() => {
        let frameId;
        let last = performance.now();

        function animate(now) {
            const dt = (now - last) / 1000;
            last = now;

            if (!paused && !isDragging && halfWidthRef.current > 0) {
                offsetRef.current -= SPEED * dt;
                if (Math.abs(offsetRef.current) >= halfWidthRef.current) {
                    offsetRef.current += halfWidthRef.current;
                }
                if (trackRef.current) {
                    trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
                }
            }
            frameId = requestAnimationFrame(animate);
        }

        frameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frameId);
    }, [paused, isDragging]);

    function wrapOffset(value) {
        const half = halfWidthRef.current;
        if (half <= 0) return value;
        let v = value % half;
        if (v > 0) v -= half;
        return v;
    }

    function handlePointerDown(e) {
        const linkEl = e.target.closest("a");

        setIsDragging(true);
        dragStartRef.current = {
            x: e.clientX,
            offset: offsetRef.current,
            href: linkEl ? linkEl.getAttribute("href") : null,
        };
        e.currentTarget.setPointerCapture(e.pointerId);
    }

    function handlePointerMove(e) {
        if (!isDragging) return;
        const delta = e.clientX - dragStartRef.current.x;
        offsetRef.current = wrapOffset(dragStartRef.current.offset + delta);
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
        }
    }

    function handlePointerUp(e) {
        setIsDragging(false);

        const moved = Math.abs(e.clientX - dragStartRef.current.x);
        // pouco ou nenhum movimento = foi um clique, não um arraste
        if (moved < DRAG_THRESHOLD && dragStartRef.current.href) {
            window.open(dragStartRef.current.href, "_blank", "noopener,noreferrer");
        }
    }

    return (
        <div
            className="relative w-full max-w-6xl mx-auto overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 z-10 bg-linear-to-r from-[#1D1D1D] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 z-10 bg-linear-to-l from-[#1D1D1D] to-transparent" />

            <div
                ref={trackRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                className={`flex items-start gap-6 w-max select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                style={{ touchAction: "pan-y" }}
            >
                {loop.map((project, i) => (
                    <ProjectsCards key={i} {...project} />
                ))}
            </div>
        </div>
    );
}