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
  //okay lets try thid
  // Update state to reflect the change boiii
  updateSavedBookings(updatedBookings);
};


return(
  <div className="w-96 bg-slate-00/10 container mx-auto ">
  {savedBookings && savedBookings.length > 0 ? (
      <h1 className="m-5">Your Bookings </h1>
    ) : (
      <h1>No Bookings Yet</h1>
    )}

{savedBookings &&
  Object.entries(
    savedBookings.reduce((acc, booking) => {
      if (!acc[booking.day]) {
        acc[booking.day] = [];
      }
      acc[booking.day].push(booking);
      return acc;
    }, {})
  ).map(([day, bookingsForDay]) => (
    <div key={day}>
      <p className="underline mb-4  text-lg text-left font-normal text-gray-400 mb-2">{day}</p>
      {bookingsForDay.map((booking, index) => (
        <p
          className="text-left border-l-2 w-96 mb-2 mx-auto border-indigo-700 bg-slate-700/10 p-2 w-auto"
          key={index}
        >
          <button
            className="bg-indigo-700 hover:scale-95 transition-all rounded ml-3"
            onClick={() => deleteBooking(booking)}
          >
            Delete
          </button>{" "}
          <span className="text-center mx-auto ml-5">
            {booking.day + " "}
            at {booking.time + "    "}
          </span>
        </p>
      ))}
    </div>
  ))}
    {/* {toLocaleString("en-US", options)} */}
    </div>
)
}
export default Bookings