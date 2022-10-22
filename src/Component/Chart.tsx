import { useEffect } from "react";
import { motion } from "framer-motion";
import { ColorType, createChart } from "lightweight-charts";

export default function (props: any) {
  useEffect(() => {
    Chart(props.exc, props.sym);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="backgr w-[90vw] min-w-[1200px] h-[900px] min-h-[900px] mx-auto rounded-lg relative z-10"
    >
      <div
        id="chart"
        className="absolute rounded-md mt-10 w-[98%] mx-auto left-0 right-0 h-[92%]"
      ></div>
    </motion.div>
  );
}

function Chart(exc: string, sym: string) {
  const domElement = document.getElementById("chart");
  if (domElement === null) return;

  const url = `https://api.dongwontuna.net/chart?exchange=${exc}&symbol=${sym}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.status !== 200) return;
      let cdata: Array<any> = [];
      let vdata: Array<any> = [];

      data.data.map((d: any, index: number) => {
        cdata.push({
          time: d[0] + 32400,
          open: d[1],
          close: d[2],
          low: d[3],
          high: d[4],
        });
        if (index > 0) {
          vdata.push({
            time: d[0] + 32400,
            value: d[5],
            color:
              data.data[index - 1][2] < d[2]
                ? "rgba(0, 150, 136, 0.8)"
                : "rgba(255,82,82, 0.8)",
          });
        } else {
          vdata.push({
            time: d[0] + 32400,
            value: d[5],
            color:
              d[2] > d[1] ? "rgba(0, 150, 136, 0.8)" : "rgba(255,82,82, 0.8)",
          });
        }
      });
      candleSeries.setData(cdata);
      volumeSeries.setData(vdata);
    })
    .catch((err) => console.log(err));
  const chartProperties = {
    width: 0,
    height: 0,
    timeScale: { timeVisible: true, secondsVisible: false },
    grid: { vertLines: { visible: false }, horzLines: { visible: false } },
    layout: { background: { type: ColorType.Solid, color: "#FFFFFF00" } },
    localization: { locale: "ja-JP" },
    crosshair: { mode: 0 },
  };
  const chart = createChart(domElement, chartProperties);
  const candleSeries = chart.addCandlestickSeries();
  var volumeSeries = chart.addHistogramSeries({
    color: "#26a69a",
    priceFormat: {
      type: "volume",
    },
    priceScaleId: "",
    scaleMargins: {
      top: 0.85,
      bottom: 0,
    },
  });
}
