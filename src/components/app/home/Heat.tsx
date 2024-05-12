'use client'
import React, { useEffect, useRef, useState } from 'react';

import { IgrGeographicMap, IgrGeographicMapModule } from "igniteui-react-maps";
import { IgrGeographicTileSeries } from "igniteui-react-maps";
import { IgrHeatTileGenerator } from "igniteui-react-core";
import { IgrTileGeneratorMapImagery } from "igniteui-react-maps";
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default function HeatMap(props) {
  const map = useRef(null);
  const [tileImagery, setTileImagery] = useState<IgrTileGeneratorMapImagery>(null);

  useEffect(() => {
    setTileImagery(new IgrTileGeneratorMapImagery());
    console.log(props.data)
  }, [])

  useEffect(() => {
    if (map.current === undefined || !tileImagery) { return }
    // map.current.zoomToGeographic({ left: -134.5, top: 16.0, width: 70.0, height: 37.0 });
    map.current.zoomToGeographic({ left: -12, top: 22, width: 20.0, height: 20.0 })

    onDataLoaded(props.data)
  }, [tileImagery])

  function onDataLoaded(data: any[]) {
    if (!data) {
      return
    }

    const latitudes: number[] = [];
    const longitudes: number[] = [];
    const populations: number[] = [];

    const classes = [10000000, 100000, 100000, 10, 1, 0, -1, 0, 0]
    // parsing CSV data and creating geographic locations
    for (let i = 1; i < data.length; i++) {
      latitudes.push(Number(data[i].Latitude));
      longitudes.push(Number(data[i].Longitude));
      populations.push(classes[data[i].spi_class]);
    }

    // generating heat map imagery tiles
    const gen = new IgrHeatTileGenerator();
    gen.xValues = longitudes;
    gen.yValues = latitudes;
    gen.values = populations;
    gen.blurRadius = 6;
    gen.maxBlurRadius = 20;
    gen.useBlurRadiusAdjustedForZoom = true;
    gen.minimumColor = "rgba(100, 255, 0, 0.5)";
    gen.maximumColor = "rgba(255, 255, 0, 0.5)";
    gen.useGlobalMinMax = true;
    gen.useGlobalMinMaxAdjustedForZoom = true;
    gen.useLogarithmicScale = true;
    gen.useWebWorkers = false;
    // gen.webWorkerInstance = new Worker();
    gen.scaleColors = [
      "rgba(0, 0, 255, .251)", "rgba(0, 255, 255, .3765)",
      "rgba(50,205,50, .2675)", "rgba(255, 255, 0, .7059)",
      "rgba(255, 0, 0, .7843)"
    ];
    tileImagery.tileGenerator = gen;

    // generating heat map series
    const series = new IgrGeographicTileSeries({ name: "heatMapSeries" });
    series.tileImagery = tileImagery;
    series.showDefaultTooltip = true;

    // add heat map series to the map
    map.current.series.add(series);
  }

  return (
    <div className='overflow-hidden rounded-lg shadow relative'>
      <div className='absolute z-40 top-0 left-0 bg-white/40 flex flex-col space-y-2 p-1'>
        <div className='flex items-center text-xs space-x-2'>
          <div className='w-6 h-4 bg-purple-500'></div>
          <span>Very High</span>
        </div>
        <div className='flex items-center text-xs space-x-2'>
          <div className='w-6 h-4 bg-red-500'></div>
          <span>High</span>
        </div>
        <div className='flex items-center text-xs space-x-2'>
          <div className='w-6 h-4 bg-teal-500'></div>
          <span>Low</span>
        </div>
        <div className='flex items-center text-xs space-x-2'>
          <div className='w-6 h-4 bg-green-500'></div>
          <span>Very Low</span>
        </div>
      </div>
      <IgrGeographicMap
        ref={map}
        width="900px"
        height="500px"
        zoomable={true} />
    </div>
  );
}

