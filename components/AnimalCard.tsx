"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Animal } from "@/lib/content";


export default function AnamlCard({ animal } : { animal: Animal }) {
    const [expanded, setExpanded] = useState(false);


    return (

        <motion.div
            layout
            onClick={() => setExpanded(!expanded)}
            className="bg-canopy rounded-2xl ocerflow-hidden cursor-pointer"
            transition={{ layout: { duration: 0.4, ease: "easeInOut"} }}
        >
            <motion.div className="relative h-64 w-full">
                <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    className="object-cover"
                />
            </motion.div>

            <motion.div layout className="p-6">
                <span className="text-gold text-xs uppercase tracking-widest" >
                    {animal.scientificName}
                </span>
                <h3 className="font-display text-2xl text-mist mt-1" >{animal.name}</h3>

                {/* AnimatePresence permite animar a saída de um elemento DOm, react sozinho não faz */}
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0}}
                            animate={{ opacity: 1, height: "auto"}}
                            exit={{ opacity: 0, height: 0}}
                            transition={{ duration: 0.3}}
                            className="overflow-hidden"

                        >
                            <p className="text-mist/80 text-sm mt-3" >{animal.description}</p>
                            <p className="text-river bg-mist/10 rounded-lg p-3 text-sm mt-3 italic" >
                               💡 {animal.curiosity}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <span className="text-mist/40 text-xs mt-3 block">
                    {expanded ? "Toque para fechar ↑" : "Toque para saber mais ↓"}
                </span>

            </motion.div>



        </motion.div>


    )




}









