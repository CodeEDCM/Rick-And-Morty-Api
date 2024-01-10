import { Card, Button } from "../Components/ExpoComponents";
import { useAxion, useNewPage } from "../Hooks/ExportHook";
import style from '../Style/Aside.module.css'

export const Main = () => {
  const { page, nextPage, previousPage } = useNewPage();
  const { data } = useAxion(page);

  return (
    <>
      <section className={style.Aside}>
        <Button Name="<<" Resource={previousPage} />
        <h4 className={style.h4}>{page}</h4>
        <Button Name=">>" Resource={nextPage} />
      </section>

      <section>
        <Card data={data} />
      </section>

      <section className={style.Aside}>
        <Button Name="<<" Resource={previousPage} />
        <h4 className={style.h4} >{page}</h4>
        <Button Name=">>" Resource={nextPage} />
      </section>
    </>
  );
};
