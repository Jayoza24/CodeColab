import style from "../styles/NavBarStyles.module.css";

function NavBar() {
  return (
    <div className={style.navBar}>
      <a href="">HOME</a>
      <a href="">COLAB | CODE</a>
      <a href="">COLAB | DOC</a>
    </div>
  );
}

export default NavBar;
