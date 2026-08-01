import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {protocol: "https", hostname: "plataformacipo.org"},
      { protocol: "https", hostname: "images.pexels.com"},
      { protocol: "https", hostname: "blog.ambiental.tur.br"},
      { protocol: "https", hostname: "segredosdomundo.r7.com"},
      { protocol: "https", hostname: "static.nationalgeographicbrasil.com"},
      { protocol: "https", hostname: "conhecimentocientifico.r7.com"},
      { protocol: "https", hostname: "portalamazonia.com"},
    ],
  },
};

export default nextConfig;
