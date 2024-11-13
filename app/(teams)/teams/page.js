'use client';

import CurrentTeamView from "@/components/teams/CurrentTeamView";
import {useEffect} from "react";
import {API_KEY, ballDontLie} from "@/ballDontLie";
import {useTeamsContext} from "@/components/TeamsProvider";

export default function TeamPage() {
    let {setPlayers, activeTeam, teamKey} = useTeamsContext();
    useEffect(()=>{
        const fetchPlayers = async () => {
            try {
                console.log('loading');
                const response = await fetch(ballDontLie+`players?team_ids[]=${teamKey+1}`,{
                        headers: {Authorization: API_KEY}
                    },
                );
                const data = await response.json();
                setPlayers(data.data);
                console.log('done');
            } catch (error) {
                console.error('Error fetching player data:', error);
            } finally {

            }
        };
        fetchPlayers();

    }, [teamKey])
    return (

        <CurrentTeamView />
    )
}