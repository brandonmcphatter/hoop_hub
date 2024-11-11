'use client';
import {nbaTeams} from "@/teams";
import PlayerTable from "@/components/teams/PlayerTable";
import TeamLine from "@/components/teams/TeamLine";
import CurrentLogo from "@/components/teams/CurrentLogo";
import {useTeamsContext} from "@/components/TeamsProvider";
import {Suspense} from "react";

export default function CurrentTeamView() {

    let {teamKey, changeTeams, currentTeam} = useTeamsContext();

    return (
        <>
            <div className={'flex-col w-full max-h-svh'}>

                <div className={'px-3 md:px-10 pt-8  mx-auto w-full'}>
                    {/*team logo*/}
                    <Suspense fallback={<p>Loading Logo . . . </p>}>
                        <CurrentLogo teamKey={teamKey}/>
                    </Suspense>

                    {/*player info*/}
                    <Suspense fallback={<p>Loading Roster . . . </p>}>
                        <PlayerTable city={currentTeam.city} name={currentTeam.name}/>
                    </Suspense>

                    {/*list of teams*/}
                    <div className={' md:hidden mx-2'}>
                        <div className={' text-4xl'}>Teams</div>
                        <hr className={'mt-4 mb-6'}/>
                        <div className={'grid grid-cols-1 md:grid-cols-2 gap-5 mb-10'}>
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
                </div>
            </div>
        </>
    );
}