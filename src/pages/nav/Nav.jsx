import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  lazy,
  Suspense,
} from "react";
import { GlobalContext } from "../../App";
import logo from "../../img/logo-mini.svg";
import user from "../../img/face1.jpg";
import "./nav.scss";
import { HiMenuAlt1 } from "react-icons/hi";
import { BiFullscreen } from "react-icons/bi";
import { MdOutlineLanguage } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { BsCloudMoonFill } from "react-icons/bs";
const LangItem = lazy(() => import("./LangItem"));
const Sidenav = lazy(() => import("./Sidenav"));

function Nav({ darkMode, setdarkMode }) {
  const globalState = useContext(GlobalContext);
  const [sideNavopen, setsideNavopen] = useState(false);
  const [openlag, setopenlag] = useState(false);
  const outerCont = useRef(null);
  const innerCont = useRef(null);
  const openMenu = () => {
    let innerHight = innerCont.current.getBoundingClientRect().height;
    if (openlag) {
      outerCont.current.style.height = `0px`;

      setopenlag(false);
    } else {
      outerCont.current.style.height = `${innerHight}px`;
      setopenlag(true);
    }
  };

  return (
    <nav>
      <div className="topnav">
        <div className="logo">
          <img src={logo} alt="logo" loading="lazy" />
        </div>
        <div className="links">
          <div className="userlogo">
            <img src={user} alt="user" loading="lazy" />
            <h5>Ahmed Hassan</h5>
          </div>

          <div className="lang" onClick={() => openMenu()}>
            <MdOutlineLanguage />
            <Suspense fallback="">
              <LangItem
                openlag={openlag}
                setopenlag={setopenlag}
                outerCont={outerCont}
                innerCont={innerCont}
              />
            </Suspense>
          </div>
          <div className="dark">
            {darkMode ? (
              <BsSunFill onClick={() => setdarkMode(false)} />
            ) : (
              <BsCloudMoonFill onClick={() => setdarkMode(true)} />
            )}
          </div>
          <div className="menu" onClick={() => setsideNavopen(!sideNavopen)}>
            <HiMenuAlt1 />
          </div>
        </div>
      </div>
      <Suspense fallback="">
        <Sidenav sideNavopen={sideNavopen} setsideNavopen={setsideNavopen} />
      </Suspense>
    </nav>
  );
}

export default Nav;
