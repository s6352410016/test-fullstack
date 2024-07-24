import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboad"
  // other metadata
};

export default function Home() {
  return (
    <>
      <ECommerce />
    </>
  );
}
