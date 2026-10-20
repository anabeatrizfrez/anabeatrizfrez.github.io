import SVGProfile from "../components/global/SvgProfile";

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-[40vh] snap-start bg-bg-black text-text-white px-8 md:px-16 pt-8 pb-16 flex flex-col justify-between">
            <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Contato</h2>
                <p className="text-text-white-alt max-w-xl mb-10"> Entre em contato para projetos, parcerias ou um papo sobre tecnologia. </p>
            </div>

            <div className="flex items-center gap-6 flex-wrap">
                <a
                    href="mailto:abeatriz.frez@gmail.com"
                    className="flex items-center gap-3 text-lg font-semibold hover:text-accent transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    abeatriz.frez@gmail.com
                </a>
                <SVGProfile size="6" />
            </div>
        </section>
    );
}