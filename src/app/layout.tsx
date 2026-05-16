import type { Metadata } from "next";
import "../../src/app/styles/css/bootstrap.min.css";
import "../../src/app/styles/css/style.css";
import ClientPreloader from "./components/ClientPreloader";
import ClientErrorBoundary from "./components/ClientErrorBoundary";
import { dmSans, monaSans, outfit, playfairDisplay } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Realest | React Next JS Template",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${dmSans.variable} ${monaSans.variable} ${outfit.variable} ${playfairDisplay.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&family=Mona+Sans:ital,wght@0,200..900;1,200..900&family=Outfit:wght@100..900&display=swap"></link>
      </head>
      <body className="scroll-smooth" suppressHydrationWarning>
        <ClientErrorBoundary>
          <ClientPreloader />
          {children}
        </ClientErrorBoundary>
      </body>
    </html>
  );
}
