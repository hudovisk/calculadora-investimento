import * as React from "react";
import { connect } from "react-redux";

import { StoreState } from "@src/store";

import Form from "@features/ui/components/Form";
import MoneyInput from "@features/ui/components/MoneyInput";

import DateRangePicker from "react-dates/lib/components/DateRangePicker";
import { updateAmount, updateStartDate, updateEndDate } from "../redux/actions";
import { getAmount, getStartDate, getEndDate } from "../redux/selectors";

export interface InvestimentFormProps {
  updateAmount: (number) => void;
  updateStartDate: (any) => void;
  updateEndDate: (any) => void;
  amount: number;
  startDate: any;
  endDate: any;
}

class InvestimentForm extends React.Component<InvestimentFormProps> {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    console.log(startDate, endDate);
    this.props.updateStartDate(startDate);
    this.props.updateEndDate(endDate);
  };

  onFocusChanged = args => {
    console.log("onFocusChanged", args);
    this.setState({ calendarFocused: args });
  };

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Tipo</label>
          <MoneyInput
            value={this.props.amount}
            onChange={this.props.updateAmount}
          />
        </Form.Field>
        <Form.Field>
          <label>Valor</label>
          <MoneyInput
            value={this.props.amount}
            onChange={this.props.updateAmount}
          />
        </Form.Field>
        <Form.Field>
          <label>Período</label>
          <DateRangePicker
            startDateId="StardDateId"
            startDate={this.props.startDate}
            endDateId="EndDateId"
            endDate={this.props.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChanged}
          />
        </Form.Field>
      </Form>
    );
  }
}

const mapStateToProps = (state: StoreState) => ({
  amount: getAmount(state),
  startDate: getStartDate(state),
  endDate: getEndDate(state)
});

export default connect(
  mapStateToProps,
  { updateAmount, updateStartDate, updateEndDate }
)(InvestimentForm);
