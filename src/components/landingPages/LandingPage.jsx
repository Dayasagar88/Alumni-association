import LandingPageHeader from "../common/LandingPageHeader";
import { Outlet } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <LandingPageHeader/>
      <Outlet/>
    </div>
  );
}
