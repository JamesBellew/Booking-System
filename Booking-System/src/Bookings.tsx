import React, { useState } from "react";

const Bookings: React.FC = ()=>{


const [savedBookingsJSON,updateBookings1] = useState(localStorage.getItem('bookings'));
const [savedBookings,updateSavedBookings] = useState(JSON.parse(savedBookingsJSON));
     const [bookings,updateBookings] = useState<string | null| object>([localStorage.getItem('bookings')]);

const deleteBooking = (bookingToDelete: any) => {
  // Filter out the booking to delete
  const updatedBookings = savedBookings.filter(booking => (
    booking.day !== bookingToDelete.day || booking.time !== bookingToDelete.time
  ));
   
  // Update local storage with the modified array
  localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  
  // Update state to reflect the change
  updateSavedBookings(updatedBookings);
};


return(
    <>
  {savedBookings && savedBookings.length > 0 ? (
      <h1>Your Bookings</h1>
    ) : (
      <h1>No Bookings Yet</h1>
    )}

    {savedBookings &&  savedBookings.map((booking:any, index:any) => (
    <p id="test" key={index}>
         {booking.day + " "} 
      at  {booking.time + "    "}
        <button onClick={() => deleteBooking(booking)}>Delete</button>
    </p>
))}
    {/* {toLocaleString("en-US", options)} */}
    </>
)
}
export default Bookings