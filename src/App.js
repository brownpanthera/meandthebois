import "./App.css";
import { motion } from "framer-motion"

function App() {
  const text = 'building \n something \n for bois.';
  let newText = text.split('\n').map(i => {
    return <p>{i}</p>
  })
  return (
    <>
      <div className="App">
      <motion.p animate={{ color: 'tomato', y: -10}} initial={{y: -300}} className="headerName">{newText}</motion.p>
      {/* <img className="header-img" src="/bois1.jpg" /> */}
      {/* <motion.button  animate={{scale: 1.5}}>LOTR</motion.button> */}
      </div>
    </>
  );
}

export default App;
