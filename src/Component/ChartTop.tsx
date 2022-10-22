import Chart from "./Chart";
import Chartmenu from "./Chartmenu";
import { motion } from "framer-motion";
export default function (props: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Chartmenu exc={props.exc} setTicker={props.setsym} />
      <Chart exc={props.exc} sym={props.sym} />
    </motion.div>
  );
}
