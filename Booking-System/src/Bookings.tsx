import React, { useState } from "react";

const Bookings: React.FC = ()=>{
    let students = ["Vikas", "Utsav", "Pranjal", 
    "Aditya", "Arya"]
let string = JSON.stringify(students)
localStorage.setItem("students", string)
     const [bookings,updateBookings] = useState<null>([localStorage.getItem('bookings')]);
    console.log(bookings);
    // const bookings = localStorage.getItem('bookings');
    const deleteBooking = (bookings:any) =>{
localStorage.clear();
updateBookings(null);
    }
return(
    <>

    <h4>Your Bookings</h4>
    {bookings &&
    <li>{bookings} <button onClick={()=>deleteBooking(bookings)}>Delete</button></li>

}
    {/* {toLocaleString("en-US", options)} */}
    </>
)
}
export default Bookings