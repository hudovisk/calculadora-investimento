import styled from "styled-components";

const Field = styled.div`
  label {
    display: block;
    font-size: 1em;
    font-weight: 700;
    text-transform: none;
  }

  input {
    margin: 0;
    outline: 0;
    line-height: 1.25em;
    padding: 0.65em 1em;
    font-size: 1em;
    background: #fff;
    border: 1px solid rgba(34, 36, 38, 0.15);
    color: rgba(0, 0, 0, 0.87);
    border-radius: 0.3rem;
    box-shadow: 0 0 0 0 transparent inset;
    transition: color 0.1s ease, border-color 0.1s ease;

    &:focus {
      color: rgba(0,0,0,.95);
      border-color: #85b7d9;
      background: #fff;
      box-shadow: 0 0 0 0 rgba(34,36,38,.3
    }
  }
`;

export default Field;
