'use client';

import { useWishlist } from '../context/WishlistContext';
import GameCard from '../(components)/shared/GameCard';
import SharedButton from '../(components)/shared/SharedButton';
import Link from 'next/link';

export default function Home() {
  const { addToWishlist, removeFromWishlist, isWishlisted } = useWishlist();

  // const games = [
  //   {
  //     title: 'GTA V',
  //     description: 'Explore the criminal underworld of Los Santos.',
  //     rating: 4.7,
  //     imageUrl: '/image.png',
  //   },
  //   {
  //     title: 'Call of Duty',
  //     description: 'Engage in modern warfare with intense combat.',
  //     rating: 4.5,
  //     imageUrl: '/image.png',
  //   },
  //   {
  //     title: 'Cyberpunk 2077',
  //     description: 'Dive into a dystopian open-world future.',
  //     rating: 4.3,
  //     imageUrl: '/image.png',
  //   },
  //   {
  //     title: 'Mystery Game',
  //     description: 'A mysterious title with hidden gameplay.',
  //     rating: 4.0,
  //     imageUrl: '/image.png',
  //   },
  //   {
  //     title: 'GameX Alpha',
  //     description:
  //       'A very long and detailed game description that tests layout wrapping and overflow.',
  //     rating: 4.2,
  //     imageUrl: '/image.png',
  //   },
  // ];

//   return (
// //     <div className="min-h-screen p-8 sm:p-20 font-sans bg-background text-foreground">
// //       <header className="flex justify-between items-center mb-8">
// //         <h1 className="text-3xl font-bold">Game Store</h1>
// //         <Link href="/watch-list">
// //           <SharedButton label="View Wishlist" iconType="heart" />
// //         </Link>
// //       </header>

// //       <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
// //         {games.map((game) => (
// //           <GameCard
// //   key={game.id}           // الأفضل استخدام ID بدل title كـ key
// //   id={game.id}            // 👈 أضف هذا السطر لحل الخطأ
// //   {...game}
// //   isWishlisted={isWishlisted(game.title)}
// //   onWishlistToggle={() => toggleWishlist(game.title)}
// //   customButton={<Button>Watch</Button>}
// //   insideImageOnly={true}
// // />

// //         ))}
// //       </main>
// //     </div>
//   );
}
