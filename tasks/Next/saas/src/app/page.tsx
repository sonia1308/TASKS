import Hero from "./components/hero";
import Navbar from "./components/nav";
import PlanCards from "./components/planCards";
import Toggle from "./components/toggle";
import Cards from "./sections/cards";
import Subscription from "./sections/subscription";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Subscription/>
   <Cards/>
   <Toggle/>
   <PlanCards/>
   </>
  );
}
