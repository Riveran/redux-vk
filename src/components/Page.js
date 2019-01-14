import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../index.css'

export class Page extends Component {
  handleClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }

  renderTemplate = () => {
    const { photos, isFetching, error } = this.props
    if (error) {
      return <p className='error'>Во время загрузки фото произошла ошибка</p>
    }
    if (isFetching) {
      return <p>Загрузка...</p>
    } else {
      return photos.map(entry => (
        <div key={entry.id} className='photo'>
          <p>
            <img src={entry.sizes[0].url} alt='' />
          </p>
          <p>{entry.likes.count}❤</p>
        </div>
      ))
    }
  }
  render () {
    const { year, photos } = this.props
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
        <h3>
          {year} год [{photos.length}]
        </h3>
        {this.renderTemplate()}
      </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  error: PropTypes.string,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}
