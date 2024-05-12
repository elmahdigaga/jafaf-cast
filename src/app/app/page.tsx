import Information from '@/components/app/home/Information'
import Map from '@/components/app/home/map'
import Wrapper from '@/components/app/wrapper'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Statistics from "@/components/app/home/Statistics";
import { DissmissibleErrorAlert } from "@/components/ui/DissmissibleAlert";

async function getLatestPrediction(): Promise<any> {
  const supabase = createServerComponentClient({ cookies })
  const { data, error } = await supabase.from("predictions").select("content").single();
  if (error) {
    throw "An error ocurred while trying to fetch data from the database"
  }
  return data.content
}

async function readWeatherData() {
  const response = await fetch("https://ssrpicafsjnghriiuigm.supabase.co/storage/v1/object/public/data/weather-data.json")
  const data = await response.json();
  return data
}

export default async function Page() {
  var weatherData = null;
  var heat = null;
  try {
    weatherData = await readWeatherData();
    heat = await getLatestPrediction();
    console.log(weatherData)
  } catch (e) {
    return <DissmissibleErrorAlert message={e.toString()} />
  }

  return (
    <Wrapper>
      <div className='w-full flex justify-between'>
        <Information data={weatherData} />
        <Map data={heat} />
      </div>

      <Statistics data={weatherData} />
    </Wrapper>
  )
}
