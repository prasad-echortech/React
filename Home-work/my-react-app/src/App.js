
import Ex from "./components/Ex";
// import Ex2 from "./components/Ex2";
import "./App.css"
import Car from "./components/Car";
import Forms from "./components/Forms";
import MadeGoal from "./components/MadeGoal";
import MissedGoal from "./components/MissedGoal";
import Goal from "./components/Goal";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Product from './components/Product';
import Singleproduct from "./components/Singleproduct";

function App() {

  return (
    <>
      {/* <Ex color="red" /> */}
      <div>
        {/* <Goal isGoal={false} /> */}
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route index element={<Ex color="red" />} />
            <Route path="/ex" element={<Ex color="red" />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="madeGoal" element={<MadeGoal />} />
            <Route path="missedGoal" element={<MissedGoal />} />
            <Route path="goal" element={<Goal isGoal={false}/>} />
            <Route path="*" element={<Error />} />
            <Route path="/car" element={<Car />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:id" element={<Singleproduct />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>




  );
}

export default App;
