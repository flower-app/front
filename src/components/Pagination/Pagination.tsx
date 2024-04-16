import classNames from 'classnames';
import React from 'react';
import "./Pagination.scss";

const pages = [0, 1];

type Props = {
  currentPage: number,
  setCurrentPage: (n: number) => void,
}


export const Pagination: React.FC<Props> = ({ currentPage, setCurrentPage }) => {
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 0}
        className={classNames(
          "pagination__arrow-btn pagination__arrow-btn--prev",
          { 'pagination__arrow-btn--disabled': currentPage === 0 }
        )}
      >
        <div className="pagination__arrow-inside pagination__arrow-inside--prev"></div>
      </button>
      <div className="pagination__pages">
        {pages.map(page => (
          <button
            key={page}
            className={classNames(
              "pagination__page",
              { "pagination__page--active": currentPage === page }
            )}
            onClick={(() => setCurrentPage(page))}
          >
            {page + 1}
          </button>
        ))}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={classNames(
          "pagination__arrow-btn",
          { 'pagination__arrow-btn--disabled': currentPage === pages.length - 1 }
        )}
      >
        <div className="pagination__arrow-inside"></div>
      </button>
    </div>
  );
}
