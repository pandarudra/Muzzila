import { useEffect, useState } from "react";

export const useAuth = () => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
    setLoading(false);
  }, []);
  return { auth, loading };
};
