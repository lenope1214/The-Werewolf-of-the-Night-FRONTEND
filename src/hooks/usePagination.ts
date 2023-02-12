import { useState } from "react";

type Page = {
  activePage: number;
  totalPages: number;
  totalElements: number;
  offset: number;
};

export default function usePagination() {
  const [page, setPage] = useState<Page>({
    activePage: 1,
    totalPages: 1,
    totalElements: 1,
    offset: 0,
  });

  const updatePage = (updated: { [key in keyof Page]?: number }) => {
    setPage((prev) => ({
      ...prev,
      ...updated,
    }));
  };

  const onClickPagination = (type: "first" | "prev" | "next" | "last") => {
    let value = 1;

    if (type === "first") value = 1;
    else if (type === "prev") value = page.activePage - 1;
    else if (type === "next") value = page.activePage + 1;
    else if (type === "last") value = page.totalPages;

    setPage((prev) => ({
      ...prev,
      activePage: value,
    }));
  };

  return { page, updatePage, onClickPagination };
}
