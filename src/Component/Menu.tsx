import React from 'react';
import { motion } from 'framer-motion';
import binance from '../img/binance.svg';
import upbit from '../img/upbit.svg'
import gateio from '../img/gateio.svg'
import huobi from '../img/huobi.svg'
import kucoin from '../img/kucoin.png'
import mexc from  '../img/mexc.png'
import ftx from '../img/ftx.svg'

export default function (){

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:2}} className='backgr w-[80vw] h-[200px] mx-auto mt-32 rounded-lg flex items-center justify-between'>
            <div/>
            <motion.div className="rounded-xl hover:bg-slate-400 p-4 transition-colors duration-500" initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:1}}>
                <motion.img src={binance} className="w-32 h-32 cursor-pointer" whileHover={{scale:1.1}}  transition={{duration:0.5}} />
            </motion.div>
            <motion.div className="rounded-xl hover:bg-slate-400 p-4 transition-colors duration-500" initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:1,delay:0.15}}>
                <motion.img src={upbit} className="w-32 h-32 cursor-pointer" whileHover={{scale:1.1}}  transition={{duration:0.5}} />
            </motion.div>
            <motion.div  className="rounded-xl hover:bg-slate-400 p-4 transition-colors duration-500" initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:1,delay:0.3}}>
                <motion.img src={gateio} className="w-32 h-32 cursor-pointer" whileHover={{scale:1.1}}  transition={{duration:0.5}} />
            </motion.div>
            <motion.div className="rounded-xl hover:bg-slate-400 p-4 transition-colors duration-500" initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:1,delay:0.45}}>
                <motion.img src={huobi} className="w-32 h-32 cursor-pointer" whileHover={{scale:1.1}}  transition={{duration:0.5}} />
            </motion.div>
            <motion.div className="rounded-xl hover:bg-slate-400 p-4 transition-colors duration-500" initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:1,delay:0.6}}>
                <motion.img src={kucoin} className="w-32 h-32 cursor-pointer" whileHover={{scale:1.1}}  transition={{duration:0.5}} />
            </motion.div>
            <motion.div className="rounded-xl hover:bg-slate-400 p-4 transition-colors duration-500" initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:1,delay:0.75}}>
                <motion.img src={mexc} className="w-32 h-32 cursor-pointer" whileHover={{scale:1.1}}  transition={{duration:0.5}} />
            </motion.div>
            <motion.div className="rounded-xl hover:bg-slate-400 p-4 transition-colors duration-500" initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:1,delay:0.9}}>
                <motion.img src={ftx} className="w-32 h-32 cursor-pointer" whileHover={{scale:1.1}}  transition={{duration:0.5}} />
            </motion.div>
            <div/>
        </motion.div>

    )

}