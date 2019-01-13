import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import Page from '../components/Page'
import User from '../components/User'

class App extends Component {
  render () {
    const { user, page } = this.props
    return (
      <div className='App'>
        <div>
          <h3>Мой топ фото</h3>
          <Page year={page.year} photos={page.photos} />
        </div>
        <div>
          <User name={user.name} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    user: store.user,
    page: store.page
  }
}

export default connect(mapStateToProps)(App)
