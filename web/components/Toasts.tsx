"use client";

import { useSite } from "@/lib/site-context";

export default function Toasts() {
  const { toasts } = useSite();

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast">
          {toast.message}
        </div>
      ))}
    </div>
  );
}
