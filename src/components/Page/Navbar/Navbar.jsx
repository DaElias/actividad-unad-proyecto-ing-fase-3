import Image from "next/image";
import Link from "next/link";
import DinamicNavbar from "./DinamicNavbar";
import IconPerson from "@/components/ui/svg/IconPerson";
import IconSearch from "@/components/ui/svg/IconSearch";
import Logo from "public/Logo.png"
import { PATH_ROUTE } from "@/util/const";


export default function Navbar() {
    return (
        <nav
            className="bg-white text-black h-24 w-full flex justify-between sm:justify-normal"
        >
            <Link href={"/"} className="w-1/4 flex justify-center items-center border-blue-600 border-b-2">
                <Image src={Logo} height={40} width={90} alt="Logo" />
            </Link>
            <ul className="h-full w-full sm:w-1/2 hidden sm:flex flex-row justify-center items-center gap-4  border-blue-600 border-b-2">
                {PATH_ROUTE.map(({ title, path }, key) => (
                    <li key={key}><Link href={path} className="border-white hover:border-blue-600 border-b-4" > {title}</Link></li>
                ))}
            </ul>
            <div className="w-1/5 h-full flex gap-2 justify-center items-center">
                <IconSearch size={25} />
                <IconPerson size={30} />
                <DinamicNavbar />
            </div>
        </nav>
    )
}