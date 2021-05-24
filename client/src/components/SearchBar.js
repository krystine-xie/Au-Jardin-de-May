import React, { useState } from "react";
import { Form, Input } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

function SearchBar() {
  const [keyword, setKeyword] = useState("");

  let history = useHistory();

  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (keyword) {
      history.push(`/?keyword=${keyword}`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };

  return (
    <Form onSubmit={onSubmitHandle}>
      <Form.Input
        icon="search"
        type="text"
        name="search"
        onChange={(e) => setKeyword(e.target.value)}
      ></Form.Input>
    </Form>
  );
}

export default SearchBar;
