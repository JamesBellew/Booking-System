import React, { useState } from "react";

const Bookings: React.FC = ()=>{
    let students = ["Vikas", "Utsav", "Pranjal", 
    "Aditya", "Arya"]
let string = JSON.stringify(students)
localStorage.setItem("students", string)

const savedBookingsJSON = localStorage.getItem('bookings');
const savedBookings = JSON.parse(savedBookingsJSON);
     const [bookings,updateBookings] = useState<string | null| object>([localStorage.getItem('bookings')]);
    console.log(bookings);
    // const bookings = localStorage.getItem('bookings');
    const deleteBooking = (bookings:any) =>{
localStorage.clear();
updateBookings(null);
    }
return(
    <>

    <h4>Your Bookings</h4>
    {/* I want to get rid of this section */}
    {savedBookings &&
    <li>hel<button onClick={()=>deleteBooking(bookings)}>Delete</button></li>

}
    {/* {toLocaleString("en-US", options)} */}
    </>
)
}
export default Bookings