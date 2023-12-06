import Todo from "./Todo/Todo";
import Navbar from "./navigation/Navbar";

function App() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar />
      <Todo />
    </div>
  );
}

export default App;
