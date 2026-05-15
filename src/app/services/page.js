import FamilyCarePackages from "@/components/FamilyCarePackages";
import PhyServices from "@/components/PhyService";
import PopularServices from "@/components/PopularServices";
import React from "react";

export default function page() {
  return (
    <>
      <FamilyCarePackages />
      <PopularServices />
      <PhyServices />
    </>
  );
}
