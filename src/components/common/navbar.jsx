import Image from "next/image";
import Link from "next/link";
import {Button} from "@/components/ui/button";


const navigationElement = [{
    name: "Home", link: "#"
}, {
    name: "Courses", link: "#"
}, {
    name: "About Us", link: "#"
}, {
    name: "Pricing", link: "#"
}, {
    name: "Contact", link: "#"
}]


export default function Navbar() {
    return (<header className="flex justify-between container mx-auto h-24  gap-5 items-center  ">
        <nav className=" flex items-center">
            <Image src={"/images/logo.svg"} alt={"Logo de l'entreprise"}
                   width={30}
                   height={50}
            />
            <ul className="flex items-center gap-5">
                {navigationElement.map((element, index) => {
                    return <li key={index}><Link href={element.link}>
                        <Button
                            variant={"ghost"}
                        >{element.name}</Button>
                    </Link></li>
                })}
            </ul>
        </nav>
        <nav className="flex">
            <ul className="flex gap-5 items-center">
                <li><a>Sign Up</a></li>
                <li>
                    <Button className="bg-orange-400 text-center h-10 w-24 rounded-md text-white">Login</Button>
                </li>
            </ul>
        </nav>
    </header>)
}