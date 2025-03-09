import { ReactNode } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="h-screen flex flex-col "
      style={{ overflow: "auto", scrollbarWidth: "none" }}
    >
      <Navbar />

      <main className="h-full grow">{children}</main>
    </div>
  );
};

export default Layout;