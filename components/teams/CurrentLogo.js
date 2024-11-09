import Image from "next/image";
import {nbaTeams} from "@/teams";

export default function CurrentLogo({teamKey}) {
    return (
        <div className={''}>
            <Image className={'mx-auto'} src={nbaTeams[teamKey].logo} alt={nbaTeams[teamKey].name} width={350}
                   height={350}/>
        </div>
    )
}