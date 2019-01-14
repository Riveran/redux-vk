import React, { Component } from 'react'
import '../index.css'
import { connect } from 'react-redux'
import { Page } from '../components/Page'
import { User } from '../components/User'
import { getPhotos } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'

class App extends Component {
  render () {
    const { user, page, getPhotosAction, handleLoginAction } = this.props
    return (
      <div className='app'>
        <Page
          photos={page.photos}
          year={page.year}
          getPhotos={getPhotosAction}
          isFetching={page.isFetching}
          error={page.error}
        />
        <User
          name={user.name}
          isFetching={user.isFetching}
          getPhotos={getPhotosAction}
          handleLogin={handleLoginAction}
        />
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

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    handleLoginAction: () => dispatch(handleLogin())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
