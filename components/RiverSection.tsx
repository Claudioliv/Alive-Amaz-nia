"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { rivers } from "@/lib/content";

const container = {
    hidden: {},
    visible: {
        transition: { stagerChildren: 0.15},
    },
};

const card = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const }},
};


export default function RiversSection() {
    return (
        <section className="relative bg-ink px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                className="text-gold mb-14"
            >
                <span className="text-gold text-xs uppercase tracking-[0.3em]">
                    As veias da floresta
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-mist mt-3">
                    Três rios, um destino
                </h2>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {rivers.map((river) => (
                    <motion.div key={river.id} variants={card} className="group">
                        <div className="relative h-56 rounded-xl overflow-hidden mb-4">
                            <Image 
                                src={river.image}
                                alt={river.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <span className="text-gold text-xs uppercase tracking-widest">
                            {river.stat}
                        </span>
                        <h3 className="font-display text-2xl text-mist mt-1 mb-2">
                            {river.name}
                        </h3>
                        <p className="text-mist/70 text-sm leading-relative">
                            {river.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}




