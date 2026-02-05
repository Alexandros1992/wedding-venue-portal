"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Calendar({onSelect}) {
    const [unavailable, setUnavailable] = useState([]);

    useEffect(() => {
        async function load() {
            const snap = await getDocs(collection(db, "bookings"));

            const dates = snap.docs.filter(d => d.data().status === "approved").map(d => d.data().date);
            setUnavailable(dates);
        }
        load();
    }, []);

    return (
        <input
            type="date" className="text-purple-700 border p-3 rounded w-full"
            onChange = {(e) => {
                if (unavailable.includes(e.target.value)) {
                    alert("This date is unavailable. Please select another date.");
                    e.target.value = "";
                } else {
                    onSelect(e.target.value);
                }   
            }}
            />
    );
}