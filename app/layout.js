import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/features/Provider";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata = {
  title: "Todo App",
  description: "Best todo app in the town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
