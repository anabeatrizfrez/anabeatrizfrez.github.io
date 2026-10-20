import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectCard({title, summary, image, link, stacks, color, speed}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative w-72 shrink-0 rounded-2xl overflow-hidden cursor-pointer bg-bg-black"
                style={{
                    border: `1px solid ${isHovered ? color + "55" : "rgba(255,255,255,0.05)"}`,
                    transition: "border-color 0.3s",
                    boxShadow: isHovered ? `0 20px 40px ${color}22` : "none",
                    zIndex: isHovered ? 10 : 1,
                }}
            >
                <img src={image} alt={title} className="w-full h-40 object-cover" draggable={false} />

                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    title="Abrir projeto"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>

                <div className="p-6 min-h-40 flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
                    <p className="text-sm text-zinc-400">{summary}</p>

                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                transition={{ duration: speed, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 border-t" style={{ borderColor: `${color}33` }}>
                                    <p className="text-[11px] uppercase tracking-widest text-zinc-500 mb-3">
                                        Stacks utilizadas
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        {stacks.map((stack) => (
                                            <div key={stack.name} className="flex flex-col items-center gap-1">
                                                <i className={`devicon-${stack.icon} text-2xl text-white`}></i>
                                                <span className="text-[10px] text-zinc-400">{stack.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </>
    );
}