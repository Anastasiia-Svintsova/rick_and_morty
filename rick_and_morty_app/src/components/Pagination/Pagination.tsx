import React, { FC, useCallback } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

interface Props {
  pagesAmount: number,
  page: number,
  setPageNumber: React.Dispatch<React.SetStateAction<number>>,
}

export const Pagination: FC<Props> = ({ setPageNumber, page, pagesAmount }) => {
  // const next = useCallback(() => {
  //   if (page < pagesAmount) {
  //     setPageNumber((prevPage: number) => prevPage + 1);
  //   }
  // }, [page]);

  // const prev = useCallback(() => {
  //   if (page > 1) {
  //     setPageNumber((prevPage: number) => prevPage - 1);
  //   }
  // }, [page]);
  const onPageChange = useCallback((selectedPage: number) => {
    setPageNumber(selectedPage);
  }, []);

  console.log(page);

  return (
    <ReactPaginate
      className="pagination gap-4"
      nextLabel="&raquo;"
      previousLabel="&laquo;"
      nextLinkClassName="btn btn-primary"
      previousLinkClassName="btn btn-primary"
      pageLinkClassName="page-link"
      pageClassName="page-item"
      activeClassName="active"
      pageCount={pagesAmount}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onPageChange(selected)}
    />
  );
};
