import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import styles from "../views/LoginForm.module.css";

import { useIntl } from "react-intl";

function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const intl = useIntl();

  let history = useHistory();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`?keyword=${keyword}&page=1`);
    } else {
      // if no keyword, sends user to the original page
      history.push(history.push(history.location.pathname));
    }
  };

  return (
    <Form onSubmit={onSubmitHandle}>
      <div className={styles.SearchBar}>
        <Form.Input
          placeholder={intl.formatMessage({ id: "search_item" })}
          icon="search"
          type="text"
          name="search"
          onChange={(e) => setKeyword(e.target.value)}
        ></Form.Input>
      </div>
    </Form>
  );
}

export default SearchBar;
