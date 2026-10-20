import Background from "../components/animations/Background";
import { Typewriter } from "../components/animations/Typewriter"
import SVGProfile from "../components/global/SvgProfile";

import perfilImg from "../assets/perfil.svg";

export default function Hero() {
    return(
        <section id="hero" className="relative min-h-screen snap-start flex items-center justify-center md:justify-start overflow-hidden bg-bg-black px-6 md:pl-[10%]">
            <Background />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
                <div className="relative w-56 h-56 md:w-64 md:h-64 shrink-0">
                    <img
                        alt="Profile"
                        className="w-full h-full rounded-full border-4 md:border-8 border-bg-white shadow-md object-cover"
                        src={perfilImg}
                    />
                    <div className="absolute inset-0 rounded-full pointer-events-none" style={{ boxShadow: "inset 0 0 30px 10px rgba(0,0,0,0.25)" }} />
                </div>
                <div className="flex flex-col justify-center items-center md:items-start w-full max-w-xs sm:max-w-sm md:max-w-100 gap-4">

                    <SVGProfile size="8" />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-white">Ana Beatriz<span className="hidden">Frez Ouverney</span></h1>

                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text-white w-full md:min-w-100 text-center md:text-left">
                        <Typewriter
                            text={["Full Stack | Back-End Developer"]}
                            speed={100}
                            loop={true}
                        />
                    </h2>
                </div>
            </div>
        </section>
    );
}