import { useState } from "react";

export default function StackCard({stacks}) {
    const [hover, setHover] = useState(false);

    return (
        <div className="flex flex-col items-center gap-3">
            <i
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className={`devicon-${stacks.icon} text-6xl transition-transform duration-300 hover:scale-140 ${hover ? "colored" : ""}`}
            ></i>
            <p className="text-xs text-white/80 text-center">{stacks.name}</p>
        </div>
    );
}