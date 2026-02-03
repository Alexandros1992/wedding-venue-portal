"use client";

import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function BookingForm({date}){
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

        alert("Request sent! We will contact you soon.");
    };

        return(
            <form onSubmit={submit} className="space-y-3 mt-4">
                <input className="border p-2 w-full" placeholder="Name" type="text" onChange={e => setForm({...form, name: e.target.value})}/>
                <input className="border p-2 w-full" placeholder="Email" type="email" onChange={e => setForm({...form, email: e.target.value})}/>
                <input className="border p-2 w-full" placeholder="Phone" type="tel" onChange={e => setForm({...form, phone: e.target.value})}/>
                <input className="border p-2 w-full" placeholder="Number of Guests" type="number" onChange={e => setForm({...form, guests: e.target.value})}/>
                <select className="border p-2 w-full" onChange={e => setForm({...form, package: e.target.value})}>
                    <option value="Basic">Basic Package</option>
                    <option value="Standard">Standard Package</option>
                    <option value="Premium">Premium Package</option>
                </select>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Request Booking</button>
            </form>
                
        );

}