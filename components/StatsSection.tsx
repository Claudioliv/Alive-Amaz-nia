// Usando os dados já preparados em lib/content

import { facts } from "@/lib/content";
import StatCounter from "./StatCount";

export default function StatsSection() {
    return (
        <section className="bg-ink py-24 px-6" >
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10" >
                {facts.map((fact) => (
                    <StatCounter key={fact.id} value={fact.value} label={fact.label} />
                ))}
            </div>
        </section>
    )
}



