import React from "react"
import PropTypes from "prop-types"

import Button from "../Button"
import * as Styled from "./style"

export const Timer = ({
  celebrating,
  startTimer,
  timerActive,
  stopTimer,
  time,
  ...props
}) => {
  let result = new Date((time + 0.999999) * 1000).toISOString().substr(14, 5)
  return (
    <Styled.Flexer am col width="960px">
      <Styled.Time>{result}</Styled.Time>
      <Styled.Btn
        disabled={celebrating}
        red={timerActive}
        onClick={timerActive ? () => stopTimer(false) : startTimer}
      >
        {timerActive ? "Stop" : "Start"}
      </Styled.Btn>
    </Styled.Flexer>
  )
}

Timer.propTypes = {
  startTimer: PropTypes.func,
  stopTimer: PropTypes.func,
}

export default Timer
