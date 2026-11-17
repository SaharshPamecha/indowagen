import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ThemeRegistry from '../components/ThemeRegistry/ThemeRegistry';
import { CartProvider } from '../context/CartContext';
import Providers from "./providers";
// Suppressing hydration warnings in production but showing them in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    const message = typeof args[0] === 'string' ? args[0] : '';
    
    // Filter out hydration warnings
    if (
      message.includes('Warning: Expected server HTML') || 
      message.includes('Hydration failed because') ||
      message.includes('Text content did not match')
    ) {
      return;
    }
    
    originalConsoleError(...args);
  };
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Indo Wagen - Premium Electric Vehicles',
  description: 'Experience the future of sustainable transportation with Indo Wagen electric vehicles. Discover our range of innovative e-rickshaws designed for different needs.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://indowagen.com'),
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body suppressHydrationWarning className={roboto.className} style={{ overflowX: 'hidden' }}>
      <Providers>
        {/* Apply suppressHydrationWarning to the main content wrapper */}
      
        <div suppressHydrationWarning data-nextjs-root-layout>
          <ThemeRegistry>
            <CartProvider>
              {children}
            </CartProvider>
          </ThemeRegistry>
        </div>
        </Providers>
      </body>
      
    </html>
  );
}
