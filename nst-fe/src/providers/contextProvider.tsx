"use client";

import { useEffect } from "react";
import { useStore } from "@/app/store";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

export default function ContextProvider({ children }: any) {
	// const router = useRouter();
	const { logout, initializeFromLocalStorage } = useStore();

	// function logoutTimer(tokenExpiry: Date) {
	// 	setTimeout(() => {
	// 		logout();
	// 		router.push("/login");
	// 		toast.info("Session expired.");
	// 	}, tokenExpiry.getTime() - new Date().getTime());
	// }

	// useEffect(() => {
	// 	const expiry = localStorage.getItem("expiry");
	// 	const tokenExpiry = new Date(expiry);
	// 	if (expiry) {
	// 		logoutTimer(tokenExpiry);
	// 	}

	// 	return () => clearTimeout(logoutTimer);
	// }, []);

	useEffect(() => {
		initializeFromLocalStorage();
	}, [initializeFromLocalStorage]);

	return <>{children}</>;
}
