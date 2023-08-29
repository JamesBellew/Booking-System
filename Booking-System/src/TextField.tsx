import React, { useEffect } from "react"
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
const savedBookingsJSON = localStorage.getItem('bookings') as string;
const savedBookings = JSON.parse(savedBookingsJSON);
const TimeHai = savedBookings[0].time;


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
const [daySelected,updatedDaySelected] = useState<string | null>(null);
const NewBookingClickedHandler = (time:string | number | any) =>{
    console.log(time.number);
     updateMsg(true)
     updateTimeSelected(time.number)
}

const FirstTimeTable = timesArray1.map((number) => {
  const matchingBooking = savedBookings.find((booking) => {
    return daySelected === booking.day && number === booking.time;
  });

  const isBooked = matchingBooking !== undefined;

  return (
    <button
      className={`w-20 border-none m-1 rounded ${isBooked ? 'line-through  text-gray-500' : 'bg-indigo-700/10 hover:bg-indigo-700/50 transition-all'}`}
      onClick={() => isBooked ? null : NewBookingClickedHandler({ number })}
      key={number}
      disabled={isBooked}
    >
      {number}
    </button>
  );
});



const SecondTimeTable = timesArray2.map((number) =>{
const matchingBooking = savedBookings.find((booking) => {
  return daySelected === booking.day && number === booking.time;
});

const isBooked = matchingBooking !== undefined;

return (
  <button
    className={`w-20 border-none m-1 rounded ${isBooked ? 'line-through  text-gray-500' : 'bg-indigo-700/10 hover:bg-indigo-700/50 transition-all'}`}
    onClick={() => isBooked ? null : NewBookingClickedHandler({ number })}
    key={number}
    disabled={isBooked}
  >
    {number}
  </button>
);
});

    const options = { weekday: 'long',  month: 'short', day: 'numeric' };
    const [value, onChange] = useState<Value | null>(new Date());
    const [showTimePicker,updateTimePicker] = useState<boolean>(false);
    const userSelectedDate = () =>{ 
    updateTimePicker(true) 
    }

useEffect(() => {

console.log(value.toLocaleString("en-US", options));
updatedDaySelected(value.toLocaleString("en-US", options));
console.log(daySelected + 'haiiiiii');


});
const userSelectOtherDate = () =>{
updateTimePicker(false)
updateMsg(false)

}
const userNewBookingHandler = () =>{
  console.log('fuckfuck');
  
    const existingBookingsJSON = localStorage.getItem('bookings');
let existingBookings = [];

// Convert existing bookings JSON to an array if it exists
if (existingBookingsJSON) {
  existingBookings = JSON.parse(existingBookingsJSON);
}

// New booking to add
const newBooking = {
  day: value.toLocaleString("en-US", options),
  time: timeSelect
};

// Add the new booking to the existing bookings array
existingBookings.push(newBooking);

// Convert the updated bookings array to JSON
const updatedBookingsJSON = JSON.stringify(existingBookings);

// Save the updated JSON back to localStorage
localStorage.setItem('bookings', updatedBookingsJSON);
    console.log('cliked');
    updateMsg(false)
    updateTimePicker(false)
  
    
}
    return(
        <>
        <div>
            {!showTimePicker &&
        <Calendar minDate={new Date()}  onChange={onChange} value={value} onClickDay={userSelectedDate}/>
            }
      </div>
      {

      showTimePicker &&
      <>
      <div className="">
        <br></br>
       
<button className="bg-indigo-400 rounded mt-[30vh] text-stone-900" onClick={userSelectOtherDate}>Select Different Date</button>

     <br></br>
     <br></br>
     
{FirstTimeTable}
<br></br>
{SecondTimeTable}
</div>
<br></br>

{showConfirmMsg &&
<>
<h3 className="text-2xl font-semibold">New Booking For {timeSelect} on 
 {" "+value.toLocaleString("en-US", options)}</h3>

<br></br>
<div>
  <button className="bg-indigo-700 cursor-pointer rounded" onClick={userNewBookingHandler}>Book Ndow</button>  
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