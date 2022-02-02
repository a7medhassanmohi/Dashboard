import React from "react";
import { useTranslation } from "react-i18next";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
function Dougnuts() {
  const { t, i18n } = useTranslation();
  const options = {
    responsive: true,

    plugins: {
      title: {
        display: true,
        text: t("chart_name"),
      },
    },
  };
  const data = {
    labels: [t("dougnutsData1"), t("dougnutsData2"), t("dougnutsData3")],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: ["#419fea", "#44d3c0", "#ff9996"],
        borderColor: ["#419fea", "#44d3c0", "#ff9996"],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
}

export default Dougnuts;
