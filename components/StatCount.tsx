// Contador animado por scroll
"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

function parseBrazilianNumber(raw: string) {
    const match = raw.match(/^[\d.,]+/); // pega só a parte numérica do início do texto
    if (!match) return { value: 0, decimals: 0, suffix: raw};

    const token = match[0];
    const hasDecimal = token.includes(",");
    // remove pontos de milhar, depois troca a vírgula decimal por ponto 
    const normalized = token.replace(/\./g, "").replace(",", ".");
    const value = parseFloat(normalized);
    const decimals = hasDecimal ? normalized.split(".")[1]?.length ?? 1 : 0;
    const suffix = raw.slice(token.length); // o que sobrou de texto(%, "milhões") pra recolocar depois

    return { value, decimals, suffix};
}



export default function StatCounter({
    value,
    label,
}: {
    value: string; // recebe como texto, ex: "2.500" ou "10%"
    label: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    // useInView é parecido com whiteInView, mas devolve true/false que pode usar em lógica, não só disparar uma animação declarativa
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    const { value: numericValue, decimals, suffix } = parseBrazilianNumber(value);

    const motionValue = useMotionValue(0);
    //useSpring suaviza a transição entre valores, em vez de saltar direto pro número
    const springValue = useSpring(motionValue, { duration: 2000, bounce: 0});

    

    useEffect(() => {
        if (isInView) {
            motionValue.set(numericValue);
        }
        
    }, [isInView, numericValue, motionValue]);


    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                const formatted = latest.toLocaleString("pt-BR", {
                    minimumFractionDigits: decimals,
                    maximumFractionDigits: decimals,
                });
                ref.current.textContent = `${formatted}${suffix}`;
            } 

        });

        
    }, [springValue, decimals, suffix]);


    return (
        <motion.div
        initial={{ opacity: 0, y: 20}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{ once: true}}
        transition={{ duration: 0.6}}
        className="flex flex-col items-center text-center"
        >
            <span ref={ref}  className="font-display text-5xl md:text-6xl text-gold font-medium" >
                0
            </span>
            <p className="text-mist/70 text-sm mt-2 max-w-[200px]"> {label}</p>
        </motion.div>
    );

}









