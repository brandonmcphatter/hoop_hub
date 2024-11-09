import {nbaTeams} from "@/teams";
import TeamSquare from "@/components/home/TeamSquare";

export default function Home() {
  return (

   <div className={'px-3 pt-3'}>
   {/*Hero Image*/}
   {/*    <div className={'relative'}>*/}
   {/*        <video src={} autoPlay={true}/>*/}
   {/*        <div className={'absolute'}>Hoop Hub</div>*/}
   {/*    </div>*/}

   {/*List of Teams*/}
       <div>
           <div className={'grid grid-cols-2 gap-3'}>
               {nbaTeams.map((team, index)=> {
                   return <TeamSquare city={team.city} name={team.name} logo={team.logo} key={index}/>
               })}


           </div>
       </div>
   </div>
  );
}
