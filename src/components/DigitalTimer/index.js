import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {timerNumber: 25, isTimerRunning: false, timerInSec: 1500}

  resetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({timerInSec: 1500, timerNumber: 25})
  }

  onIncreaseTimer = () => {
    this.setState(prevState => ({
      timerInSec: prevState.timerInSec + 60,
      timerNumber: prevState.timerNumber + 1,
    }))
  }

  onDecreaseTimer = () => {
    this.setState(prevState => ({
      timerInSec: prevState.timerInSec - 60,
      timerNumber: prevState.timerNumber - 1,
    }))
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.timeCount, 1000)
    this.setState({isTimerRunning: true})
  }

  timeCount = () => {
    this.setState(prevState => ({timerInSec: prevState.timerInSec - 1}))
  }

  getMinutes = () => {
    const {timerInSec} = this.state
    const minutes = Math.floor(timerInSec / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  getSeconds = () => {
    const {timerInSec} = this.state
    const seconds = Math.floor(timerInSec % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {timerNumber, isTimerRunning} = this.state
    const time = `${this.getMinutes()}:${this.getSeconds()}`
    return (
      <div className="bg-container">
        <h1 className="head">Digital Timer</h1>
        <div className="timer-container">
          <div className="timer-bg">
            <div className="timer">
              <h1 className="timer-head">{time}</h1>
              {isTimerRunning ? (
                <p className="timer-para">Running</p>
              ) : (
                <p className="timer-para">Paused</p>
              )}
            </div>
          </div>
          <div className="buttons-container">
            <div className="button-align-container">
              {isTimerRunning ? (
                <button
                  className="s-p-button"
                  type="button"
                  onClick={this.onStopTimer}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                    className="s-p-r-image"
                    alt="pause icon"
                  />
                  Pause
                </button>
              ) : (
                <button
                  className="s-p-button"
                  type="button"
                  onClick={this.onStartTimer}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    className="s-p-r-image"
                    alt="play icon"
                  />
                  Start
                </button>
              )}
              <button
                className="s-p-button"
                type="button"
                onClick={this.resetTimer}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="s-p-r-image"
                />
              </button>
              <p>Reset</p>
            </div>
            <p className="set-timer-para">Set Timer Limit</p>
            <div className="set-timer-container">
              <button
                type="button"
                className="minus-plus-button"
                onClick={this.onDecreaseTimer}
              >
                -
              </button>
              <p className="number-para">{timerNumber}</p>
              <button
                type="button"
                className="minus-plus-button"
                onClick={this.onIncreaseTimer}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
