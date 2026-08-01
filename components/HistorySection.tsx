"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { historyTimeline } from "@/lib/content";

const timelineContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.25, delayChildren: 1.3},
    },
};

const timelineItem = {
    hidden: { opacity: 0, x: 20},
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const }},
};

export default function HistorySection() {
    return (
        <section
            className="relative min-h-screen bg-canopy px-6 py-24 flex- flex-col items-center justify-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6}}
                className="text-center mb-16"
            >
                <span className="text-gold text-xs uppercase tracking-[0.3em]">
                    Antes de tudo
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-mist mt-3">
                    A história da floresta 
                </h2>
            </motion.div>

            <div className="max-w-6xl w-full grid grid-col-1 md:grid-cols-2 gap-16 items-center">
                {/* Quadro */}
                <div className="relative aspect-[4/5] max-w-md mx-auto w-full">
                    {/* Borda supeior: cresce da esquerda pra direita */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0}}
                        style={{ transformOrigin: "left" }}
                        className="absolute top-0 left-0 right-0 h-[3px] bg-gold"
                    />

                    {/* Borda direita: cresce de cima pra baixo */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.3}}
                        style={{ transformOrigin: "top" }}
                        className="absolute top-0 right-0 bottom-0 w-[3px] bg-gold"
                    />

                    {/*Borda inferior: cresce da direita pra esquerda */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.6}}
                        style={{ transformOrigin: "right" }}
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold"
                    />

                    {/* Borda esquerda: Cresce de baixo pra cima - fecha o quadro */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: 0.9}}
                        style={{ transformOrigin: "bottom" }}
                        className="absolute top-0 left-0 bottom-0 w-[3px] bg-gold"
                    />

                    { /* Foto: só aparece depois do desenho do quadro */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration:0.8, delay: 1.2 }}
                        className="absolute inset-3 overflow-hidden"
                    >
                        <Image
                            src="https://images.pexels.com/photos/13816470/pexels-photo-13816470.jpeg"
                            alt="Poco indígena na Amazônia"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                {/* Linha do tempo: em cascata  */}
                <motion.div
                    variants={timelineContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col gap-8"
                >
                    {historyTimeline.map((era) => (
                        <motion.div 
                            key={era.id} 
                            variants={timelineItem} 
                            className="flex gap-5 justify-between"
                            >
                            <div className="flex flex-col items-center pt-1">
                                <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0" />
                                <span className="w-px flex-1 bg-mist/20 mt-2" />
                            </div>

                            <div className="pb-4">
                                <span className="text-gold text-xs uppercase tracking-widest">
                                    {era.year}
                                </span>
                                <h3 className="font-display text-xl text-mist mt-1">{era.title}</h3>
                                <p className="text-mist/70 text-sm mt-2 max-w-sm">{era.description}</p>
                            </div>

                            {/* miniatura da era, alinhada à direita do texto */}
                            <div className="relative w-24 h-20 md:w-32 md:h-24 shrink-0 rounded-lg overflow-hidden" >
                                <Image 
                                    src={era.image}
                                    alt={era.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </motion.div>
                    ))}
                </motion.div>
                
            </div>
            

        </section>
        
    );

}







