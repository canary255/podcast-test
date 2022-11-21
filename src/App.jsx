import { BrowserRouter } from "react-router-dom";
import { Header } from "./Components/Header/index";
import AppRoutes from "./Page/Routes/index";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="p-8">
        <div>
          <Header />
        </div>
        <div className="mt-8">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
