import { useEffect, useState } from 'react';
import './App.css';
import TodoWrapper from './Components/TodoWrapper';
import { v4 as idGenerate } from 'uuid';

const INITIAL_STATE = [ //Proğramın başlandıcında atadığımız varsayılan değer.
  { id: idGenerate(), desc: "Toplantı notlarını unutma", isCompleted: false, isEditing: false },
  { id: idGenerate(), desc: "Müşterileri aramayı unutma", isCompleted: false, isEditing: false },
  { id: idGenerate(), desc: "Spor salonundan randevu iptali", isCompleted: true, isEditing: false },
  { id: idGenerate(), desc: "Proje yönetimi görüşmesi", isCompleted: false, isEditing: false },
  { id: idGenerate(), desc: "Javascript konferansını unutma", isCompleted: true, isEditing: false }
];

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    let item = localStorage.getItem("todo-app-react");
    if (item != null) {
      setTasks(JSON.parse(item));
    };
    console.log(tasks);
  }, [])

  return (
    <>
      <TodoWrapper tasks={tasks} />
    </>
  );
}

export default App;
