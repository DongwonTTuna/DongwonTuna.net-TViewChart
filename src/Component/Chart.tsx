import { useState } from "react";
import { motion } from "framer-motion";
import Chartmenu from "./Chartmenu";

export default function (props: any) {
  const [ToggleShow, setToggle] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="backgr w-[90vw] min-w-[1200px] h-[70vh] min-h-[800px] mt-16 mx-auto rounded-lg"
    >
      {ToggleShow && <Chartmenu exc={props.exc} settoggle={setToggle}/>}
      <div>
        
      </div>
    </motion.div>
  );
}
