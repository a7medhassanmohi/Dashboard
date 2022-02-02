import React, { lazy, Suspense } from "react";
import "./home.scss";
import { FaHome } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";
import { BiBarChart } from "react-icons/bi";
import { BsFillPieChartFill } from "react-icons/bs";
import { worldMill } from "@react-jvectormap/world";
import { VectorMap } from "@react-jvectormap/core";
import { useTranslation } from "react-i18next";
const LineChart = lazy(() => import("../charts/Line"));
const Card = lazy(() => import("./Card"));
const Dougnuts = lazy(() => import("../charts/Dougnuts"));
const UserTable = lazy(() => import("../Usertable/UserTable"));
const ProductTable = lazy(() => import("../productTable/ProductTable"));

function Home() {
  const { t, i18n } = useTranslation();
  return (
    <section className="home">
      <div className="content">
        <div className="title">
          <div className="icon">
            <FaHome />
          </div>
          <h5>{t("main_title")}</h5>
        </div>
        <div className="cards">
          <Suspense fallback="">
            <Card
              name={t("card_user-name")}
              numb="500"
              icon={<BsBarChartLineFill />}
              bg="linear-gradient(to right, rgb(144, 202, 249), rgb(4, 126, 223) 99%)"
            />
          </Suspense>
          <Suspense fallback="">
            <Card
              name={t("card_product-name")}
              numb="1000"
              icon={<BiBarChart />}
              bg="linear-gradient(to right, rgb(132, 217, 210), rgb(7, 205, 174))"
            />
          </Suspense>
          <Suspense fallback="">
            <Card
              name={t("card_order-name")}
              numb="50"
              icon={<BsFillPieChartFill />}
              bg="linear-gradient(to right, rgb(255, 191, 150), rgb(254, 112, 150))"
            />
          </Suspense>
        </div>
        <div className="map">
          <VectorMap map={worldMill} />
        </div>
        <div className="carts">
          <div className="line">
            <Suspense fallback="">
              <LineChart />
            </Suspense>
          </div>
          <div className="dougnuts">
            <Suspense fallback="">
              <Dougnuts />
            </Suspense>
          </div>
          <Suspense fallback="">
            <UserTable />
          </Suspense>
          <Suspense fallback="">
            <ProductTable />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default Home;
