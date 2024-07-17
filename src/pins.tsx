import "./pins.css";

import { FC } from "react";

import iconAquarium from "./assets/Aquarium.svg";
import iconArt from "./assets/Art.svg";
import iconBeach from "./assets/Beach.svg";
import iconChildrensMuseum from "./assets/Children's Museum.svg";
import iconGeography from "./assets/Geography.svg";
import iconHoliday4th from "./assets/Holiday (4th).svg";
import iconHolidayBirthday from "./assets/Holiday (Birthday).svg";
import iconHolidayChristmas from "./assets/Holiday (Christmas).svg";
import iconHolidayHalloween from "./assets/Holiday (Halloween).svg";
import iconHolidayThanksgiving from "./assets/Holiday (Thanksgiving).svg";
import iconHolidayValentines from "./assets/Holiday (Valentines).svg";
import iconLibrary from "./assets/Library.svg";
import iconMovieNight from "./assets/Movie Night.svg";
import iconMplp from "./assets/MPLP.svg";
import iconPark from "./assets/Park.svg";
import iconPlaydate from "./assets/Playdate.svg";
import iconScience from "./assets/Science.svg";
import iconShopping from "./assets/Shopping.svg";
import iconSwimming from "./assets/Swimming.svg";
import iconThink from "./assets/THINK.svg";
import iconVacation from "./assets/Vacation.svg";
import iconZoo from "./assets/Zoo.svg";

export interface PinProps {
  svgUrl: string;
  altText?: string;
  additionalMargin?: string;
}

export const Pin: FC<PinProps> = ({ svgUrl, altText, additionalMargin }) => {
  const marginStyle = additionalMargin
    ? { style: { margin: additionalMargin } }
    : {};
  return (
    <div className={["pin", "dotted"].join(" ")}>
      <img src={svgUrl} alt={altText} title={altText} {...marginStyle} />
    </div>
  );
};

export interface PinsSpec {
  count?: number;
  pin: PinProps;
}

export const PINS_SPECS: PinsSpec[] = [
  {
    pin: {
      svgUrl: iconAquarium,
    },
    count: 2,
  },
  {
    pin: {
      svgUrl: iconArt,
      additionalMargin: "20px",
    },
    count: 5,
  },
  {
    pin: {
      svgUrl: iconBeach,
      additionalMargin: "10px",
    },
    count: 4,
  },
  {
    pin: {
      svgUrl: iconChildrensMuseum,
      additionalMargin: "10px",
    },
    count: 2,
  },
  {
    pin: {
      svgUrl: iconGeography,
    },
    count: 5,
  },
  {
    pin: {
      svgUrl: iconHoliday4th,
    },
  },
  {
    pin: {
      svgUrl: iconHolidayBirthday,
      additionalMargin: "20px",
    },
    count: 3,
  },
  {
    pin: {
      svgUrl: iconHolidayChristmas,
    },
  },
  {
    pin: {
      svgUrl: iconHolidayHalloween,
    },
  },
  {
    pin: {
      svgUrl: iconHolidayThanksgiving,
    },
  },
  {
    pin: {
      svgUrl: iconHolidayValentines,
    },
  },
  {
    pin: {
      svgUrl: iconLibrary,
      additionalMargin: "24px",
    },
    count: 5,
  },
  {
    pin: {
      svgUrl: iconMovieNight,
      additionalMargin: "12px",
    },
    count: 5,
  },
  {
    pin: {
      svgUrl: iconMplp,
      additionalMargin: "12px",
    },
    count: 3,
  },
  {
    pin: {
      svgUrl: iconPark,
      additionalMargin: "24px",
    },
    count: 4,
  },
  {
    pin: {
      svgUrl: iconPlaydate,
    },
    count: 4,
  },
  {
    pin: {
      svgUrl: iconScience,
    },
    count: 5,
  },
  {
    pin: {
      svgUrl: iconShopping,
      additionalMargin: "12px",
    },
    count: 5,
  },
  {
    pin: {
      svgUrl: iconSwimming,
      additionalMargin: "12px",
    },
    count: 6,
  },
  {
    pin: {
      svgUrl: iconThink,
      additionalMargin: "24px",
    },
    count: 5,
  },
  {
    pin: {
      svgUrl: iconVacation,
      additionalMargin: "12px",
    },
    count: 2,
  },
  {
    pin: {
      svgUrl: iconZoo,
    },
    count: 2,
  },
];
