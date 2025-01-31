import { NextAuthProvider } from "@/components/core/provider/NextAuthProvider";
import { Toaster } from "@/components/ui/sonner";
import { poppins } from "@/lib/utils/fonts";

import "@/styles/globals.css";

export default function LocaleLayout({
  children,
  // modal,
  params: { locale },
}: {
  children: React.ReactNode;
  // modal: React.ReactNode; Breaks build
  params: { locale: string };
}) {
  return (
    <html lang={locale} className={`${poppins.variable} dark`}>
      <body className="min-h-screen font-sans antialiased bg-background dark">
        <NextAuthProvider>
          {children}
          {/* {modal} */}
          <Toaster position="top-center" richColors />
        </NextAuthProvider>
      </body>
    </html>
  );
}
