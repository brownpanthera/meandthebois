import "./App.css";

function App() {
  const text = 'building \n something \n for bois.';
  let newText = text.split('\n').map(i => {
    return <p>{i}</p>
  })
  return (
    <>
      <div className="App">
      <p className="headerName">{newText}</p>
      </div>
    </>
  );
}

export default App;
