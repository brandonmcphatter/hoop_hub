'use client'
import {nbaTeams} from "@/teams";
import SideBarTeamLine from "@/components/teams/SideBarTeamLine";
import {useTeamsContext} from "@/components/TeamsProvider";

export default function SideBar() {
    let {changeTeams, teamKey} = useTeamsContext();
    return (
        <div className={'w-1/3 lg:w-1/4 hidden md:flex flex-col overflow-y-scroll gap-3 px-4 bg-gray-500 py-4'}>
            {nbaTeams.map((team, index) => {
                return <SideBarTeamLine city={team.city}
                                        name={team.name}
                                        logo={team.logo}
                                        teamKey={teamKey}
                                        setTeamKey={changeTeams}
                                        teamNum={index}
                                        key={index}/>
            })}
        </div>
    )
}