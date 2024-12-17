import glowBG from "../../public/glowBG.gif";
import style from "../styles/HomePageStyles.module.css";

function HomePage() {
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
        <img id={style.bg} src={glowBG} />

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
            <form>
              <p>Join in Room</p>
              <input type="text" placeholder="Room Id" />
              <input type="text" placeholder="User Name" />
              <p>
                Don't have a room?, <span>create now</span>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
