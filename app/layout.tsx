import { montserrat } from "./ui/fonts/fonts";
import "./ui/global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className="text-center py-10 flex justify-center items-center">
          hecho con amor por el Alex
        </footer>
      </body>
    </html>
  );
}
