import dataMenu from "../Json/DataMenu.json";
import style from "./style/Menu.module.css";

export const Menu = () => {
  return (
    <div className={style.Main}>
      {dataMenu.menuNav.map((Resp) => (
        <nav key={Resp.id} className={style.Nav}>
          <a href={Resp.url} className={style.A}>
            {Resp.name}
          </a>
        </nav>
      ))}
    </div>
  );
};
