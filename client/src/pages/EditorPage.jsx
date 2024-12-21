import { useState } from "react";
import style from "../styles/EditorPageStyles.module.css";
import Members from "../components/Members";
import Editor from "../components/Editor";

function EditorPage() {
  const [clients, setClients] = useState([
    { socketId: 1, username: "Jay Oza" },
    { socketId: 2, username: "Devanshi Parmar" },
    { socketId: 3, username: "Oza Jay" },
    { socketId: 4, username: "Parmar Devanshi" },
    { socketId: 1, username: "Jay Oza" },
  ]);

  return (
    <div className={style.main}>
      <div className={style.left}>
        <h4>Members</h4>
        <div className={style.memberList}>
          {clients.map((client) => {
            return <Members key={client.socketId} username={client.username} />;
          })}
        </div>
        <div className={style.btns}>
          <button>Copy RoomId</button>
          <button>Exit</button>
        </div>
      </div>
      <div className={style.right}>
        <Editor />
      </div>
    </div>
  );
}

export default EditorPage;
