/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
  protocol: 'https',
  hostname: 'media.licdn.com',
}
,
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
      },
      {
        protocol: 'https',
        hostname: 'www.vga4a.com',
      },
      {
        protocol: 'https',
        hostname: 'img.pikbest.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'www.freetogame.com',
      },
      {
        protocol: 'https',
        hostname: 'freetogame.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'www.cairo24.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sqorebda3.com',
      }
    ],
  },
};

module.exports = nextConfig;
