// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import AOSProvider from "@/providers/AOS.Provider";
// import Header from "@/components/Header";
// import SessionProvider from "@/providers/SessionProvider";
// import LogoLoader from "@/components/LogoLoader";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Learn English Online | Inshomovna Language School",
//   description:
//     "Join Inshomovna - an interactive language school offering certified English courses for all levels.",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="uk" className={inter.className}>
//       <body>
//         <LogoLoader>
//           <SessionProvider>
//             <AOSProvider />
//             <Header />
//             <main>{children}</main>
//           </SessionProvider>
//         </LogoLoader>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AOSProvider from "@/providers/AOS.Provider";
import SessionProvider from "@/providers/SessionProvider";
import Header from "@/components/Header";
import LogoLoader from "@/components/LogoLoader";
// import Loader from "../components/Loader";
import Error from "../components/Error";

// import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn English Online | Inshomovna Language School",
  description:
    "Join Inshomovna - an interactive language school offering certified English courses for all levels.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body className={inter.className}>
        <AOSProvider>
          <LogoLoader>
            <SessionProvider>
              <ErrorBoundary fallback={<Error />}>
                {/* <Suspense> */}
                <Header />
                <main>{children}</main>
                {/* </Suspense> */}
              </ErrorBoundary>
            </SessionProvider>
          </LogoLoader>
        </AOSProvider>
      </body>
    </html>
  );
}
