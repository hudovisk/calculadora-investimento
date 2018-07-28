import * as React from "react";
import styled from "styled-components";

import FormField from "./FormField";

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

class Form extends React.Component {
  static Field = FormField;

  render() {
    return React.createElement(FormElement, this.props);
  }
}

export default Form;
