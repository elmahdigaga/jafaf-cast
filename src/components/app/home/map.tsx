"use client"
import { IgrGeographicMapModule, IgrGeographicMap } from 'igniteui-react-maps';
import HeatMap from './Heat';

export default function Map({ data }) {

  return (
    <HeatMap data={data} />
  )
}