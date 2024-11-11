import Image from "next/image";
import {nbaTeams} from "@/teams";

export default function CurrentLogo({teamKey}) {
    return (
        <div className={''}>
            <Image className={'mx-auto lg:hidden'} src={nbaTeams[teamKey].logo} alt={nbaTeams[teamKey].name} width={350}
                   height={350}/>
            <Image className={'mx-auto hidden lg:block'} src={nbaTeams[teamKey].logo} alt={nbaTeams[teamKey].name} width={500}
                   height={500}/>
        </div>
    )
}