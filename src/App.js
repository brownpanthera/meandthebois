import "./App.css";
import { motion } from "framer-motion";
import Audio from "./Components/Audio";
import Header from "./Components/Header";

function App() {
  const text = "";
  // const text = "building \n something \n for bois.";
  let newText = text.split("\n").map((i, index) => {
    return <p key={index.toString()}>{i}</p>;
  });
  return (
    <>
      <div className="App">
        <motion.div
          animate={{ color: "#ffff", y: -10 }}
          initial={{ y: -300 }}
          className="headerName"
        >
          {newText}
        </motion.div>
        {/* <img className="header-img" src="/bois1.jpg" /> */}
      </div>
      <Audio />
      <Header />
    </>
  );
}

export default App;
