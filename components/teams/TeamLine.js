import Image from "next/image";

export default function TeamLine({city, name, logo, teamKey, setTeamKey, teamNum,}) {
    return (
        <div onClick={()=>setTeamKey(teamNum)} className={`w-full h-20 ${teamKey === teamNum ? 'bg-blue-200' : 'bg-gray-300 hover:bg-gray-400 cursor-pointer'}  border-2 border-gray-400 px-3 flex items-center rounded-lg overflow-auto shadow drop-shadow`}>
            <div className={'flex justify-center items-center'}>
                <Image priority={true} src={logo} alt={city + '' + name} width={50} height={50}/>
            </div>
            <div className={'w-full h-1/3 content-center'}>
                <div className={' ms-4 text-xl font-semibold'}
                     style={{fontFamily: 'Helvetica'}}>{city} {name}</div>
            </div>
        </div>
    )
}