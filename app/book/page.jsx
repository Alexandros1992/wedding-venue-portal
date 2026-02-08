"use client";

import { useState } from "react";
import Calendar from "@/componenets/Calendar";
import BookingForm from "@/componenets/BookingForm";

export default function Book() {
    const [date, setDate] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 p-10 max-w-x1 mx-auto">
            <h2 className="text-purple-700 text-2x1 mb-4">Select Date</h2>
            <Calendar value={date} onSelect={setDate}/>
            {date && !submitted && (
                <BookingForm
                date={date}
                onSuccess={() => setSubmitted(true)}
            />
            )}
            {submitted && (
            <div className="mt-6 p-4 bg-green-100 text-green-700 rounded">
                ✅Your request for has been submitted!
                We will contact you soon to confirm the details.
                
                <button className="block mt-3 text-purple-700 underline"
                onClick={() => {
                    setSubmitted(false);
                    setDate(null);
                }}>
                    Book Another Date
                </button>
            </div>
            )}
        </div>
    );
}