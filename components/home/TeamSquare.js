'use client'

import Image from "next/image";
import {useTeamsContext} from "@/components/TeamsProvider";

export default function TeamSquare({city, name, logo, teamNum}) {
    let {goToTeam} = useTeamsContext(teamNum);
    return (
            <div onClick={()=>goToTeam(teamNum)} className={'w-full h-56 md:h-64 lg:h-72 flex flex-col items-center justify-between bg-gray-200 rounded-lg overflow-auto cursor-pointer shadow drop-shadow'}>
                <div className={'h-2/3 w-full flex justify-center items-center'}>
                    <Image src={logo} alt={city +'' + name} width={100} height={100}/>
                </div>
                <div className={'w-full h-1/3 bg-gray-500 content-center'}>
                    <div className={'text-center text-gray-50 text-lg font-semibold'} style={{fontFamily: 'Helvetica'}}>{city} {name}</div>
                </div>
            </div>
    )
}