// pages/index.tsx
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/PageOrders");
  }, [router]);
  return <div></div>;
};
export default Home;
