import React, { FC, useCallback } from 'react';

interface Props {
  // pagesAmount: number,
  page: number,
  setPageNumber: React.Dispatch<React.SetStateAction<number>>,
}

export const Pagination: FC<Props> = ({ setPageNumber, page }) => {
  const next = useCallback(() => {
    setPageNumber((x: number) => x + 1);
  }, [page]);

  const prev = useCallback(() => {
    if (page > 1) {
      setPageNumber((x: number) => x - 1);
    }
  }, [page]);

  return (
    <div className="pagination d-flex justify-content-center gap-5">
      <button
        type="button"
        className="btn btn-primary"
        onClick={prev}
      >
        Prev
      </button>

      <button
        type="button"
        className="btn btn-primary"
        onClick={next}
      >
        Next
      </button>
    </div>
  );
};
