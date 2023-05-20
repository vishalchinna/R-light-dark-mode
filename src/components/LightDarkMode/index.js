import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {classname: 'dark-mode', mode: 'Light Mode'}

  changeProperty = () => {
    this.setState(prev => ({
      classname: prev.classname === 'dark-mode' ? 'light-mode' : 'dark-mode',
      mode: prev.mode === 'Light-mode' ? 'Light-mode' : 'Dark-mode',
    }))
  }

  render() {
    const {classname, mode} = this.state

    return (
      <div className="bg-container">
        <div className={classname}>
          <h1>Click to change Mode</h1>
          <button className="btn" type="button" onClick={this.changeProperty}>
            {mode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
