import type { PropsWithChildren } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-full pl-8 pr-8">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
