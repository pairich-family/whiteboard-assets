import "./pins.css";

import { FC } from "react";

import iconAquarium from "./assets/Aquarium.svg";
import iconArt from "./assets/Art.svg";
import iconBeach from "./assets/Beach.svg";
import iconChildrensMuseum from "./assets/Children's Museum.svg";
import iconEaster from "./assets/Easter.svg";
import iconGeneralConference from "./assets/General Conference.svg";
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
  additionalImgStyles?: React.CSSProperties;
}

export const Pin: FC<PinProps> = ({
  svgUrl,
  altText,
  additionalImgStyles: additionalStyles,
}) => {
  return (
    <div className={["pin", "dotted"].join(" ")}>
      <img
        src={svgUrl}
        alt={altText}
        title={altText}
        style={additionalStyles}
      />
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
      additionalImgStyles: {
        margin: "20px",
      },
    },
    count: 5,
  },
  {
    pin: {
      svgUrl: iconBeach,
      additionalImgStyles: {
        margin: "10px",
      },
    },
    count: 4,
  },
  {
    pin: {
      svgUrl: iconChildrensMuseum,
      additionalImgStyles: {
        margin: "10px",
      },
    },
    count: 2,
  },
  {
    pin: {
      svgUrl: iconEaster,
      additionalImgStyles: {
        margin: "0 auto",
        marginBottom: "10px",
      },
    },
    count: 1,
  },
  {
    pin: {
      svgUrl: iconGeneralConference,
      additionalImgStyles: {
        margin: "0 auto",
        marginBottom: "20px",
      },
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
      additionalImgStyles: {
        margin: "20px",
      },
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
      additionalImgStyles: {
        margin: "24px",
      },
    },
    count: 5,
  },
  {
    pin: {
      svgUrl: iconMovieNight,
      additionalImgStyles: {
        margin: "12px",
      },
    },
    count: 5,
  },
  {
    pin: {
      svgUrl: iconMplp,
      additionalImgStyles: {
        margin: "12px",
      },
    },
    count: 3,
  },
  {
    pin: {
      svgUrl: iconPark,
      additionalImgStyles: {
        margin: "24px",
      },
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
      additionalImgStyles: {
        margin: "12px",
      },
    },
    count: 5,
  },
  {
    pin: {
      svgUrl: iconSwimming,
      additionalImgStyles: {
        margin: "12px",
      },
    },
    count: 6,
  },
  {
    pin: {
      svgUrl: iconThink,
      additionalImgStyles: {
        margin: "24px",
      },
    },
    count: 5,
  },
  {
    pin: {
      svgUrl: iconVacation,
      additionalImgStyles: {
        margin: "12px",
      },
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
