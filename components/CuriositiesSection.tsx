"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { curiosities } from "@/lib/content";


export default function CuriositiesSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });


    const totalCards = curiosities.length;
    const x = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", `-${(totalCards - 1) * 100}%`]
    );


    return (
        <section 
            ref={containerRef}
            className="relative bg-gradient-to-b from-ink/80 via-capony to-ink/80"
            style={{height: `${totalCards * 100}vh`}}
        >
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
                <div className="text-center mb-10 px-6">
                    <span className="text-gold text-xs uppercase tracking-[0.3em]">
                        Curiosidades
                    </span>
                    <h2>
                        Você sabia?
                    </h2>
                </div>

                {/* um flex row com card por tela inteira */ }
                <motion.div style={{ x }} className="flex">
                    {curiosities.map((fact) => (
                        <div 
                            key={fact.id}
                            className="relative w-screen h-[60vh] shrink-0 flex flex-col items-center justify-center px-8 md:px-24 text-center"
                        >
                            {fact.image && (
                                <> 
                                    <Image
                                        src={fact.image}
                                        alt={fact.label}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-ink/60"/>
                                </>
                            )}

                            <div className="relative z-10">
                                <span className="font-display text-4xl md:text-6xl text-gold font-medium mb-6">
                                    {fact.value}
                                </span>
                                <p className="text-mist/90 text-lg max-w-lg">{fact.label}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );

}








