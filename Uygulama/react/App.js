import { HelloMessage } from "./components/HelloMessage/HelloMessage";
import { Todos } from "./components/Todos/Todos";

export function App() {
    return <>
    <HelloMessage name="james"/>;
    <Todos/>
    </>
  }