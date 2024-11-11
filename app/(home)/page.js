import AllTeams from "@/components/home/AllTeams";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            {/*Hero Video*/}
            <div className={'w-full min-h-96 pt-3 px-3 relative'}>
                <Image className={'object-cover'} src={'https://www.usatoday.com/gcdn/presto/2018/10/19/USAT/ed1cee67-05ad-4431-8327-7705a9c5b61e-USP_NBA__Los_Angeles_Lakers_at_Portland_Trail_Blaz.JPG?crop=2952,1661,x0,y864'}
                       fill={true}

                       alt={'Lebron'}/>
            </div>

            {/*List of Teams*/}
            <div className={'px-5 pt-6'}>
                <AllTeams/>
            </div>
        </div>
    );
}


