import React from "react";
import { useEffect } from "react";

export default function Test() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace("http://127.0.0.1:8080/user_account");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  return "Will redirect in 3 seconds...";
}
