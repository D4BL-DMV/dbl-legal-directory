import React, { Component, Fragment } from 'react'
import memoize from 'lodash/memoize'
import Slider from 'react-slick'
import Measure from 'react-measure'
import ReactMarkdown from 'react-markdown'
import Select from 'react-select'
import classNames from 'classnames'

import listings from '../../data/listings.json'

import './slider.scss'

const listingToJson = require('../../csv.js')

const kebabCase = str =>
  str
    .toLowerCase()
    .replace(/\(.*\)/, '')
    .trim()
    .replace(/ /g, '-')
    .replace(/("|,)/g, '')
    .replace(/&/g, 'and')

const getImage = name => {
  try {
    const fileName = kebabCase(name)
    return require(`../../images/listings/${fileName}.jpg`).default
  } catch (e) {
    return require(`../../images/listings/no-photo.jpg`).default
  }
}

class Slide extends Component {
  state = {
    nameDimensions: {
      width: 0,
      height: 0
    }
  }

  linkRenderer = props => (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )

  render() {
    const {
      imageSrc,
      name,
      link_url,
      phone_number,
      email,
      description,
      categories,
      isVisible
    } = this.props
    const categoriesArr = splitCategories(categories).sort()
    return (
      <div className={classNames('bw-slide', kebabCase(name))}>
        {imageSrc && (
          <a href={link_url}>
            <div
              className="bw-slide__image"
              style={{ backgroundImage: `url('${imageSrc}')` }}
            />
          </a>
        )}
        {isVisible && (
          <div
            className={classNames('bw-slide__content', {
              'bw-slide__content--no-image': !imageSrc
            })}
          >
            <Measure
              bounds
              onResize={contentRect => {
                this.setState({ nameDimensions: contentRect.bounds })
              }}
            >
              {({ measureRef }) => (
                <div ref={measureRef} className="bw-slide__name">
                  <h3>
                    <a href={link_url} className="bw-slide__name-link">
                      {name}
                    </a>
                  </h3>
                  <div className="bw-slide__donations">
                    {phone_number && (
                      <div className="bw-slide__donation">
                        Phone Number:{' '}
                        <span className="bw-slide__donation-value">
                          {phone_number}
                        </span>
                      </div>
                    )}
                    {email && (
                      <div className="bw-slide__donation">
                        Email:{' '}
                        <span className="bw-slide__donation-value">
                          {email}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Measure>
            <div
              className="bw-slide__scrollable"
              style={{
                height: `calc(100% - ${this.state.nameDimensions.height}px)`
              }}
            >
              {/* <h4>{title}</h4> */}
              <ReactMarkdown
                renderers={{ link: this.linkRenderer }}
                source={description}
              />
              {categoriesArr.length > 0 && (
                <div className="bw-slide__categories">
                  {categoriesArr.map(category => (
                    <div className="bw-slide__category" key={category}>
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

const splitCategories = category => category.split(', ').filter(Boolean)

const setHash = value => {
  if (!value) {
    return removeHash()
  }
  const hash = `#${value}`
  if ('pushState' in window.history) {
    window.history.pushState(null, null, hash)
  } else {
    window.location.hash = hash
  }
}

// https://stackoverflow.com/questions/1397329/how-to-remove-the-hash-from-window-location-url-with-javascript-without-page-r/5298684#5298684
const removeHash = () => {
  let scrollV,
    scrollH,
    loc = window.location
  if ('pushState' in window.history)
    window.history.pushState('', document.title, loc.pathname + loc.search)
  else {
    // Prevent scrolling by storing the page's current scroll offset
    scrollV = document.body.scrollTop
    scrollH = document.body.scrollLeft

    loc.hash = ''

    // Restore the scroll offset, should be flicker free
    document.body.scrollTop = scrollV
    document.body.scrollLeft = scrollH
  }
}

const getInitialSlideIndex = haystack => {
  const index = getSlideIndexById(window.location.hash, haystack)
  return index < 0 ? 0 : index
}

const getSlideIndexById = (needle, haystack) => {
  if (!needle) return -1
  const id = needle.replace('#', '')
  return haystack.findIndex(listing => id === kebabCase(listing['Name']))
}

const buildGetInCategories = ls => {
  return categories => {
    console.log(ls)
    return ls.filter(listing => {
      if (!listing['Name']) return false
      if (categories.length === 0) return true
      const cats = splitCategories(listing['Category'])
      return cats.reduce((inResultSet, cat) => {
        return inResultSet || categories.includes(cat)
      }, false)
    })
  }
}

class ListingSlider extends Component {
  constructor(props) {
    super(props)
    this.state = this.buildState({ json: [], hash: '' })
  }

  buildState = ls => {
    let json = Array.from(ls.json)
    let currentSlide = getInitialSlideIndex(json)
    return {
      listings: json,
      hash: ls.hash,
      inCategories: memoize(buildGetInCategories(json)),
      selectedCategories: [],
      query: null,
      currentSlide: currentSlide,
      sliderSettings: Object.assign({}, this.getSliderSettings(), {
        initialSlide: currentSlide
      })
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.setSliderSettings)
    window.addEventListener('click', this.jumpToSlide, false)
    // Ideally, we could leverage service worker to lookup, parse, and cache.
    // However, API seems inconsistent...
    let update = async () => {
      const response = await fetch(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vScFdbDqIYm8iiHys0fo_TJ9nJ6aqLxZw8lHpZ4knuVEGmlNJGzsDaKSbPxFB5cTCFmQHZtrYcxyHkl/pub?gid=187538216&single=true&output=csv',
        { redirect: 'follow' }
      )
        .then(response => response.text())
        .then(listingToJson)
      if (response && response.hash != this.state.hash) {
        let categories = this.state.selectedCategories.map(x => ({ value: x }))
        let query = this.state.query
        this.setState(this.buildState(response))
        this.handleCategoryChange(categories)
        this.handleQueryChange(query)
      }
    }
    update()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSliderSettings)
    window.removeEventListener('click', this.jumpToSlide, false)
  }

  bindRef = ref => {
    this.slider = ref
  }

  bindQuerySelectRef = ref => {
    this.querySelect = ref
  }

  baseSliderSettings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '35px',
    slidesToShow: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    lazyLoad: true,
    afterChange: index => {
      this.updateHash(index)
      this.setState({ currentSlide: index })

      const { query } = this.state
      if (query && query.value !== index) {
        this.querySelect.select.clearValue()
      }
    }
  }

  tabletSliderSettings = Object.assign({}, this.baseSliderSettings, {
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: '100px',
    arrows: true
  })

  desktopSliderSettings = Object.assign({}, this.tabletSliderSettings, {
    slidesToShow: 3
  })

  getSliderSettings = () => {
    const windowWidth = window.innerWidth
    if (windowWidth >= 1000) {
      return this.desktopSliderSettings
    } else if (windowWidth >= 768) {
      return this.tabletSliderSettings
    }
    return this.baseSliderSettings
  }

  setSliderSettings = () => {
    const sliderSettings = this.getSliderSettings()
    if (this.state.sliderSettings !== sliderSettings) {
      this.setState({ sliderSettings })
    }
  }

  updateHash = index => {
    const visibleListings = this.state.inCategories(
      this.state.selectedCategories
    )
    const id = index < 1 ? null : kebabCase(visibleListings[index]['Name'])
    setHash(id)
  }

  jumpToSlide = event => {
    const { hash } = event.target
    if (hash) {
      const index = getSlideIndexById(hash)
      if (index > -1) {
        event.preventDefault()
        this.slider.slickGoTo(index)
      }
    }
  }

  buildCategories = ls =>
    ls
      .reduce((categories, listing) => {
        const cats = splitCategories(listing['Category'])
        cats.forEach(cat => {
          if (!categories.includes(cat)) categories.push(cat)
        })
        return categories
      }, [])
      .filter(Boolean)
      .sort()
      .map(cat => ({ value: cat, label: cat }))

  handleCategoryChange = options => {
    this.setState(
      {
        selectedCategories: options.map(option => option.value)
      },
      () => {
        // scroll to top of each scroll container
        // after the card filters are updated
        ;[].forEach.call(
          document.querySelectorAll('.bw-slide__scrollable'),
          elm => {
            elm.scrollTo(0, 0)
          }
        )
      }
    )
  }

  handleQueryChange = listing => {
    this.setState({ query: listing })
    if (listing) {
      const { value: index } = listing
      this.slider.slickGoTo(index)
    }
  }

  // used for improved performance on mobile
  isVisible = (cardIndex, currentIndex) => {
    const padding = 3
    const visibleListings = this.state.inCategories(
      this.state.selectedCategories
    )
    const max = visibleListings.length - 1
    const minVisible = currentIndex - padding
    const maxVisible = currentIndex + padding
    if (minVisible < 0) {
      return cardIndex > max + minVisible || cardIndex < maxVisible
    } else if (maxVisible > max) {
      return cardIndex > minVisible || cardIndex < maxVisible - max
    }
    return cardIndex > minVisible && cardIndex < maxVisible
  }

  render() {
    const { selectedCategories, sliderSettings, currentSlide } = this.state
    const isMobile = sliderSettings.slidesToShow === 1
    const visibleListings = this.state.inCategories(selectedCategories)
    const slidesToShow = Math.min(
      visibleListings.length,
      sliderSettings.slidesToShow
    )
    return (
      <Fragment>
        <div className="filters-wrapper">
          <div className="filter-wrapper">
            <Select
              options={this.buildCategories(this.state.listings)}
              isMulti
              onChange={this.handleCategoryChange}
              placeholder="Filter organization types..."
              className="react-select-container"
            />
          </div>
          <div className="filter-wrapper">
            <Select
              options={visibleListings.map((listing, index) => ({
                value: index,
                label: listing['Name']
              }))}
              isClearable
              ref={this.bindQuerySelectRef}
              onChange={this.handleQueryChange}
              placeholder="Search by name..."
              className="react-select-container"
            />
          </div>
        </div>
        <Slider
          ref={this.bindRef}
          {...sliderSettings}
          slidesToShow={slidesToShow}
        >
          {visibleListings.map((listing, index) => (
            <Slide
              key={listing['Name']}
              imageSrc={getImage(listing['Name'])}
              name={listing['Name']}
              link_url={listing['Link']}
              phone_number={listing['Phone Number']}
              email={listing['Email']}
              title={listing['Description hed']}
              description={listing['Desc']}
              categories={listing['Category']}
              index={index}
              currentSlide={currentSlide}
              isVisible={!isMobile || this.isVisible(index, currentSlide)}
            />
          ))}
        </Slider>
        <div id="arrow-preloader" />
      </Fragment>
    )
  }
}

export default ListingSlider
