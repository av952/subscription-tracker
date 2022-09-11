import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/Header";
import { FormMoney } from "./components/FormMoney";
import { MainControl } from "./components/MainControl";

function App() {
  const [count, setCount] = useState(0);
  const [valid, setValid] = useState(false);

  const component = valid ? (
    <MainControl count={count} />
  ) : (
    <FormMoney setCount={setCount} setValid={setValid} />
  );

  return (
    <div className="app">
      <h1>Subscription traker</h1>
      {component}
    </div>
  );
}

export default App;
