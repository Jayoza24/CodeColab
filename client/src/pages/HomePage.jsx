import { useState } from "react";
import glowBG from "/glowBG.gif";
import style from "../styles/HomePageStyles.module.css";
import { v4 as uuidV4 } from "uuid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [UserName, setUserName] = useState("");
  const [RoomId, setRoomId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCreateClick = (e) => {
    e.preventDefault();
    const uid = uuidV4();
    setRoomId(uid);
    toast.success("Room Created Successfully🥳", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const joinRoom = () => {
    if (!RoomId || !UserName) {
      toast.error("Room Creation Failed 🙁, Room-id and Username Required!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      navigate(`/editor/${RoomId}`, {
        state: UserName,
      });
    }
  };

  const handleEnterClick = (e) => {
    if (e.code == "Enter") {
      joinRoom();
    }
  };

  return (
    <div className={style.main}>
      <section className={style.welcomeSec}>
        <img id={style.bg} src={glowBG} />

        <div className={style.welcome}>
          <p>welcome to </p>
          <p>CodeColab</p>
        </div>
      </section>
      <section className={style.colabCodeSec}>
        <div className={style.bg}></div>
        <div className={style.codeContents}>
          <div className={style.left}>
            <div className={style.content}>
              <p>CREATE ,</p>
              <p>JOIN ,</p>
              <p>CODE !</p>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.bg}></div>
            <form onSubmit={handleSubmit}>
              <p>Join in Room</p>
              <input
                type="text"
                placeholder="Room Id"
                value={RoomId}
                onChange={(e) => {
                  setRoomId(e.target.value);
                }}
                onKeyUp={handleEnterClick}
              />
              <input
                type="text"
                placeholder="User Name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                onKeyUp={handleEnterClick}
              />
              <button type="submit" onClick={joinRoom}>
                JOIN
              </button>
              <p>
                Don&apos;t have a room?
                <span onClick={handleCreateClick}>create now</span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
