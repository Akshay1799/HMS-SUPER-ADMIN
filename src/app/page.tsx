"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import { ROUTES } from "@/constants/routes";
import { Loader2 } from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace(ROUTES.dashboard);
    } else {
      router.replace(ROUTES.login);
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
}
