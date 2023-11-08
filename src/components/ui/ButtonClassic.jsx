"use client"

export default function ButtonClassic({ children, onClick = () => { } }) {
    return (
        <button onClick={() => onClick()} className='transition-all hover:text-white hover:bg-blue-600 text-blue-600 border-blue-600 border-2 px-10 py-5 rounded-sm'>
            {children}
        </button>
    )
}