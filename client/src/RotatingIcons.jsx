import React from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SpaIcon from "@mui/icons-material/Spa";
import HealingIcon from "@mui/icons-material/Healing";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import MasksIcon from "@mui/icons-material/Masks";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import FitbitIcon from "@mui/icons-material/Fitbit";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import Description from "./Description";
import "./styles/icons.scss";
import robo from "./static/robo-centre.avif";

export default function RotatingIcons() {
  return (
    <div class="orbit">
      <Description />
      <ul class="orbit-wrap">
        <li class="orbit-center">
          <img
            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            src={robo}
            alt=""
            class="orbit-center__icon"
          />
        </li>

        <li>
          <ul class="ring-0">
            <li>
              <MonitorHeartIcon class="orbit-icon" />
            </li>
            <li>
              <DirectionsRunIcon class="orbit-icon" />
            </li>
            <li>
              <HealthAndSafetyIcon class="orbit-icon" />
            </li>
            <li>
              <SpaIcon class="orbit-icon" />
            </li>
          </ul>
        </li>

        <li>
          <ul class="ring-1">
            <li>
              <HealingIcon class="orbit-icon" />
            </li>
            <li>
              <MedicalInformationIcon class="orbit-icon" />
            </li>
            <li>
              <VaccinesIcon class="orbit-icon" />
            </li>
          </ul>
        </li>
        <li>
          <ul class="ring-2">
            <li>
              <MasksIcon class="orbit-icon" />
            </li>
            <li>
              <BloodtypeIcon class="orbit-icon" />
            </li>
            <li>
              <MedicationLiquidIcon class="orbit-icon" />
            </li>
            <li>
              <FitbitIcon class="orbit-icon" />
            </li>
          </ul>
        </li>
        <li>
          <ul class="ring-3">
            <li>
              <LocalPharmacyIcon class="orbit-icon" />
            </li>
            <li>
              <MonitorHeartIcon class="orbit-icon" />
            </li>
            <li>
              <HealingIcon class="orbit-icon" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
