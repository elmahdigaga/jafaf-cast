import Chart from "./Chart"

export default function Statistics({ data }) {
  const dataSource = makeHeatStatistics();
  const tmp = dataSource.tmp, humidity = dataSource.humidity

  function makeHeatStatistics() {
    const tmp = [], humidity = [];
    data.days.forEach(d => {
      tmp.push({ day: d.datetime, temp: d.temp })
      humidity.push({ day: d.datetime, humidity: d.humidity })
    })

    return { tmp, humidity };
  }

  return (
    <div className="mt-4 space-y-4">
      <h1 className="text-xl font-bold text-gray-800">Statistics</h1>
      <Chart dataSource={tmp} properties={["day", "temp"]} />
      <Chart dataSource={humidity} properties={["day", "humidity"]} />
    </div>
  )
}