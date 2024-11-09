'use client';
import {nbaTeams} from "@/teams";
import PlayerTable from "@/components/teams/PlayerTable";
import TeamLine from "@/components/teams/TeamLine";
import {createContext, useContext, useState} from "react";
import CurrentLogo from "@/components/teams/CurrentLogo";

// create context
const TeamsContext = createContext();

// provider
export function Teams() {
    const [teamKey, setTeamKey] = useState(0);
    const currentTeam = nbaTeams[teamKey];
    const changeTeams = (x) => {
        setTeamKey(x);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <TeamsContext.Provider value={{
            teamKey,
            setTeamKey,
            currentTeam,
            changeTeams,
        }}>
            <CurrentTeamView/>
        </TeamsContext.Provider>
    )
}

export default function CurrentTeamView() {
    let {teamKey, changeTeams, currentTeam} = useContext(TeamsContext);

    return (
        <div className={'px-3 pt-8'}>
            {/*team logo*/}
            <CurrentLogo teamKey={teamKey}/>
            {/*player info*/}
            <PlayerTable city={currentTeam.city} name={currentTeam.name}/>
            {/*list of teams*/}
            <div className={' text-4xl'}>Teams</div>
            <hr className={'mt-4 mb-6'}/>
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10'}>
                {nbaTeams.map((team, index) => {
                    return <TeamLine city={team.city}
                                     name={team.name}
                                     logo={team.logo}
                                     teamKey={teamKey}
                                     setTeamKey={changeTeams}
                                     teamNum={index}
                                     key={index}/>
                })}
            </div>
        </div>
    );
}