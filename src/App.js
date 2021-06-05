import 'rsuite/dist/styles/rsuite-default.css';
import { Button } from 'rsuite';
import Footer from "./component/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Button appearance="primary"> Hello world </Button>
      <Footer ></Footer>
    </div>
  );
}

export default App;
