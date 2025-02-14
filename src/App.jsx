import {Route, Routes} from "react-router";
import Root from "./layout/Root";
import Drink from "./pages/Drink";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Root></Root>}>
      <Route index element={<Drink></Drink>}></Route>
      </Route>
      
    </Routes>
  );
}

export default App;
