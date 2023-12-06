import Footer from "./Footer";
import Header from "./Header";
import TodoList from "./TodoList";

export default function Todo() {
  return (
    <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}
