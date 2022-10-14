import { AnimatePresence } from "framer-motion";
import Menu from "./Component/Menu";
export default function () {
  return (
    <>
      <div className="absolute top-0 bg-gradient-to-br from-[#F5E3E6] to-[#D9E4F5] h-screen w-screen" />
      <AnimatePresence initial={true}>
        <Menu/>
      </AnimatePresence>
    </>
  );
}
