import {useState} from 'react';
import { motion } from 'framer-motion';
import binance from '../img/binance.svg';
import upbit from '../img/upbit.svg'
import gateio from '../img/gateio.svg'
import huobi from '../img/huobi.svg'
import kucoin from '../img/kucoin.png'
import mexc from  '../img/mexc.png'
import ftx from '../img/ftx.svg'


const imgsrc : {[key : string]: string} = {'BINANCE': binance, 'UPBIT': upbit, 'GATEIO': gateio, 'HUOBI': huobi,'KUCOIN': kucoin, 'FTX': ftx, 'MEXC': mexc}

export default function (props: any){


    const [MenuClicked, setMenuClick] = useState('')


    return (
        <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:2}} className='backgr mb-10 w-[90vw] min-w-[1200px] h-[140px] mx-auto mt-10 bg-[rgba(255,255,255)] rounded-lg flex items-center justify-between'>
            <div/>
            {Object.keys(imgsrc).map((item,index: number)=>{
                    return (
                        <motion.div key={item} onClick={()=>{props.setExc(item);setMenuClick(item)}} className={MenuClicked === item ? "menuclicked hover:bg-[rgba(255, 255, 255, 0.35)]" :  "menuprop hover:bg-[rgba(0, 0, 5, 0.8)]"} initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:1,delay:(index/10)*2}}>
                            <motion.img src={imgsrc[item]} className="w-24 h-24 cursor-pointer" whileHover={{scale:1.1}}  transition={{duration:0.5}} />
                        </motion.div>
                    )
            })}
            <div/>
            </motion.div>
    )
}