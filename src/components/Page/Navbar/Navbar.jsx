import Image from "next/image";
import Link from "next/link";
import Logo from "public/Logo.png"
import IconPerson from "@/components/ui/svg/IconPerson";
import IconSearch from "@/components/ui/svg/IconSearch";

export default function Navbar() {
    return (
        <nav
            className="bg-white text-black h-24 w-full flex mp-2"
        >
            <Link href={"/"} className="w-1/4 flex justify-center items-center">
                <Image src={Logo} height={40} width={90} alt="Logo" />
            </Link>
            <ul className="h-full w-1/2 flex flex-row justify-center items-center gap-4 ">
                <li><Link className="border-white hover:border-blue-600 border-b-4" href={"#"}> Politica</Link></li>
                <li><Link className="border-white hover:border-blue-600 border-b-4" href={"#"}> Economia</Link></li>
                <li><Link className="border-white hover:border-blue-600 border-b-4" href={"#"}> Salud</Link></li>
                <li><Link className="border-white hover:border-blue-600 border-b-4" href={"#"}> Educacion</Link></li>
                <li><Link className="border-white hover:border-blue-600 border-b-4" href={"#"}> Eventos</Link></li>
                <li><Link className="border-white hover:border-blue-600 border-b-4" href={"#"}> Programas</Link></li>
                <li><Link className="border-white hover:border-blue-600 border-b-4" href={"#"}> Empleos</Link></li>
            </ul>
            <div className="w-1/5 h-full flex justify-center items-center">
                <IconSearch />
                <IconPerson />
            </div>
        </nav>
    )
}