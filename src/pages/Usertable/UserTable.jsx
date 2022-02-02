import React from "react";
import { useTranslation } from "react-i18next";

import "./usertable.scss";

function UserTable() {
  const { t, i18n } = useTranslation();
  return (
    <div className="user_table">
      <h5>{t("userTabletitle")}</h5>
      <div className="table">
        <div className="head">
          <span className="numb"> #</span>
          <span className="name"> {t("userTablename")}</span>
          <span className="email">{t("userTableemail")}</span>
        </div>
        <div className="body">
          <div className="item">
            <span className="numb">1</span>
            <span className="name">Ahmed Hassan</span>
            <span className="email"> A7med.hassan.mohi@gmail.com</span>
          </div>
          <div className="item">
            <span className="numb">1</span>
            <span className="name">Ahmed Hassan</span>
            <span className="email"> A7med.hassan.mohi@gmail.com</span>
          </div>
          <div className="item">
            <span className="numb">1</span>
            <span className="name">Ahmed Hassan</span>
            <span className="email"> A7med.hassan.mohi@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserTable;
