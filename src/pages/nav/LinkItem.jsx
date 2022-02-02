import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsArrowRightShort } from "react-icons/bs";

function LinkItem({ name, Icon, sidemenu }) {
  const [open, setopen] = useState(false);
  const [arropen, setarropen] = useState(false);
  const outerCont = useRef(null);
  const innerCont = useRef(null);
  const openMenu = () => {
    if (sidemenu?.length > 0) {
      let innerHight = innerCont.current.getBoundingClientRect().height;
      if (open) {
        outerCont.current.style.height = `0px`;
        setarropen(false);

        setopen(false);
      } else {
        outerCont.current.style.height = `${innerHight}px`;
        setarropen(true);
        setopen(true);
      }
    }
  };
  //   console.log(sidemenu);
  return (
    <div>
      <ul>
        <li onClick={openMenu}>
          <a href="#">
            {sidemenu?.length > 0 && (
              <BsArrowRightShort className={`arr ${arropen ? "down" : ""}`} />
            )}

            <p>{name}</p>
          </a>
          {Icon}
        </li>
      </ul>
      {sidemenu?.length > 0 && (
        <div className="item_container" ref={outerCont}>
          <div className="wrap" ref={innerCont}>
            <ul>
              {sidemenu.map((it) => {
                return (
                  <li key={it.id}>
                    <a href="#">{it.name}</a>
                    {it.Icon}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default LinkItem;
