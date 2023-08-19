import React from "react"
import { useState,useRef } from 'react'
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
interface Props{
    text:string;
    ok?:boolean;
    i:number;
    fn?: ()=> void;
}
export const TextField: React.FC<Props> = ()=>{
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [count,setCount] = useState<number | null>(5);
    const [value, onChange] = useState<Value>(new Date());
    const [showTimePicker,updateTimePicker] = useState<boolean>(false);
const userSelectedDate = () =>{
    console.log('You just clicked a new date' );
    updateTimePicker(true)
}
const userSelectOtherDate = () =>{
updateTimePicker(false)
}
    return(
        <>
        <div>
            {!showTimePicker &&
        <Calendar onChange={onChange} value={value} onClickDay={userSelectedDate}/>
            }
      </div>
      {

      showTimePicker &&
      <>
      <div>
        <br></br>
        <h3 className="text-red-700 underline text-3xl font-bold underline">New Booking For {value.toLocaleString("en-US", options)}</h3>
<button onClick={userSelectOtherDate}>Select Different Date</button>
<br></br>

<br></br>
<br></br>
      </div>
      <div>
<button>9:00</button>
<button>9:30</button>
<button>10:00</button>
<button>10:30</button>
<button>11:00</button>
<button>11:30</button>
<button>12:00</button>
</div>
<div>
<button>12:30</button>
<button>1:00</button>
<button>1:30</button>
<button>02:00</button>
<button>02:30</button>
<button>03:00</button>
<button>03:30</button>
</div>

</>
}
      </>
    );
};