import "./App.scss";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/cards/Main";
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
