import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <main className="h-full grow">{children}</main>
    </div>
  );
};

export default Layout;
