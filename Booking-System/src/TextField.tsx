import React from "react"
import { useState,useRef } from 'react'
import Calendar from 'react-calendar';
import Bookings from "./Bookings";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
interface Props{
    text:string;
    ok?:boolean;
    i:number;
    fn?: ()=> void;
}




export const TextField: React.FC<Props> = ()=>{
    const timesArray1=[
        '9:00',
        '9:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00'
    ]
    const timesArray2=[
        '12:30',
        '1:00',
        '1:30',
        '02:00',
        '02:30',
        '03:00',
        '03:30'
    ]
    const [showConfirmMsg,updateMsg] = useState(false);
const [timeSelect,updateTimeSelected] = useState<string | null | number>(null)
const NewBookingClickedHandler = (time:string | number | any) =>{
    console.log(time.number);
     updateMsg(true)
     updateTimeSelected(time.number)
}

const FirstTimeTable = timesArray1.map((number) =>
  <button onClick={() => NewBookingClickedHandler({number})}>{number}</button>
);
const SecondTimeTable = timesArray2.map((number) =>
  <button>{number}</button>
);

    const options = { weekday: 'long',  month: 'short', day: 'numeric' };
    const [count,setCount] = useState<number | null>(5);
    const [value, onChange] = useState<Value>(new Date());
    const [showTimePicker,updateTimePicker] = useState<boolean>(false);
const userSelectedDate = () =>{
    updateTimePicker(true)
    
}
const userSelectOtherDate = () =>{
updateTimePicker(false)
updateMsg(false)

}
const userNewBookingHandler = () =>{
    console.log('cliked');
    updateMsg(false)
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
       
<button onClick={userSelectOtherDate}>Select Different Date</button>
<br></br>

<br></br>
<br></br>
      </div>
      <div>
{FirstTimeTable}
</div>
<div>
{SecondTimeTable}
</div>
<br></br>

{showConfirmMsg &&
<>
<h3 className="text-red-700 underline text-3xl font-bold underline">New Booking For {timeSelect} on {value.toLocaleString("en-US", options)}</h3>

<br></br>
<div>
  <button onClick={userNewBookingHandler}>Book Now</button>  
</div>
</>
}
</>
}

{
    !showTimePicker &&
    <Bookings/>
}
      </>
    );
};