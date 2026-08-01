"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export let lenisInstance: Lenis | null = null;


export default function SmoothScroll({ children} : { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);


    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches

        // Se p usuário pedir menos movimento, nem inicializa o smooth scroll
        // o navegador usar o scroll nativo
        if(prefersReducedMotion) {
            return;
        }


        const lenis = new Lenis({
            duration: 1.2, // quanto maior, mais pesado/suave p scroll fica
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // curva de desaceleração 
        });

        lenisRef.current = lenis;
        lenisInstance = lenis;

        // Lenis precisa de um loop contínuo ( requestAnimationFrame ) pra se atualizar a cada freme
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Cleanup: destrói a instância se o componente for desmontado (evita vazamento)
        return () => {
            lenis.destroy();
            lenisInstance = null;
        };
    }, []);

    return <>{children}</>;
}






