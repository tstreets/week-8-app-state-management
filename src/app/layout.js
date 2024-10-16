import "./globals.css";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Week 8",
  description: "App state management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
