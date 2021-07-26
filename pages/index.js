import MetaData from "../components/layout/MetaData";
import Hero from "../components/home/Hero";
import Expertises from "../components/home/Expertises";
import Technologies from "../components/home/Technologies";


export default function Home() {
  return (
    <>
      <MetaData description="Créez un site Web / une application mobile pour votre affaire. et créez votre système de conception avec une interface utilisateur, un logo et une carte de visite" />
      <Hero />
      <Expertises />
      <div className="text-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144.54 17.34"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
        </svg>
      </div>
      <Technologies />

    </>
  );
}
