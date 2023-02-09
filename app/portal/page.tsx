import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/Hero";
import BodyCopy from "@/components/BodyCopy";
import Footer from "@/components/Footer";
import CreateAccount from "@/components/CreateAccount";
import SignIn from "@/components/SignIn";

export default function About() {
    return (
        <div>
            <Navbar />
            <HeroBanner name="Account" />
            <BodyCopy title="Create Account" copy={"Create an account:"} />
            <CreateAccount />
            <BodyCopy title="Sign In" copy={"Sign In:"} />
            <SignIn />
            <Footer />
        </div>
    )
}