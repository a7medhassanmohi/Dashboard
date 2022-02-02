import React from "react";
import { Line } from "react-chartjs-2";
import { useTranslation } from "react-i18next";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
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
    labels: [t("lineData1"), t("lineData2"), t("lineData3")],
    datasets: [
      {
        label: t("dougnutsData1"),
        data: [5, 3, 8, 5],
        borderColor: "#419fea",
      },
      {
        label: t("dougnutsData2"),
        data: [9, 7, 1, 2],
        borderColor: "#44d3c0",
      },
      {
        label: t("dougnutsData3"),
        data: [3, 5, 1, 6],
        borderColor: "#ff9996",
      },
    ],
  };

  return <Line data={data} options={options} />;
}

export default LineChart;
