import {useTeamsContext} from "@/components/TeamsProvider";

export default function PlayerTable({city, name}) {
    let {players} = useTeamsContext();
    return (
        <div className={' mt-4 mb-12 '}>
            {/*team name*/}
            <div className={'text-2xl  mb-3'}>{city} {name}</div>
            <div className={'overflow-y-scroll border border-gray-800 p-4'} style={{height: '32rem'}}>
                <table className="table w-full ">
                    {/*table headers*/}
                    <thead>
                    <tr className={''}>
                        <th className={'text-start py-4'}>Name</th>
                        <th className={'text-center py-4'}>Number</th>
                        <th className={'text-center py-4'}>Position</th>
                        <th className={'text-center py-4'}>Height</th>
                        <th className={'text-center py-4'}>Weight</th>
                    </tr>
                    </thead>
                    {/*table body*/}
                    <tbody className={''}>
                    {players.map(({first_name, height, jersey_number, last_name, position, weight}, index) => {
                        return <PlayerRow key={index}
                                          rosNum={index + 1}
                                          fName={first_name}
                                          lName={last_name}
                                          pos={position}
                                          num={jersey_number}
                                          height={height ? (height[0] + '"' + height.slice(2) + "'") : ''}
                                          weight={weight}/>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function PlayerRow({fName, lName, pos, num, height, weight, rosNum}) {

    return (
        <tr className={`${rosNum % 2 ? 'bg-gray-300' : 'bg-gray-400'}`}>
            <td className={'py-2 text-start font-semibold'}>{lName + ', ' + fName}</td>
            <td className={'py-2 text-center'}>{num}</td>
            <td className={'py-2 text-center'}>{pos}</td>
            <td className={'py-2 text-center'}>{height}</td>
            <td className={'py-2 text-center'}>{weight}</td>
        </tr>
    )
}