import React from "react";
import Description from "./Description";
import "../styles/icons.scss";
import robo from "../static/robo-centre.avif";

export default function Icons() {
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
              <i class="orbit-icon fa-solid fa-wheelchair"></i>
            </li>
            <li>
              <i class="orbit-icon fa-solid fa-syringe"></i>
            </li>
            <li>
              <i class="orbit-icon fa-solid fa-tooth"></i>
            </li>
            <li>
              <i class="orbit-icon fa-solid fa-virus-covid"></i>
            </li>
          </ul>
        </li>

        <li>
          <ul class="ring-1">
            <li>
              <i class="orbit-icon fa-solid fa-thermometer"></i>
            </li>
            <li>
              <i class="orbit-icon fa-solid fa-brain"></i>
            </li>
            <li>
              <i class="orbit-icon fa-solid fa-pills"></i>
            </li>
          </ul>
        </li>
        <li>
          <ul class="ring-2">
            <li>
              <i class="orbit-icon fa-solid fa-skull"></i>
            </li>
            <li>
              <i class="orbit-icon fa-solid fa-laptop-medical"></i>
            </li>
            <li>
              <i class="orbit-icon fa-solid fa-heart-pulse"></i>
            </li>
            <li>
              <i class="orbit-icon fa-solid fa-capsules"></i>
            </li>
            <li>
              <i class="orbit-icon fa-solid fa-bone"></i>
            </li>
            <li>
              <i class="orbit-icon fa-solid fa-bacteria"></i>
            </li>
            <li>
              <i class="orbit-icon fa-solid fa-lungs"></i>
            </li>
            <li>
              <i class="orbit-icon fa-solid fa-dna"></i>
            </li>
          </ul>
        </li>
        <li>
          <ul class="ring-3">
            <li>
              <i class="orbit-icon fa-solid fa-heart"></i>
            </li>
            <li>
              <i class="orbit-icon fa-solid fa-user-nurse"></i>
            </li>
            <li>
              <i class="orbit-icon fa-solid fa-user-doctor"></i>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
