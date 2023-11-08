import Image from "next/image"
import IconHeadOn from "../ui/svg/IconHeadOn"
import IconHeadOff from "../ui/svg/IconHeadOff"
import IconShare from "../ui/svg/IconShare"
import IconPin from "../ui/svg/IconPin"


export default function CardBlog({ id, title, description, create_by, date_time, url, check }) {
    const randomNumber = () => parseInt(Math.random(9) * 100)
    
    return (
        <li className="relative w-full bg-white rounded-md shadow-md">
            {/* img */}
            <header className="w-full">
                <div className="relative h-40 w-full">
                    <Image className="object-cover rounded-sm" fill src={url} alt="url" />
                </div>
            </header>
            <section className="p-5 mb-14">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="pt-2">{description}</p>
                <div className="pt-5 flex gap-4">
                    <span>{date_time}</span>
                    <span className="text-gray-500">De {create_by}</span>
                </div>
            </section>
            <footer className="absolute bottom-0 w-full border-t-2 border-gray-200 flex  justify-around items-center py-5">
                <span className="flex gap-2">
                    {check ? <IconHeadOn size="20" /> : <IconHeadOff size="20" />}
                    <span>{randomNumber()}</span>
                </span>
                <span className="flex gap-2">
                    <IconShare size="23" />
                    <span>{randomNumber()}</span>
                </span>
                <IconPin size='23' />
            </footer>
        </li>
    )
}