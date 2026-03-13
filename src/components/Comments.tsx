"use client";

import { useEffect, useRef } from "react";

export default function Comments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.querySelector("iframe")) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "aidencullo/trueorfalse.online");
    script.setAttribute("data-repo-id", "");
    script.setAttribute("data-category", "Comments");
    script.setAttribute("data-category-id", "");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "dark_dimmed");
    script.setAttribute("data-lang", "en");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    ref.current.appendChild(script);
  }, []);

  return (
    <div className="mt-16 pt-8 border-t border-border">
      <h3 className="text-accent text-xs font-mono tracking-widest uppercase mb-6">
        Comments
      </h3>
      <div ref={ref} />
    </div>
  );
}
