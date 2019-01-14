import React, { Component } from 'react'
import '../index.css'
import { connect } from 'react-redux'
import { Page } from '../components/Page'
import { User } from '../components/User'
import { getPhotos } from '../actions/PageActions'

class App extends Component {
  render () {
    const { user, page, setYearAction } = this.props
    return (
      <div className='app'>
        <Page
          photos={page.photos}
          year={page.year}
          getPhotos={setYearAction}
          isFetching={page.isFetching}
        />
        <User name={user.name} />
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
    setYearAction: year => dispatch(getPhotos(year))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
