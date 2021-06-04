import React from "react";
import { Pagination } from "semantic-ui-react";

function Paginator({ pages, page, keyword = "", isAdmin = false }) {
  if (keyword) {
    keyword = keyword.split("?keyword=")[1].split("&")[0];
  }

  console.log("Keyword: ", keyword);
  console.log("Pages: ", pages);

  return pages > 1 ? (
    <Pagination defaultActivePage={page} totalPages={pages}></Pagination>
  ) : (
    <Pagination disabled />
  );
}

export default Paginator;
