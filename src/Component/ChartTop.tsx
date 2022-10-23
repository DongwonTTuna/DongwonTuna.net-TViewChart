import Chart from "./Chart";
import Chartmenu from "./Chartmenu";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
export default function (props: any) {
  const [sym, SetChartTicker] = useState(props.exc ==="UPBIT" ? "KRWBTC" : "BTCUSDT");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="-z-10 h-full"
    >
      <Chartmenu key={props.exc} exc={props.exc} setTicker={SetChartTicker} />
      <AnimatePresence mode={"wait"} initial={true}>
        <Chart key={sym} exc={props.exc} sym={sym} />
      </AnimatePresence>
    </motion.div>
  );
}
