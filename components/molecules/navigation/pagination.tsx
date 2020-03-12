import React from "react";

const Pagination = props => {
  const { prePage, nextPage, totalPages, page, toPage } = props;

  const numbers = Array.from({ length: totalPages });

  const move = p => {
    toPage({ page: p });
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={!prePage && "disabled"}>
          <a aria-label="Previous" onClick={() => move(page - 1)}>
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {numbers.map((element, index) => (
          <li key={index} className={page === index + 1 ? "active" : undefined}>
            <a style={styles.a} onClick={() => move(index + 1)}>
              {index + 1}
            </a>
          </li>
        ))}
        <li className={!nextPage ? "disabled" : undefined}>
          <a aria-label="Next" onClick={() => move(page + 1)}>
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  a: {
    cursor: "pointer"
  }
};

export default Pagination;
