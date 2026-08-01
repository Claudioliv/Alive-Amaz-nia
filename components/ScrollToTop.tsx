"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion} from "framer-motion";
import { lenisInstance } from "./SmoothScroll";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function handleScroll() {
            // altura total que dá para rolar: altura do documento inteiro - menos a altura da tela visível
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY

            // Só fica visível quando passa de 90% do scroll total da página
            setVisible(scrollY / scrollableHeight  > 0.9);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function scrollToTop() {
        if(lenisInstance) {
            lenisInstance.scrollTo(0, {duration: 1.5}, );
        }else {
            window.scrollTo({ top: 0, behavior: "smooth"})
        }
    }

    if (!visible) return null;

    return (
            
                <motion.button
                    onClick={scrollToTop}
                    aria-label="Voltar ao topo"
                    initial={{ opacity: 0, scale: 0.8}}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0,-8, 0]}} // flutuação
                    transition={{ 
                        opacity: {duration: 0.3},
                        scale:{ duration: 0.3},
                        y: { duration:1.8, repeat: Infinity, ease: "easeInOut" },}}
                        className="fixed bottom-6 right-6 z-40 p-3 bg-gold text-ink rounded-full shadow-lg hover:bg-mist transition-colors"
                >  
                
                    <ArrowUp size={18}/>
                    
                </motion.button>
                
            
    );


}






