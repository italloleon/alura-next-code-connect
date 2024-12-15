import { Prompt } from "next/font/google";

import "./globals.css";
import { Aside } from "@/components/Aside";
import { SearchForm } from "@/components/SearchForm";

const prompt = Prompt({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="app-container">
          <Aside />
          <div className="main-content">
            <SearchForm />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
