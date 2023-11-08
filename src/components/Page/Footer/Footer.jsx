import Link from "next/link";
import Image from "next/image";
import Logo from "public/Logo.png"
import IconFacebook from "@/components/ui/svg/IconFacebook";
import IconX from "@/components/ui/svg/IconX";



export default function Footer() {
    return (
        <footer className="b-0 bg-blue-900 w-full h-56 text-white">
            <ul className="h-full w-full px-10 flex justify-between items-center text-center">
                <li className="flex flex-col gap-4 justify-center items-center" >
                    {/* Logo */}
                    <Image src={Logo} className="bg-white rounded-2xl" alt="Logo-footer" height={50} width={100} />
                    <span>copyright @ 2023</span>
                </li>
                <li className="flex flex-col gap-4">
                    <Link className="border-blue-900 hover:border-white  border-b-4" href={"#"}>Politicas de privacidad</Link>
                    <Link className="border-blue-900 hover:border-white  border-b-4" href={"#"}>Terminos y condiciones</Link>
                </li>
                <li>
                    <Link className="border-blue-900 hover:border-white  border-b-4" href={"#"}>Quienes somos?</Link>
                </li>
                <li>
                    <Link className="border-blue-900 hover:border-white  border-b-4" href={"#"}>Contacto</Link>
                    <div className="py-5 flex gap-4">
                        <Link href={"#"}><IconFacebook /></Link>
                        <Link href={"#"}><IconX /></Link>
                    </div>
                </li>
            </ul>
        </footer>
    )
}