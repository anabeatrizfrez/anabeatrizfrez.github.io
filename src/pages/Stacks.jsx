import StacksSection from "../components/stacks/StacksSection";
import { stacks } from "../data/stacks";

export default function Stacks() {
    return (
        <section id="stacks" className="relative min-h-screen snap-start bg-bg-black text-text-white px-8 md:px-16 pt-28 pb-16">
            <h2 className="text-4xl font-bold mb-10">Stacks</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-start gap-x-12 gap-y-12 max-w-7xl mx-auto">

                <StacksSection name="Linguagens/Frameworks" stacks={stacks.linguagens} />
                <div className="flex flex-col gap-10">
                    <StacksSection name="Bases de Dados" stacks={stacks.bancoDeDados} />
                    <StacksSection name="Gestão" stacks={stacks.gestao} />
                </div>
                <StacksSection name="DevOps/Ferramentas" stacks={stacks.devops} />

            </div>
        </section>
    );
}