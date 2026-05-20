import AppIntroBanner from "@/components/AppIntroBanner";
import CuppingBannerSection from "@/components/CuppingBannerSection";
import DoctersCarocel from "@/components/DoctersCarocel";
import ExtraAds from "@/components/ExtraAds";
import FamilyCarePackages from "@/components/FamilyCarePackages";
import HeroSection from "@/components/HeroSection";
import LabsCard from "@/components/LabsCard";
import MedicalCard from "@/components/MedicalCard";
import PhyServices from "@/components/PhyService";
import PopularServices from "@/components/PopularServices";
import VideoShowcase from "@/components/VideoShowcase";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DoctersCarocel />
      <LabsCard />
      {/* <MedicalCard /> */}
      <FamilyCarePackages />
      <VideoShowcase />
      <PopularServices />
      <PhyServices />
      <CuppingBannerSection />
      <AppIntroBanner />
      <ExtraAds />
    </>
  );
}
