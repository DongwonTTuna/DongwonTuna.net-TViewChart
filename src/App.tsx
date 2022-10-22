import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Menu from "./Component/Menu";
import ChartTop from "./Component/ChartTop";

export default function () {
  const [exchange, SetExchange] = useState(null);
  const [sym, SetChartTicker] = useState("BTCUSDT");
  return (
    <>
      <div className="absolute top-0 bg-gradient-to-br from-[#F5E3E6] to-[#D9E4F5] h-screen w-screen" />
      <Menu setExc={SetExchange} />
      <AnimatePresence mode={"wait"} initial={true}>
        {exchange !== null && <ChartTop key={exchange} exc={exchange} sym={sym} setsym={SetChartTicker}/>}
      </AnimatePresence>
    </>
  );
}
