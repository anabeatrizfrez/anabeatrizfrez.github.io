import StackCard from "./StackCard";

export default function StacksSection({ name, stacks }) {
    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50">{name}</h3>
            <div className="grid grid-cols-[repeat(auto-fit,5rem)] justify-start gap-x-4 gap-y-6">
                {stacks.map((stack) => (
                    <StackCard key={stack.name} stacks={stack} />
                ))}
            </div>
        </div>
    );
}