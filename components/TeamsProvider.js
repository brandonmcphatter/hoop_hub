'use client'

import {createContext, useContext, useEffect, useState} from "react";
import {nbaTeams} from "@/teams";
import {ballDontLie, API_KEY} from '@/ballDontLie';
import {redirect} from "next/navigation";

const TeamsContext = createContext();

// provider
export function TeamsContextProvider({children}) {
    const [isLoading, setIsLoading] = useState(false);
    const [teamKey, setTeamKey] = useState(0); // index of current team
    const [players, setPlayers] = useState([]); // all players
    const currentTeam = nbaTeams[teamKey]; // team object

    const changeTeams = (x) => {
        setTeamKey(x);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const goToTeam = (x)=> {
        redirect('/teams');
        setTeamKey(x);
    }

    // fetch all players

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
    console.log(players)

    return (
        <TeamsContext.Provider value={{
            teamKey,
            setTeamKey,
            players,
            setPlayers,
            currentTeam,
            changeTeams,
            goToTeam
        }}>
            {children}
        </TeamsContext.Provider>
    )
}

export const useTeamsContext = ()=> useContext(TeamsContext);