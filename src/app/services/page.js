import DoctersCarocel from "@/components/DoctersCarocel";
import FamilyCarePackages from "@/components/FamilyCarePackages";
import PhyServices from "@/components/PhyService";
import PopularServices from "@/components/PopularServices";
import React from "react";

export default function page() {
  return (
    <>
      <DoctersCarocel />
      <FamilyCarePackages />
      <PopularServices />
      <PhyServices />
    </>
  );
}
