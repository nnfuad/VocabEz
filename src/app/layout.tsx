import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Sidebar } from '@/components/navigation/Sidebar';
import { MobileNav } from '@/components/navigation/MobileNav';
import { TopNav } from '@/components/navigation/TopNav';

export const metadata: Metadata = {
  title: 'VocabEz - Master 810 GregMAT GRE Words in 30 Days',
  description: 'Duolingo-style GRE vocabulary mastery platform powered by spaced repetition, polarity math strategy, and interactive gamified drills.',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#F7F7F7] dark:bg-[#131F24] overflow-x-hidden">
        <div className="flex min-h-screen">
          {/* Left Desktop Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0 pb-24 md:pb-8">
            <TopNav />
            <main className="flex-1 px-3 py-4 md:p-6 max-w-5xl mx-auto w-full">
              {children}
            </main>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <MobileNav />
      </body>
    </html>
  );
}
