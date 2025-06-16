'use client';

import Link from 'next/link';
import { toast } from 'sonner';
import { Trash2, HeartOff } from 'lucide-react';
import StaticBackground from '../(components)/StaticBackground';

import { useWishlist } from '../context/WishlistContext';
import GameCard from '../(components)/shared/GameCard';
import SharedButton from '../(components)/shared/SharedButton';
import { Button } from '@/app/(components)/ui/button';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

  return (
    <>
      <StaticBackground imageUrl="/cairo.jpg" />
      <div className="min-h-screen bg-background/75 text-foreground py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
            <div>
              <h1 className="text-3xl font-bold mb-1">🎮 My Wishlist</h1>
              <p className="text-muted-foreground text-sm">You&apos;ve added this game to your list</p>
            </div>

            {wishlist.length > 0 && (
              <Button
                variant="outline"
                onClick={() => {
                  clearWishlist();
                  toast.success('Wishlist cleared');
                }}
                className="mt-4 sm:mt-0 gap-2 border-destructive hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
                Clear All
              </Button>
            )}
          </div>

          {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <HeartOff className="w-16 h-16 text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6">Browse and add games to your wishlist.</p>
              <Link href="/games">
                <SharedButton label="Back to Games" showIcon />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((game) => (
                <div key={game.id} className="relative group">
                  <Link href={`/games/${game.id}`}>
                    <GameCard
                      {...game}
                      wishIcon={false}
                      deleteIcon={false}
                    />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      removeFromWishlist(game.id);
                      toast.success(`${game.title} removed from wishlist`);
                    }}
                    className="absolute top-3 right-3 z-10 h-10 w-10 rounded-full backdrop-blur-md transition-all duration-300 transform hover:scale-110 bg-background/80 hover:bg-destructive/10 hover:text-destructive shadow-md hover:shadow-lg"
                  >
                    <Trash2 className="h-5 w-5 text-destructive transition-transform duration-300 group-hover:scale-110" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
