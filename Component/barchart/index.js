import React from "react";
import styled from "styled-components";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



function Barchart() {
  const config = {
    data: {
      labels: [
        "Salary",
        "Freelancing",
        "Investments",
        "Stocks",
        "Crypto",
        "Loan",
        "Pocket Money",
        "Other",
      ],
      datasets: [
        {
          data: [65, 59, 80, 81, 56, 55, 40, 30],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(137, 212, 156, 0.2)",
            "rgba(223, 161, 231, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(137, 212, 156)",
            "rgb(223, 161, 231)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  };
  return (
    <PieChartStyled>
      <div className="piechart">
        <div className="pie">
          <Bar {...config}></Bar>
        </div>
      </div>
    </PieChartStyled>
  );
}

const PieChartStyled = styled.div`
  .piechart {
    display: flex;
    justify-content: center;
    background-color: white;
    border-radius: 1rem;
    width: 100%;
    .pie {
      width: fit-content;
      position: relative;
      height: 14rem;
      display: flex;
      padding-top: 1rem;
    }
  }
`;

export default Barchart;