import React from "react";
import { connect } from "react-redux";
import { startTimer } from "../Actions/actionCreation";
import faker from "faker";
import CommentDetail from "./CommentDetails";

class ApprovalCard extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  componentDidMount() {
    this.props.startTimer();
  }
  render() {
    return (
      <div class>
          
          <div class="description">
            <CommentDetail time={this.props.time} />
          </div>
        
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
