"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Protected from "../../../componenets/Protected";
import Logout from "../../../componenets/Logout";

const Dashboard = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const load = async () => {
            const snap = await getDocs(collection(db, "bookings"));
            setList(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        }
        load();
    }, []);

    const change = async (id, status) => {
        await updateDoc(doc(db, "bookings", id), { status });
        setList(list.map(b => b.id === id ? { ...b, status } : b));
    };

    return (
        <Protected>
            <div className="p-10">
                <h2 className="text-2x1 mb-4">Dashboard</h2>
                <Logout />
                {list.map(b => (
                    <div key={b.id} className="p-3 border mb-2 flex justify-between items-center">
                        <div>
                            <p><strong>Name:</strong> {b.name}</p>
                            <p><strong>Email:</strong> {b.email}</p>
                            <p><strong>Date:</strong> {b.date}</p>
                            <p><strong>Status:</strong> {b.status}</p>    
                        </div>
                        <div>
                            <button className="bg-green-500 text-white px-2 mr-2 hover:bg-green-600 transition"
                                onClick={() => change(b.id, "approved")}>Approve</button>
                            <button className="bg-red-500 text-white px-2 hover:bg-red-600 transition"
                                onClick={() => change(b.id, "rejected")}>Reject</button>
                        </div>
                    </div>
                ))}
            </div>
        </Protected>
    );
}

export default Dashboard;