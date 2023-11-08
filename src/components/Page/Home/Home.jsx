import Image from 'next/image'
import ListBlogsHome from '@/components/ListBlogsHome/ListBlogsHome'
import IconHeadOff from '@/components/ui/svg/IconHeadOff'
import IconShare from '@/components/ui/svg/IconShare'
import IconPin from '@/components/ui/svg/IconPin'
import image_1 from 'public/photo-1.jpeg'
import IconRecording from '@/components/ui/svg/IconRecording'

export default function Home() {
    return (
        <>
            <article className='flex gap-10 justify-center items-center px-5'>
                <div className='relative h-80 w-1/3 sm:w-1/2 '>
                    <Image className='object-cover rounded-md shadow-lg' src={image_1} fill alt='image_1' />
                </div>
                <section className='w-1/3 py-20'>
                    <div className='flex justify-between items-center'>
                        <span className='text-blue-700 font-semibold'>Tendencia</span>
                        <div className='flex gap-2 items-center '>
                            <IconHeadOff size='25' />
                            <IconShare size='22' />
                            <IconPin size='22' />
                        </div>
                    </div>
                    <h1 className='font-bold text-2xl my-5'>Empoderamiento de Comunidades NAPR: Un Viaje Hacia la Equidad</h1>
                    <p>
                        Descubre cómo un proyecto innovador está cambiando el juego al proporcionar a las comunidades Negras, Afrocolombianas, Palenqueras y Raizales (NAPR) en Colombia una herramienta digital para acceder a oportunidades gubernamentales y recursos vitales.
                    </p>
                    <div className='flex gap-4 justify-start items-center mt-5'>
                        <span>Hace 2 horas</span>
                        <span className='text-gray-600'>De Luisa Martínez</span>
                    </div>
                </section>
            </article>
            <article className='flex justify-center pb-20'>
                <section className='w-full px-20'>
                    <ListBlogsHome />
                </section>
                <aside className='w-1/3 mr-10'>
                    <div className='sm:sticky sm:top-5  sm:h-[250px]'>
                        <div className='flex gap-2 items-center py-5 '>
                            <samp className='text-xl font-extrabold text-red-700'>En vivo</samp>
                            <IconRecording />
                        </div>
                        <div className='flex justify-center items-center  h-40 w-full bg-red-600 rounded-sm shadow-xl'>
                            <div className='flex justify-center items-center flex-col bg-white p-5 rounded-xl text-2xl font-extrabold'>
                                <span>Noticias</span>
                                <span>de última hora!!</span>
                            </div>
                        </div>
                    </div>

                </aside>
            </article>
        </>
    )
}