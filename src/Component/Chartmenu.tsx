import binance from "../img/binance.svg";
import upbit from "../img/upbit.svg";
import gateio from "../img/gateio.svg";
import huobi from "../img/huobi.svg";
import kucoin from "../img/kucoin.png";
import mexc from "../img/mexc.png";
import ftx from "../img/ftx.svg";
import { useRef } from "react";

const imgsrc: { [key: string]: string } = {
  BINANCE: binance,
  UPBIT: upbit,
  GATEIO: gateio,
  HUOBI: huobi,
  KUCOIN: kucoin,
  FTX: ftx,
  MEXC: mexc,
};

export default function (props: any) {
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={divRef} className="backgr mx-auto w-[90vw] h-[150px] mb-8 flex">
        <div className="flex ml-4 flex-col items-center justify-center">
            <img src={imgsrc[props.exc]} className="w-24 h-24 mt-3" />
            <p className="text-xl mt-2 text-slate-500">{props.exc}</p>
        </div>

    </div>
  );
}
