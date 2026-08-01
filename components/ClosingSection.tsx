"use client";

import { motion } from "framer-motion";

const container = { 
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 , delayChildren: 0.1 },
    },

};

const item = {
    hidden : { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const }}
};

export default function ClosingSection() {

    return (
        <section  
            className="relative min-h-screen flex flex-col items-center justify-center bg-ink px-6 py-24 text-center overflow-hidden"
        >
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="max-w-2xl flex flex-col items-center gap-6"
            >
                <motion.span
                    variants={item}
                    className="text-gold text-xs uppercase tracking-[0.3em]"
                >
                    A floresta precisa de nós
                </motion.span>
                 <motion.h2
                    variants={item}
                    className="font-display text-3xl md:text-5xl text-mist leading-tight"
                 >
                    Proteger a Amazônia é proteger o futuro do planeta
                 </motion.h2>

                 <motion.p
                    variants={item}
                    className="text-mist/70 text-base md:text-lg max-w-lg"
                 >
                    Cada fração de floresta preservada sustenta um equilíbrio que vai muito além
                    de suas fronteiras. Conhecer é o primeiro passo — apoiar quem trabalha pela
                     preservação é o próximo.
                 </motion.p>

                 <motion.div 
                    variants={item} className="flex flex-wrap justify-center gap-4 mt-4"
                 >
                    <a 
                        href="https://www.wwf.org.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gold text-ink text-xs uppercase tracking-widest rounded-full hover:bg-mist transition-colors"
                    >
                        Apoiar a preservação
                    </a>

                    <a 
                        href="https://www.socioambiental.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-mist/30 text-mist text-xs uppercase tracking-widest rounded-full hover:border-gold hover:text-gold transition-colors"
                    >
                        Saiba mais
                    </a>
                 </motion.div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                viewport={{ once: true}}
                transition={{ delay: 0.8, duration: 1 }}
                className="mt-16 text-mist/40 text-xs"
            >
                <div>
                    <span>Alive Amazônia - Um projeto sobre a maior floresta tropical do planeta</span>
                    
                </div>
                <div>
                    <span>
                        Criado por{" "}
                        <a 
                        href="https://github.com/Claudioliv" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:text-gold/60 transition-colors"
                        >
                            Claudio Oliveira
                        </a>
                    </span>
                </div>

                
            </motion.div>

        </section>
    );

}













