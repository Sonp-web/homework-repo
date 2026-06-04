import type { TaskType } from "./App";

type PropsType = {
  tasks: TaskType[];
  clearDone: () => void;
  setNewUp: (isIt: boolean) => void;
};

const InfoDo = ({ tasks, clearDone, setNewUp }: PropsType) => {
  return (
    <div className="notDone">
      <p>Осталось дел {tasks.filter((item) => !item.isDone).length}</p>
      <button onClick={clearDone}>Очистить выполненные</button>
      <button
        onClick={() => {
          setNewUp(true);
        }}
      >
        Новые сверху
      </button>
      <button
        onClick={() => {
          setNewUp(false);
        }}
      >
        Новые снизу
      </button>
    </div>
  );
};
export default InfoDo;
