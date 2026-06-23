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
import Testimonials from "@/components/Testimonials";
import VideoShowcase from "@/components/VideoShowcase";
import EmergencyButton from "@/components/EmergencyButton";

import React from "react";
import SpaicelDoc from "@/components/SpaicelDoc";
import TripleRowTicker from "@/components/TripleRowTicker";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TripleRowTicker />
      <SpaicelDoc />
      <DoctersCarocel />
      <LabsCard />
      <MedicalCard />
      <FamilyCarePackages />
      <VideoShowcase />
      <PopularServices />
      <PhyServices />
      <CuppingBannerSection />
      <Testimonials />
      <AppIntroBanner />
      <ExtraAds />
      <EmergencyButton />
    </>
  );
}
