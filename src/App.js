import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
//styles
import { GlobalStyle } from "./GlobalStyle";
const App = () => {
  return (
    <div>
      <Header />
      <Home />
      Start here
      <GlobalStyle />
    </div>
  );
};

export default App;
