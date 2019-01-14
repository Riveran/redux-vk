import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../index.css'

export class Page extends Component {
  handleClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }
  render () {
    const { year, photos, isFetching } = this.props
    return (
      <div className='ib page'>
        <button className='btn' onClick={this.handleClick}>
          2018
        </button>{' '}
        <button className='btn' onClick={this.handleClick}>
          2017
        </button>{' '}
        <button className='btn' onClick={this.handleClick}>
          2016
        </button>{' '}
        <button className='btn' onClick={this.handleClick}>
          2015
        </button>{' '}
        <button className='btn' onClick={this.handleClick}>
          2014
        </button>
        {isFetching ? (
          <p>Загрузка...</p>
        ) : (
          <p>
            У вас {photos.length} фотографий за {year} год
          </p>
        )}
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}
