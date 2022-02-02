import React from "react";
import { useTranslation } from "react-i18next";
import "./producttable.scss";
import pr from "../../img/pr.jpg";

function ProductTable() {
  const { t, i18n } = useTranslation();
  return (
    <div className="product_table">
      <h5>{t("productTabletitle")}</h5>
      <div className="table">
        <div className="head">
          <span className="numb"> #</span>
          <span className="name">{t("productTablename")}</span>
          <span className="price">{t("productTableprice")}</span>
        </div>
        <div className="body">
          <div className="item">
            <span className="numb">1</span>
            <div className="name">
              <div className="img">
                <img src={pr} alt="product" loading="lazy" />
              </div>
              <span className="name">new awesome blouse</span>
            </div>
            <span className="price"> 80$</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
