import style from "./style/Card.module.css";
export const Card = ({data}) => {
  return (
    <section className={style.main}>
      {data.map((Resp) => (
        <div className={style.Card} key={Resp.id}>
          <img
            src={Resp.image}
            alt="Imagen de la tarjeta"
            className={style.cardImg}
          />
          <div className={style.cardContent}>
            <h2 className={style.cardH2}>{Resp.name}</h2>
            <span className={style.cardSpan}> Specie: </span>
            <p className={style.cardP}>{Resp.species}</p>
            <span className={style.cardSpan}> Status: </span>
            <p className={style.cardP}>{Resp.status}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
