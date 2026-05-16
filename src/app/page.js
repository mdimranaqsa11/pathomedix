import AppIntroBanner from "@/components/AppIntroBanner";
import CuppingBannerSection from "@/components/CuppingBannerSection";
import ExtraAds from "@/components/ExtraAds";
import FamilyCarePackages from "@/components/FamilyCarePackages";
import HeroSection from "@/components/HeroSection";
import MobileBannerCarousel from "@/components/MobileBannerCarousel";
import PhyServices from "@/components/PhyService";
import PopularServices from "@/components/PopularServices";
import VideoShowcase from "@/components/VideoShowcase";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
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
