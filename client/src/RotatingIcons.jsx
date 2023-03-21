import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import MedicationIcon from "@mui/icons-material/Medication";
import HtmlIcon from "@mui/icons-material/Html";
import DataObjectIcon from "@mui/icons-material/DataObject";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import PhpIcon from "@mui/icons-material/Php";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AdbIcon from "@mui/icons-material/Adb";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import AlignVerticalCenterIcon from "@mui/icons-material/AlignVerticalCenter";
import AppsIcon from "@mui/icons-material/Apps";
import Description from "./Description";
import "./styles/icons.scss";

export default function RotatingIcons() {
  return (
    <div class="orbit">
      <Description />
      <ul class="orbit-wrap">
        <li class="orbit-center">
          <GitHubIcon class="orbit-center__icon" />
        </li>

        <li>
          <ul class="ring-0">
            <li>
              <MedicationIcon class="orbit-icon" />
            </li>
            <li>
              <HtmlIcon class="orbit-icon" />
            </li>
            <li>
              <DataObjectIcon class="orbit-icon" />
            </li>
            <li>
              <CssIcon class="orbit-icon" />
            </li>
          </ul>
        </li>

        <li>
          <ul class="ring-1">
            <li>
              <JavascriptIcon class="orbit-icon" />
            </li>
            <li>
              <PhpIcon class="orbit-icon" />
            </li>
            <li>
              <AcUnitIcon class="orbit-icon" />
            </li>
          </ul>
        </li>
        <li>
          <ul class="ring-2">
            <li>
              <AdbIcon class="orbit-icon" />
            </li>
            <li>
              <AddShoppingCartIcon class="orbit-icon" />
            </li>
            <li>
              <AirlineSeatFlatIcon class="orbit-icon" />
            </li>
            <li>
              <AlignVerticalCenterIcon class="orbit-icon" />
            </li>
          </ul>
        </li>
        <li>
          <ul class="ring-3">
            <li>
              <AppsIcon class="orbit-icon" />
            </li>
            <li>
              <MedicationIcon class="orbit-icon" />
            </li>
            <li>
              <JavascriptIcon class="orbit-icon" />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
