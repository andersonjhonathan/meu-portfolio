/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export", // habilita exportação estática
  // Se o repositório não for username.github.io, descomente e ajuste o basePath:
  basePath: "/meu-portfolio",
};

export default nextConfig;
