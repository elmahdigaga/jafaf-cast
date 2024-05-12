import fs from "fs";
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

export default async function Page() {
  var fileContents = null;
  var heat = null;
  try {
    const folder = "src/data/weather-data.json";
    fileContents = fs.readFileSync(folder, "utf8");
    heat = await getLatestPrediction();
  } catch (e) {
    return <DissmissibleErrorAlert message={e.toString()} />
  }

  return (
    <Wrapper>
      <div className='w-full flex justify-between'>
        <Information data={JSON.parse(fileContents)} />
        <Map data={heat} />
      </div>

      <Statistics data={JSON.parse(fileContents)} />
    </Wrapper>
  )
}
