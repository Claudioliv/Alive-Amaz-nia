"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";


// Variants do container: controla o efeito cascata entre as palavras 
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.12},
    },
};

const word = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y:0 , transition: { duration: 0.6, ease: "easeOut" as const}}
};


export default function Hero() {
    const titulo = ["A", "floresta", "que", "respira", "o", "planeta"];
    const sectionRef = useRef<HTMLElement>(null);

    // Mede o progresso do scroll enquanto o Hero sai da vista
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    // A image se move mais devagar que o scroll, só 30%
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);


    return(
        <section 
            ref={sectionRef}
            className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-ink">
            {/* A imagem precisa ser um pouco maior que o container (scale-110), se não revelaria uma borda com movimento parallax */}
            <motion.div style={{y: imageY}} className="absolute inset-0 acale-110">
                <Image
                    src="https://images.pexels.com/photos/17502449/pexels-photo-17502449.jpeg"
                    alt="Vista aéria da Floresta Amazônia"
                    fill
                    className="objsct-cover"
                    priority
                />
            </motion.div>


            {/* Overlay escuro sobre a image de fundo, contraste com o texto */}
            <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/60 to-ink z-10" />
                <motion.h1
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="relative z-20 flex flex-wrap justify-center gap-x-4 max-w-4xl px-6 text-center font-display text-4xl md:text-6xl font-medium text-mist"
                >
                    {titulo.map((palavra, i) => (
                        <motion.span key={i} variants={word}>
                            {palavra}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity:0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.2, duration: 0.8}}
                    className="relative z-20 text-gold text-sm uppercase tracking-[0.3em] mt-6"
                >
                    Amazônia
                </motion.p>

                { /* Indicador de scroll com animação de loop sutil */}
                <motion.div
                    className="absolute bottom-10 z-20 flex flex-col items-center gap-2 test-mist/60"
                    animate={{ y: [0, 10, 0]}}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut"}}
                >
                    <span className="text-xs uppercase tracking-widest"> Role para explorar</span>
                    <span className="text-lg">↓</span>
                </motion.div>
            


        </section>



    );




}










