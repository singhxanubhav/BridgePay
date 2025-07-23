import { HeroSection } from "../../components/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | BridgePay",
  description: "Welcome to the BridgePay digital wallet application",
};

export default function Home() {

  return <HeroSection />;
}