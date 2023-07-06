import NavMenu from "./NavMenu/NavMenu";
import Footer from "./Footer/Footer";

export default function AppLayout({ children }) {

  return (
    <>
    <NavMenu />
    {children}
    <Footer />
    </>
  )
}