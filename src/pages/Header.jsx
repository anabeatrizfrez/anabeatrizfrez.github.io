export default function Header() {
    return (
        <header className="fixed top-0 inset-x-0 z-20">
            <nav className="text-text-white uppercase flex p-3 md:p-4 pr-6 sm:pr-10 md:pr-16 flex-row-reverse tracking-wide bg-bg-black-alt shadow-sm">
                <ul className="flex gap-3 sm:gap-6 md:gap-10">
                    <li><a href="#hero" className="text-xs sm:text-sm md:text-lg font-semibold hover:text-text-white-alt transition-colors">Sobre</a></li>
                    <li><a href="#stacks" className="text-xs sm:text-sm md:text-lg font-semibold hover:text-text-white-alt transition-colors">Stacks</a></li>
                    <li><a href="#projects" className="text-xs sm:text-sm md:text-lg font-semibold hover:text-text-white-alt transition-colors">Projetos</a></li>
                    <li><a href="#contact" className="text-xs sm:text-sm md:text-lg font-semibold hover:text-text-white-alt transition-colors">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}