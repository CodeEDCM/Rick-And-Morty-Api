import { Icons } from "../Components/ExpoComponents";
import style from "../Style/Footer.module.css";
export const Footer = () => {
  return (
    <footer className={style.Main}>
      <section className={style.Icon}>
        <Icons />
      </section>

      <section className={style.Text1}>
        <p className={style.p1}>
          Comedia animada que narra las aventuras de un científico loco Rick
          Sánchez, que regresa después de 20 años para vivir con su hija, su
          marido y sus hijos Morty y Summer.
        </p>
      </section>
      <section className={style.text2}>
        <p className={style.p2}>
          La serie combina ciencia ficción, acción y comedia, y ha ganado una
          base de seguidores leales debido a su humor irreverente y su
          exploración de temas existenciales a través de situaciones absurdas.
          Si aún no la has visto, ¡te la recomiendo! 🚀🔬🌌
        </p>
      </section>
    </footer>
  );
};
