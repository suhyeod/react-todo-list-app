import { useState } from "react";
import Controls from "./components/Controls";
import Layout from "./components/Layout";
import Title from "./components/Title";
import TodoList from "./components/TodoList";


function App() {
  const [list , setList] = useState([
    {
      id: 1 ,
      text : "hello" ,
      completed : false,
    },
  ])
  return (
    <div>
      <Layout>
        <Title />
        <Controls />
        <TodoList data = {list}/>
      </Layout>
    </div>
  );
}

export default App;
