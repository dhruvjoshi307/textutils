import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import "./App.css";
function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About" />
    <div className="container mt-5">
      <TextForm heading="Enter The Text"/>
    </div>
    </>
  );
}
export default App;
