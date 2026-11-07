"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 200);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;
  return <button type="button" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "auto" })} aria-label="Volver arriba" title="Volver arriba">↑</button>;
}
