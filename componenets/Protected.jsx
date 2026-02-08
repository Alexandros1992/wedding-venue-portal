"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const Protected = ({ children }) => {
    const [user] = useAuthState(auth);
    const router = useRouter();

    if (!user) {
        router.push("/admin/login");
        return null; // or a loading spinner
    }

    return children;
}

export default Protected;