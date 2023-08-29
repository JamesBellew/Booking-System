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
  <div className="w-2/3 bg-slate-00/10 container mx-auto ">
  {savedBookings && savedBookings.length > 0 ? (
      <h1 className="m-5">Your Bookings</h1>
    ) : (
      <h1>No Bookings Yet</h1>
    )}

    {savedBookings &&  savedBookings.map((booking:any, index:any) => (
    <p className="text-left border-l-2 w-96 mb-2 mx-auto border-indigo-700 bg-slate-700/10 p-2  w-auto " key={index}>
          <button className="bg-indigo-700 hover:scale-95 transition-all rounded ml-3" onClick={() => deleteBooking(booking)}>Delete</button> <span className="text-center mx-auto ml-5"> 
         {booking.day + " "} 
      at  {booking.time + "    "}
      </span>
    
    </p>
))}
    {/* {toLocaleString("en-US", options)} */}
    </div>
)
}
export default Bookings