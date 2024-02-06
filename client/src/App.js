import "./App.css";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

// components
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

function App() {
  return (
    <div>
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
