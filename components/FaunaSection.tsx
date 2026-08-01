"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { animals, Animal } from "@/lib/content";


function AnimalReveal({
    animal,
    index,
    total,
    scrollYProgress,
}: {
    animal: Animal;
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
}) {
    // Cada animal "possui" uma fatia igual do progresso total (0 a 1)
    const segment = 1 / total;
    const start = index * segment;
    const end = start + segment;

    // Opacidade: sobe rápido no início da fatia, segura no meio, desce no final. A sobreposição no início/fim é o que cria a sensação de transição suave entre um animal e o próximo
    const opacity = useTransform(
        scrollYProgress,
        [start, start + segment * 0.25, end - segment * 0.25, end], 
        [0,1,1,0]
    );

    // Escala: começa um pouco menor (mais "longe") e cresce ( como se estivesse aproximando)
    const scale = useTransform(scrollYProgress, [start, end], [1.1, 1.25]);

    // Blur: começa desfocado (como atrás de folhagem)
    const blurAmount = useTransform(
        scrollYProgress,
        [start, start + segment * 0.25],
        [16, 0]
    );

    // filter precisa ser uma string CSS ("blur(10px)")
    const filter = useTransform(blurAmount, (b) => `blur(${b}px)`);

    // Alterna o lado: par: esquerda, ímpar = direita
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            style={{ opacity}}
            className="absolute inset-0 "
        >
            <motion.div
                style={{ scale, filter }}
                className="absolute inset-0" >
                <Image 
                    src={animal.image} 
                    alt={animal.name}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    />
            </motion.div>
            {/* Overlay escuro em degradê vem ao lado onde o texto vai ficar */}
            <div className= {`absolute inset-0 ${
                isLeft
                    ? "bg-gradient-to-r from-ink via-ink/50 to-transparent"
                    : "bg-gradient-to-l from-ink via-ink/50 to-transparent"
                }`}  />

            <div className={`absolute top-1/2 -translate-y-1/2 z-10 max-w-md px-8 md:px-16 ${
                isLeft ? "left-0 text-left" : "right-0 text-right"
            }`}>
                <span className="text-gold text-xs uppercase tracking-widest">
                    {animal.scientificName}
                </span>
                <h3 className="font-display text-4xl md:text-6xl text-mist mt-1" >
                    {animal.name}
                </h3>
                <p className="text-mist/80 text-sm md:text-base text-center max-w-sm mt-4 italic">
                    💡 {animal.curiosity}
                </p>
            </div>
        </motion.div>

    );
}

export default function FaunaSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    // target: containerRef "meça o progresso de scroll só detro da seção"
    // offset: define quando é 0% e 100% em relação à tela

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const entryOpacity = useTransform(scrollYProgress, [0, 0.1], [1,1]);
    const entryScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
    const entryBlur = useTransform(scrollYProgress, [0, 0.1], [0, 20]);
    const entryFilter = useTransform(entryBlur, (b) => `blur(${b})px)`);


    return (
        // A altura total é multiplicada pelo número de animais
        <section 
            ref={containerRef}
            className="relative bg-ink"
            style={{height: `${animals.length * 150}vh` }}
        >
            {/* sticky prende esse conteúdo na tela enquanto a section ( mais alta) rola por trás dela */}   
            <div className="sticky top-0 h-screen overflow-hidden">
                
             <motion.div 
                    
                    style={{ opacity: entryOpacity, scale: entryScale, filter:entryFilter}} 
                         className="absolute inset-0" >
                         <Image
                             src="https://images.pexels.com/photos/7867865/pexels-photo-7867865.jpeg"
                             alt="Folhagem densa da floresta amazônia"
                             fill
                             className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-ink/1 to-ink z-10" />
                            <div className="absolute inset-0 bg-capony/60" />
                            <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/1 to-ink z-10" />
                </motion.div>

                
                <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center">
                
                    <span className="text-gold text-xs uppercase tracking-[0.3em] drop-shadow-lg">
                        Fauna
                    </span>
                </div>

                {animals.map((animal, i) => (
                    <AnimalReveal 
                        key={animal.id}
                        animal={animal}
                        index={i}
                        total={animals.length}
                        scrollYProgress={scrollYProgress}
                    />
                    
                ))}
                
            </div>
            
        </section>
    );
}





