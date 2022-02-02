import React, { useRef, useState } from "react";
import egyptflag from "../../img/egyptian-flag-small.png";
import englishflag from "../../img/british-flag.svg";
import { useTranslation } from "react-i18next";

function LangItem({ openlag, setopenlag, outerCont, innerCont }) {
  const { t, i18n } = useTranslation();
  return (
    <div className="lang_menu">
      <div className="content" ref={outerCont}>
        <div className="wrapper" ref={innerCont}>
          <ul>
            <li>
              <button
                disabled={i18n.language == "ar" ? true : false}
                onClick={() => i18n.changeLanguage("ar")}
                style={{ opacity: i18n.language == "ar" ? "0.5" : "1" }}
              >
                <img src={egyptflag} alt="egypt" loading="lazy" />
                {t("lang-ar")}
              </button>
            </li>
            <li>
              <button
                disabled={i18n.language == "en" ? true : false}
                onClick={() => i18n.changeLanguage("en")}
                style={{ opacity: i18n.language == "en" ? "0.5" : "1" }}
              >
                <img src={englishflag} alt="britsh" loading="lazy" />
                {t("lang-en")}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LangItem;
