import { PrimeReactProvider } from "primereact/api";
import Main from "./components/main";
import "./App.css";

function App() {
  return (
    <PrimeReactProvider>
      <Main />
    </PrimeReactProvider>
  );
}

export default App;
