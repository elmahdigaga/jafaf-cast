"use client"
import { useEffect, useState } from "react"
import Loader from "./Loader";
import partlyCloudIcon from '@/images/partly-cloud.png'
import temperatureIcon from '@/images/temperature.png'
import humidityIcon from '@/images/humidity.png'
import pressureIcon from '@/images/pressure-gauge.png'
import Image from "next/image";

export default function Information({ data }: any) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setWeather(data);
    }, 1000)
  }, [])

  return (
    <div className="w-full">
      {!weather ?
        <Loader /> :
        <div className="space-y-4">
          <h1 className="text-gray-800 font-bold text-xl">{weather["address"] + " " + weather["resolvedAddress"]}</h1>
          <div className="space-y-1">
            <p className="text-gray-500 text-sm">{weather["latitude"]}, {weather["longitude"]}</p>
            <p className="text-gray-500 text-sm">{weather["timezone"]}</p>
          </div>
          <h1 className="text-gray-700 font-semibold text-lg">Current Conditions</h1>
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <Image
                width={25} height={25}
                src={partlyCloudIcon}
                alt=""
              />
              <span className="text-gray-500">{
                weather["currentConditions"]["conditions"]
              }</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                width={25} height={25}
                src={temperatureIcon}
                alt=""
              />
              <span className="text-gray-500">{
                weather["currentConditions"]["temp"]
              } °C</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                width={25} height={25}
                src={humidityIcon}
                alt=""
              />
              <span className="text-gray-500">{
                weather["currentConditions"]["humidity"]
              }</span>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                width={25} height={25}
                src={pressureIcon}
                alt=""
              />
              <span className="text-gray-500">{
                weather["currentConditions"]["pressure"]
              }</span>
            </div>
          </div>
        </div>
      }
    </div>
  )
}