import * as React from "react";

export interface MoneyInputProps {
  onChange?: (number) => void;
  value: number;
}

interface State {
  amount: string;
}

function mask(value: number) {
  return (value / 100)
    .toFixed(2)
    .replace(".", ",")
    .replace(/\d(?=(\d{3})+\,)/g, "$&.");
}

class MoneyInput extends React.Component<MoneyInputProps, State> {
  private inputRef: React.RefObject<HTMLInputElement>;
  private caretPos: number;

  constructor(props) {
    super(props);

    this.state = {
      amount: mask(this.props.value)
    };

    this.inputRef = React.createRef();
    this.caretPos = 0;
  }

  handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const numericValue = parseInt(value.replace(/[\.,]/g, "")) || 0;

    const caretPos = this.inputRef.current.selectionStart;
    const offset = mask(numericValue).length - value.length;
    this.caretPos = caretPos + offset;

    this.props.onChange && this.props.onChange(numericValue);
  };

  static getDerivedStateFromProps(props: MoneyInputProps, state: State) {
    return { amount: mask(props.value) };
  }

  componentDidUpdate(prevProps: MoneyInputProps, prevState: State) {
    if (prevState.amount !== this.state.amount) {
      this.inputRef.current.selectionEnd = this.caretPos;
    }
  }

  render() {
    return (
      <input
        ref={this.inputRef}
        type="text"
        value={this.state.amount}
        onChange={this.handleChange}
      />
    );
  }
}

export default MoneyInput;
