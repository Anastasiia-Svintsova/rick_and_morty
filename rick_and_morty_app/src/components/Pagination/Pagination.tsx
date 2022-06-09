import React, { FC, useCallback } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.scss';

interface Props {
  pagesAmount: number,
  setPageNumber: React.Dispatch<React.SetStateAction<number>>,
  page: number,
}

export const Pagination: FC<Props> = ({ setPageNumber, pagesAmount, page }) => {
  const onPageChange = useCallback((selectedPage: number) => {
    setPageNumber(selectedPage + 1);
  }, []);

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
      forcePage={page - 1}
    />
  );
};
