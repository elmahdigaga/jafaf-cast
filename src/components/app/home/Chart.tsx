"use client"
import React, { useEffect, useRef, useState } from 'react';
import { IgrLegendModule, IgrCategoryChartModule } from "igniteui-react-charts";
import { IgrLegend, IgrCategoryChart } from "igniteui-react-charts";
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
//import "igniteui-react/bundles"
const mods: any[] = [
  IgrLegendModule,
  IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default function Chart({ dataSource, properties }) {
  const legend = useRef()
  const chart = useRef(null);

  return (
    <div className="w-full my-4">
      <div className="ml-2">
        <IgrLegend
          ref={legend}
          orientation="Horizontal">
        </IgrLegend>
      </div>

      <div className="mt-2">
        <IgrCategoryChart
          height='300px'
          ref={chart}
          chartType="Line"
          isHorizontalZoomEnabled="false"
          isVerticalZoomEnabled="false"
          dataSource={dataSource}
          includedProperties={properties}
          legend={legend.current}
          yAxisTitle="TWh"
          yAxisTitleLeftMargin="10"
          yAxisTitleRightMargin="5"
          yAxisLabelLeftMargin="0"
          computedPlotAreaMarginMode="Series">
        </IgrCategoryChart>
      </div>
    </div>
  );
}