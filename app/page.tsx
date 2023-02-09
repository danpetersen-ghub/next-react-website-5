import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/Hero";
import BodyCopy from "@/components/BodyCopy";
import Footer from "@/components/Footer";



export default async function Home() {

  const data = await fetch('http://localhost:3000/api/data/rsvp').then((res) => res.json());

  console.log("string is:", data);

  const string = `name: ${data.name}, canAttend: ${data.canAttend}, dietryRequrements: ${data.dietryRequrements} `

  return (
    <div>
      <Navbar />
      <HeroBanner name="Home" />
      <BodyCopy title="Home" copy={string} />
      <Footer />
    </div>
  )
}
