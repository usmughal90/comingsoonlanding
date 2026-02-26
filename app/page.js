import Preloader from "./components/Preloader/Preloader";
import CountDown from "./components/Countdown/Timer";

export default function Home() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          <br />
          SNS Leather
    <br />
          Coming Soon
        </h1>
        <CountDown />
        <Preloader />
      </div>
    </div>
  );
}
