import type { Metadata } from "next";
import TodoLayout from "@/components/templates/TodoLayout";

import "./globals.css";

type LayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Simple TODO App",
  description: "Simple TODO App list with Next.js & TypeScript",
};

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <TodoLayout>
        {children}
      </TodoLayout>
    </>
  );
}

export default RootLayout;
