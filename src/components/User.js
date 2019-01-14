import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../index.css'

export class User extends Component {
  renderTemplate = () => {
    const { name, isFetching, error } = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка</p>
    }

    if (isFetching) {
      return <p>Загружаю...</p>
    }

    if (name) {
      return <p>Привет, {name}</p>
    } else {
      return (
        <button className='btn' onClick={this.props.handleLogin}>
          Войти
        </button>
      )
    }
  }

  render () {
    return <div className='ib user'>{this.renderTemplate()}</div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleLogin: PropTypes.func.isRequired
}
