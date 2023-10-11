import Slider from "./bodyComps/slider";
import Checkinbox from "./bodyComps/checkinbox";
import Rooms from "./bodyComps/rooms";
import Services from "./bodyComps/services";
import Facilities from "./bodyComps/facilities";
import ChatBox from "./bodyComps/ChatBox";

export default function LandingPage() {
  return (
    <>
      <main>
        <ChatBox />
        <Slider />
        <Checkinbox />
        <div className="hovli"></div>
        <Rooms />
        <Services />
        <Facilities />
      </main>
    </>
  );
}
