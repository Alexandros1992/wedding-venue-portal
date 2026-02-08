"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const Logout = () => {
    const router = useRouter();

    const logout = async () => {
        await signOut(auth);
        router.push("/admin/login");
    };

    return (
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
            Logout
        </button>
    );
}

export default Logout;