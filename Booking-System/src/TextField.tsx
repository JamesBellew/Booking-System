import React from "react"
import { useState,useRef } from 'react'
interface Props{
    text:string;
    ok?:boolean;
    i:number;
    fn?: ()=> void;
}
export const TextField: React.FC<Props> = ()=>{
    const [count,setCount] = useState<number | null>(5);
    const inputRef=  useRef<>();
    return(
        <div>
            <input ref={}></input>
        </div>
    );
};