"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";


export default function BeforeAfterSection() {

    // 50 = ponto de partida do meio, revelando metade da cada imagem
    const [percentage, setPercentage] = useState(50);


    return (
        <section
            className="relative min-h-screen bg-ink flex flex-col items-center justify-center px-6 py-24"
        >
            <motion.div
                initial={{ opacity: 0, y: 30}}
                whileInView={{ opacity: 1, y: 0}}
                viewport={{ once: true, amount: 0.4}}
                transition={{ duration: 0.7}}
                className="max-w-2xl text-center mb-15"
            >
                <span className="text-gold text-xs uppercase tracking-[0.3em]">
                    O que está em jogo
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-mist mt-3 leading-tight">
                    Arraste e veja a diferença
                </h2>
                <p className="text-mist/70 mt-4">
                     Entre agosto de 2024 e julho de 2025, quase 5.800 km² de floresta foram
                    derrubados — o menor índice em mais de uma década, mas ainda uma perda
                    imensa.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95}}
                whileInView={{ opacity: 1, scale: 1}}
                viewport={{ once: true, amount: 0.3}}
                transition={{ duration: 0.8}}
                className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden select-none"
            >
                {/* Camada base: área desmatada, ocupa 100% sempre */}
                <Image
                    src="/desmatada.jpg"
                    alt="Área desmatada da amazônia"
                    fill
                    className="object-cover"
                /> 

                {/* Camada de cima: floresta preservada */}
                <div
                    className="absolute inset-0"
                    style={{ clipPath: `inset(0 ${100 - percentage}% 0 0)`}}
                >
                    <Image
                        src="/preservada.png"
                        alt="Floresta amazônia preservada"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Linha divisória */}
                <div
                    className="absolute top-0 bottom-0 w-0.5 bg-mist pointer-events-none"
                    style={{left: `${percentage}%`}}
                />

                { /* alça visual */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-mist flex items-center justify-center pointer-events-none"
                    style={{left: `${percentage}%`}}
                >
                    <ArrowLeftRight size={18} className="next-ink" />
                </div>

                {/* input real: responde ao clique/arrasto */}
                <input 
                    type="range"
                    min={0}
                    max={100}
                    value={percentage}
                    onChange={(e) => setPercentage(Number(e.target.value))}
                    aria-label="Arrate para comparar floresta preservada e área desmatada"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                />
                <span className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-mist bg-ink/50 px-2 py-1 rounded" >
                    Preservada
                </span>

                <span className="absolute bottom-4 right-4 text-xs uppercase tracking-widest text-mist bg-ink/50 px-2 py-1 rounded">
                    Desmatada
                </span>

            </motion.div>
        </section>
    );

}












