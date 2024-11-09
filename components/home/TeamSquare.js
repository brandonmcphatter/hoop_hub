import Image from "next/image";

export default function TeamSquare({city, name, logo}) {
    return (
        <div>
            {/*TeamBlock*/}
            <div className={'w-full h-48 flex flex-col items-center justify-center '}>
                <div>
                    <Image src={logo} alt={city +'' + name} width={100} height={100}/>
                </div>
                <div className={''}>{city} {name}</div>
            </div>
        </div>
    )
}