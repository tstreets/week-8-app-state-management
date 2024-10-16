import "./globals.css";
import Nav from "@/components/Nav";
import { AppProvider } from "@/hooks/useAppState";

export const metadata = {
  title: "Week 8",
  description: "App state management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Nav />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
