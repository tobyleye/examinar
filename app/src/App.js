import { useEffect, useState } from "react";
import "./App.css";

const isProd = process.env.NODE_ENV === "production";

function App() {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    const effect = async () => {
      console.log({ env: process.env.NODE_ENV });
      const data = await fetch(
        isProd ? "https://examin-er.herokuapp.com/" : "http://localhost:4000"
      ).then((res) => res.json());
      setMessage(data.message);
    };
    effect();
  }, []);
  return (
    <div className="App">
      <div>{message || "Loading.."}</div>
    </div>
  );
}

export default App;
