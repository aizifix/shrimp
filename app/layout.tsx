import type { Metadata } from "next";
import { Luckiest_Guy, Varela_Round } from "next/font/google";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClientLayout from '../components/ClientLayout';
import './globals.css';

const luckiestGuy = Luckiest_Guy({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-luckiest-guy',
});

const varelaRound = Varela_Round({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-varela-round',
});

export const metadata: Metadata = {
  title: '$SHRIMP - The Meme Coin',
  description: "The official home of $SHRIMP. Say hello to the ocean's tastiest token.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${luckiestGuy.variable} ${varelaRound.variable}`}>
      <body className="w-full min-h-screen text-[#008080] bg-[#00a5f0]">
        <ClientLayout>
          {/* Decorative Background Bubbles */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
             <div className="absolute top-[10%] left-[5%] w-24 h-24 rounded-full border-4 border-[#00a5f0]"></div>
             <div className="absolute top-[40%] right-[10%] w-16 h-16 rounded-full border-4 border-[#00a5f0]"></div>
             <div className="absolute bottom-[20%] left-[15%] w-32 h-32 rounded-full border-4 border-[#00a5f0]"></div>
          </div>

          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ClientLayout>
      </body>
    </html>
  );
}
