import Footer from "../Page/Footer/Footer";
import Navbar from "../Page/Navbar/Navbar";

export default function Container({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}