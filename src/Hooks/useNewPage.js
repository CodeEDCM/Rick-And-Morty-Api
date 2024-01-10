import { useState } from "react";

export const useNewPage = () => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page < 42 && page >= 1) setPage(page + 1);
  };
  const previousPage = () => {
    if (page <= 42 && page > 1) setPage(page - 1);
  };

  return {
    page,
    nextPage,
    previousPage,
  };
};
