import React from "react";
import {
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-col items-center text-white">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex mt-2 sm:mt-0 flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row sm:space-x-3 items-center justify-center text-center text-white text-sm py-3">
        <div className="grid sm:flex col-auto grid-cols-2 gap-x-3">
          <div className="flex items-center">
            <UilSun />
            <p className="font-light">
              Rise:{" "}
              <span className="font-medium">
                {formatToLocalTime(sunrise, timezone, "hh:mm a")}
              </span>
            </p>
          </div>

          <div className="flex items-center">
            <UilSunset />
            <p className="font-light">
              Set:{" "}
              <span className="font-medium">
                {formatToLocalTime(sunset, timezone, "hh:mm a")}
              </span>
            </p>
          </div>

          <div className="flex items-center">
            <UilSun />
            <p className="font-light">
              High:{" "}
              <span className="font-medium ">{`${temp_max.toFixed()}°`}</span>
            </p>
          </div>

          <div className="flex items-center">
            <UilSun />
            <p className="font-light">
              Low:{" "}
              <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
