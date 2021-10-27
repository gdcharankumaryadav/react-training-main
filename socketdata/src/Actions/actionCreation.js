import { TICK, START_TIMER } from "../Actions/actionTypes";

const tick = ({ interval }) => {
  return {
    type: TICK,
    time: new Date().toLocaleTimeString(),
    interval,
  };
};

export const startTimer = () => {
  return (dispatch, getState) => {
    dispatch({
      type: START_TIMER,
    });
    clearInterval(getState.interval);

    const interval = setInterval(() => {
      dispatch(tick({ interval }));
    }, 1000);
  };
};
