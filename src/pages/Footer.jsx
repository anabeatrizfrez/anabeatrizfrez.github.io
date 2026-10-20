export default function Footer() {
    return (
        <footer className="snap-end bg-bg-black text-muted text-sm px-8 md:px-16 py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2">
            <p>© {new Date().getFullYear()} <strong className="font-semibold">Ana Beatriz Frez Ouverney</strong>. Todos os direitos reservados.</p>
        </footer>
    );
}