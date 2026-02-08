"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Calendar({ value, onSelect }) {
  const [unavailable, setUnavailable] = useState([]);

  useEffect(() => {
    async function load() {
      const snap = await getDocs(collection(db, "bookings"));

      const dates = snap.docs
        .filter(d => d.data().status === "approved")
        .map(d => d.data().date);

      setUnavailable(dates);
    }
    load();
  }, []);

  return (
    <input
      type="date"
      className="text-purple-700 border p-3 rounded w-full"
      value={value || ""}        /* 👈 THIS allows reset */
      onChange={(e) => {
        const selected = e.target.value;

        if (unavailable.includes(selected)) {
          alert("This date is unavailable. Please select another date.");
          onSelect(null);        // 👈 reset parent too
        } else {
          onSelect(selected);
        }
      }}
    />
  );
}
