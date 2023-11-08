export default function IconMenu({ size = "50", className = "", isActivate }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 50 50"
            className={`${className} `}
        >
            <path
                fill={isActivate && "blue"}
                d="M0 7.5v5h50v-5zm0 15v5h50v-5zm0 15v5h50v-5z"></path>
        </svg>
    )
}