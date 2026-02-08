"use client";

import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function BookingForm({date, onSuccess}){
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        guests: "",
        package: "Basic"
    });

    const submit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "bookings"), {
            ...form,
            date,
            status: "pending",
            createdAt: Timestamp.now()
        });
        
        onSuccess();
    };

        return(
            <form onSubmit={submit} className="space-y-3 mt-4">
                <input className="text-purple-700 border p-2 w-full" placeholder="Name" type="text" onChange={e => setForm({...form, name: e.target.value})}/>
                <input className="text-purple-700 border p-2 w-full" placeholder="Email" type="email" onChange={e => setForm({...form, email: e.target.value})}/>
                <input className="text-purple-700 border p-2 w-full" placeholder="Phone" type="tel" onChange={e => setForm({...form, phone: e.target.value})}/>
                <input className="text-purple-700 border p-2 w-full" placeholder="Number of Guests" type="number" onChange={e => setForm({...form, guests: e.target.value})}/>
                <select className="text-purple-700 border p-2 w-full" onChange={e => setForm({...form, package: e.target.value})}>
                    <option className="text-gray-800" value="Basic">Basic Package</option>
                    <option className="text-gray-800" value="Standard">Standard Package</option>
                    <option className="text-gray-800" value="Premium">Premium Package</option>
                </select>
                <button type="submit" className="bg-purple-700 text-white p-3 rounded w-full
                    transition-all duration-200
                    hover:bg-purple-800
                    hover:scale-[1.02]
                    hover:shadow-lg
                    active:scale-95">
                    Request Booking
                </button>
            </form>
                
        );

}