import binance from '../img/binance.svg';
import upbit from '../img/upbit.svg'
import gateio from '../img/gateio.svg'
import huobi from '../img/huobi.svg'
import kucoin from '../img/kucoin.png'
import mexc from  '../img/mexc.png'
import ftx from '../img/ftx.svg'
import { motion } from 'framer-motion';

const imgsrc : {[key : string]: string} = {'BINANCE': binance, 'UPBIT': upbit, 'GATEIO': gateio, 'HUOBI': huobi,'KUCOIN': kucoin, 'FTX': ftx, 'MEXC': mexc}


export default function(props: any){

    return(
        <motion.div initial={{height:0}} animate={{height:30}} exit={{height:0}} className="absolute z-10">
            <img src={imgsrc[props.exc]} className="w-32 h-32" />
        </motion.div>
    )
}