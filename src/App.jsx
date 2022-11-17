import { Header } from "./Components/atom/Header/index";
import { MainPage } from "./Components/page/MainPage/index";
import "./index.css";

function App() {
  return (
    <div className="p-8">
      <div>
        <Header />
      </div>
      <div className="mt-8">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
