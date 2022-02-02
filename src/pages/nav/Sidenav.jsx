import React, { lazy, Suspense } from "react";
import user from "../../img/face1.jpg";
import logo from "../../img/logo.svg";
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineSmallDash } from "react-icons/ai";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { useTranslation } from "react-i18next";
const LinkItem = lazy(() => import("./LinkItem"));

function Sidenav({ sideNavopen, setsideNavopen }) {
  const { t, i18n } = useTranslation();

  return (
    <aside className={`${sideNavopen ? "" : "close"}`}>
      <AiOutlineClose onClick={() => setsideNavopen(false)} />

      <img src={logo} alt="logo" className="logo" loading="lazy" />
      <div className="user">
        <div className="logo">
          <img src={user} alt="user" loading="lazy" />
        </div>
        <h5>Ahmed hassan</h5>
      </div>
      <div className="links">
        <Suspense fallback="">
          <LinkItem name={t("link_home")} Icon={<FaHome />} />
        </Suspense>

        <Suspense fallback="">
          <LinkItem
            name={t("link_user")}
            Icon={<FaUserFriends />}
            sidemenu={[
              { id: 1, name: t("link_user1"), Icon: <AiOutlineUser /> },
              { id: 2, name: t("link_user2"), Icon: <FiUserPlus /> },
            ]}
          />
        </Suspense>
        <Suspense fallback="">
          <LinkItem
            name={t("link_product")}
            Icon={<GiShoppingBag />}
            sidemenu={[
              { id: 1, name: t("link_product1"), Icon: <AiOutlineSmallDash /> },
              { id: 2, name: t("link_product2"), Icon: <AiOutlineFolderAdd /> },
            ]}
          />
        </Suspense>
      </div>
    </aside>
  );
}

export default Sidenav;
