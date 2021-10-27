import React from "react";
import { connect } from "react-redux";
import { startTimer } from "../Actions/actionCreation";

class ApprovalCard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.startTimer();
  }
  render() {
    return (
      <div>
        <p> &nbsp;&nbsp;&nbsp;&nbsp; Current time is : {this.props.time}</p>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    time: state.time,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: () => {
      dispatch(startTimer());
    },
  };
};

ApprovalCard = connect(mapStateToProps, mapDispatchToProps)(ApprovalCard);

export default ApprovalCard;
