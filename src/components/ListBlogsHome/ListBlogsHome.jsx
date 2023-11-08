import Link from "next/link";
import IconElements from "../ui/svg/IconElements";
import CardBlog from "./CardBlog";
import mockup from './mockup.json'


export default function ListBlogsHome() {
    const listCard = mockup
    return (
        <>
            <header className="shadow-lg bg-white rounded-lg p-5 my-5 flex justify-between items-center">
                <div className="flex gap-40 font-bold">
                    <Link href={"#"} className="border-b-2 border-red-500">Ultimas Noticias</Link>
                    <Link href={"#"} >Tendencia</Link>
                </div>
                <IconElements />
            </header>
            {/* List of elements */}
            <ul className="grid grid-cols-2 gap-10 ">
                {
                    listCard.map(item => {
                        return (
                            <CardBlog {...item} key={item.id} />
                        )
                    })
                }
            </ul>
        </>
    )
}