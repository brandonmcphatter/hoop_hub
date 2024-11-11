import Image from "next/image";

export default function SideBarTeamLine({city, name, logo, teamKey, setTeamKey, teamNum,}) {
    return (
        <div onClick={()=>setTeamKey(teamNum)} className={`mx-1  ${teamKey === teamNum ? 'bg-blue-200' : 'bg-gray-300 hover:bg-gray-400 cursor-pointer'} py-1.5 border-2 border-gray-400 px-4 flex items-center rounded-lg  shadow drop-shadow`}>
            <div className={'flex justify-center items-center'}>
                <Image priority={true} src={logo} alt={city + '' + name} width={40} height={40}/>
            </div>
            <div className={'w-full  content-center'}>
                <div className={' ms-8 text-lg  font-semibold'}
                     style={{fontFamily: 'Helvetica'}}>{city} {name}</div>
            </div>
        </div>
    )
}