"use client";

import { useState } from "react";
import Calendar from "@/componenets/Calendar";
import BookingForm from "@/componenets/BookingForm";

export default function Book() {
    const [date, setDate] = useState(null);

    return (
        <div className="p-10 max-w-x1 mx-auto">
            <h2 className="text-2x1 mb-4">Select Date</h2>
            <Calendar onSelect={setDate}/>
            {date && <BookingForm date={date} />}
        </div>
    );
}