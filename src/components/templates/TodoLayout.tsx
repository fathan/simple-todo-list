import React from "react";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="flex flex-col h-screen">
          <Header />

          <main className="p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
