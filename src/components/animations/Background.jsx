import { useEffect, useState } from "react";
import { SoftAurora } from "./SoftAurora";

function readThemeColors() {
    const styles = getComputedStyle(document.documentElement);
    return {
        color1: styles.getPropertyValue("--color-accent").trim(),
        color2: styles.getPropertyValue("--color-accent-alt").trim(),
    };
}

export default function Background() {
    const [colors, setColors] = useState(readThemeColors);

    useEffect(() => {
        const update = () => setColors(readThemeColors());
        window.addEventListener("themechange", update);
        return () => window.removeEventListener("themechange", update);
    }, []);

    return (
        <div className="absolute inset-0 z-0">
            <SoftAurora
            speed={0.6}
            scale={1.5}
            brightness={1}
            color1={colors.color1}
            color2={colors.color2}
            noiseFrequency={2.5}
            noiseAmplitude={1}
            bandHeight={0.5}
            bandSpread={1}
            octaveDecay={0.1}
            layerOffset={0}
            colorSpeed={1}
            />
        </div>
    )
}