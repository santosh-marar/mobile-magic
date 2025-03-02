"use client";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Router, Send } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { BACKEND_URL, WORKER_API_URL } from "@/config";
import { useRouter } from "next/navigation";

export function Prompt() {
  const [prompt, setPrompt] = useState("");
  const { getToken } = useAuth();
  const router = useRouter();

  return (
    <div className="relative">
      <Textarea
        placeholder="Create a chess application..."
				value={prompt}
				onChange={(e) => setPrompt(e.target.value)}
				className="py-4 pl-4 pr-12 min-h-28 max-h-40 overflow-auto"
			/>
      {prompt && (
				<Button
					className="absolute top-4 right-4"
					onClick={async () => {
            const token = await getToken();
            const response = await axios.post(
							`${BACKEND_URL}/project`, {
                prompt: prompt,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // You should get the worker url here.
            await axios.post(`${WORKER_API_URL}/prompt`, {
                projectId: response.data.projectId,
                prompt: prompt,
            });
            router.push(`/project/${response.data.projectId}`);
        }}>
          <Send />
        </Button>
      )}
    </div>
  );
}