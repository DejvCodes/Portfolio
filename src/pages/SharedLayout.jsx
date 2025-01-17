import { Outlet } from "react-router-dom";
import Header from "../components/Header"
import Footer from "../components/Footer"
import SoocialNetworks from "../components/SocialNetworks";

const SharedLayout = () => {
  return <>
    <Header />
    <SoocialNetworks />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
}

export default SharedLayout