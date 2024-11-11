
import {nbaTeams} from "@/teams";
import TeamSquare from "@/components/home/TeamSquare";

export default function AllTeams(){
    return (
        <div>
            <div className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-20'}>
                {nbaTeams.map((team, index)=> {
                    return <TeamSquare teamNum={index} city={team.city} name={team.name} logo={team.logo} key={index}/>
                })}
            </div>
        </div>
    )
}