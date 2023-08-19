import React, { useState } from "react";

const Bookings: React.FC = ()=>{
    let students = ["Vikas", "Utsav", "Pranjal", 
    "Aditya", "Arya"]
let string = JSON.stringify(students)
localStorage.setItem("students", string)
     const [booking,updateBookings] = useState([localStorage.getItem('bookings')]);
    console.log(booking);
    
return(
    <>

    <h4>Your Bookings</h4>
    
    </>
)
}
export default Bookings