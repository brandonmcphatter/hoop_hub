import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketballBall} from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
    return (
        <div className={' px-2 h-14 bg-black content-center grid grid-cols-1 '}>
            <div className={'mx-auto'}>
                <Link href={'/'} className={'text-white italic align-middle flex content-center items-center gap-3 max-w-fit'}>
                    <span className={'text-3xl'}>HOOP</span> <FontAwesomeIcon className={'w-8'} icon={faBasketballBall} style={{color: 'orange'}}/> <span
                    className={'text-3xl'}>HUB</span>
                </Link>
            </div>
        </div>
    )
}