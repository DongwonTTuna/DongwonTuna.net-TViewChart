import { useState, useEffect } from "react"
import ReactSearchBox from "react-search-box";

export default function (props: any) {
    const [data, SetData] = useState()
    useEffect(() => {
        GetData(props.exc, SetData)
    }, [])
    return (
        <ReactSearchBox className="" placeholder={props.exc === "UPBIT" ? "KRWBTC" : "BTCUSDT"} data={data} autoFocus clearOnSelect onSelect={(select : any)=> {
            props.setSym(select.item.value)
        }}/>
    )

}

function GetData(exchange: string, SetData: any): void{
    const url = `https://api.dongwontuna.net/ticker?exchange=${exchange}`
    fetch(url).then(res=> res.json()).then(res=>{
        const cdata = res.data.map((item: string)=> {
            return ({
                key: item.toLowerCase().replace('_','').replace('/','').replace('-',''),
                value: item.toUpperCase().replace('_','').replace('/','').replace('-','')
            })
        })
        SetData(cdata)
    })
    

}