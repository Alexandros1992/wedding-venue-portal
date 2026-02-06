"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Login(){
    const router = useRouter();

    const login = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/admin/dashboard");
        } catch (error) {
            alert("Login failed: " + error.message);
        }
    };

    return (
        <form onSubmit={login} className="p-10 max-w-md mx-auto space-y-3">
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <input name="email" type="email" id="email" placeholder="E-mail" className="border p-2 w-full"/>
            <input name="password" type="password" id="password" placeholder="Password" className="border p-2 w-full"/>
            <button type="submit" className="bg-purple-700 text-white px-4 py-2 rounded">Login</button>
        </form>
    );
}