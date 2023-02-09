import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/Hero";
import BodyCopy from "@/components/BodyCopy";
import Footer from "@/components/Footer";

export default function About() {
    const string = "About Lorem Ipsum"
    return (
        <div>
            <Navbar />
            <HeroBanner name="about" />
            <BodyCopy title="About" copy={string} />
            <Footer />
        </div>
    )
}