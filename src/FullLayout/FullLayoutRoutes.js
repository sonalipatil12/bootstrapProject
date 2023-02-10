import react from "react";
import About from "../About/About";
import Conatct from "../Contact/Contact";
import Copyright from "../CopyRights/Copyright";
import Footer from "../Footer/Footer";
import PortFolio from "../PortFolio/PortFolio";

export default [
  {
    label: "portfolio",
    showInMenu: true,
    component: <PortFolio />,
  },
  ,
  {
    label: "about",
    showInMenu: true,
    component: <About />,
  },

  {
    label: "contact",
    showInMenu: true,
    component: <Conatct />,
  },
  {
    label: "Footer",
    showInMenu: false,
    component: <Footer />,
  },
  {
    label: "Copyright",
    showInMenu: false,
    component: <Copyright />,
  },
];
