import React, { useState } from "react";

const Bookings: React.FC = ()=>{


const savedBookingsJSON = localStorage.getItem('bookings');
const savedBookings = JSON.parse(savedBookingsJSON);
     const [bookings,updateBookings] = useState<string | null| object>([localStorage.getItem('bookings')]);
     const formatDate = (date:any) => {
        return new Date(date).toLocaleDateString();
      };
    
      const formatTime = (time:any) => {
        return new Date(time).toLocaleTimeString();
      };
//     const deleteBooking = (bookings:any) =>{
// localStorage.clear();
// updateBookings(null);
//     }
     const deleteBooking = (bookingToDelete:any) => {
    // Filter out the booking to delete
    const updatedBookings = savedBookings.filter(booking => (
      booking.day !== bookingToDelete.day || booking.time !== bookingToDelete.time
    ));

    // Update local storage with the modified array
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    // Update state to reflect the change
    // setSavedBookings(updatedBookings);
  };
return(
    <>

    <h4>Your Bookings</h4>
    {savedBookings && savedBookings.map((booking:any, index:any) => (
    <p key={index}>
         {formatDate(booking.day) + " "} 
      at  {booking.time + "    "}
        <button onClick={() => deleteBooking(booking)}>Delete</button>
    </p>
))}
    {/* {toLocaleString("en-US", options)} */}
    </>
)
}
export default Bookings