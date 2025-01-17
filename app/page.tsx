"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hello world!</h1>

      <button onClick={() => router.push("/blog")}>Go to blog</button>
    </div>
  );
}
