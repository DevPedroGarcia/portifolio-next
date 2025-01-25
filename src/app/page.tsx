import Menu from "@/components/Menu";
import "./globals.css";
import BemVindo from "@/components/WelcomeHome";

export default function Home() {
  return (
    <div className="main">
      <div className="container-principal">
        
        <Menu />
        <BemVindo/>
        
      </div>
    </div>
  );
}
