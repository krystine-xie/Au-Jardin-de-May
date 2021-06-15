import React from "react";
import { Pagination } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styles from "./Paginator.module.css";

function Paginator({ pages, keyword = "", isAdmin = false }) {
  if (keyword) {
    keyword = keyword.split("?keyword=")[1].split("&")[0];
  }

  return (
    pages > 1 && (
      <div className={styles.pagination}>
        {[...Array(pages).keys()].map((x) => (
          <Link
            to={
              !isAdmin
                ? `/store/?keyword=${keyword}&page=${x + 1}`
                : `/admin/productlist/?keyword=${keyword}&page=${x + 1}`
            }
            key={x + 1}
          >
            <div className={styles.paginationLink}>{x + 1}</div>
          </Link>
        ))}
      </div>
    )
  );
}

export default Paginator;
