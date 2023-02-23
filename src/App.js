import "./App.css";
import { motion } from "framer-motion";
import Geolocation from "./Components/Geolocation";

function App() {
  const text = "building \n something \n for bois.";
  let newText = text.split("\n").map((i, index) => {
    return <p key={index.toString()}>{i}</p>;
  });
  return (
    <>
      <div className="App">
        <motion.p
          animate={{ color: "#ffff", y: -10 }}
          initial={{ y: -300 }}
          className="headerName"
        >
          {newText}
        </motion.p>
        {/* <img className="header-img" src="/bois1.jpg" /> */}
      </div>
      {/* <Geolocation /> */}
    </>
  );
}

export default App;
