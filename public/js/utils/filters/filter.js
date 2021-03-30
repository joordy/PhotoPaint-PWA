import {
  Button,
  Div,
  Text,
  Details,
  inputSlider,
  Summary,
} from '../components/index.js'
import { filterElements } from './filterValues.js'

export const addFilter = () => {
  // Apply filter to div elem
  const wrapper = document.querySelector('#allOptions')
  const editor = Div('editor')
  wrapper.appendChild(editor)

  filterElements.forEach((item) => {
    const details = Details()
    const summary = Summary(item.filter)
    const div = Div('slider')
    const inputRange = inputSlider(Object.values(item))

    editor.appendChild(details)
    details.appendChild(summary)
    details.appendChild(div)
    div.appendChild(inputRange)
  })

  const firstEl = Array.from(editor.childNodes)
  firstEl[0].setAttribute('open', 'true')

  const elem = Array.from(editor.childNodes)

  elem.forEach((targetDetail) => {
    targetDetail.addEventListener('click', () => {
      // Close all the details that are not targetDetail.
      elem.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute('open')
        }
      })
    })
  })

  let CanVas = document.querySelector('#selectedImg')
  let applyControls = document.querySelectorAll('input[type=range]')
  let applyFilters = document.querySelectorAll('#applyFilter')
  let computedFilters

  // When editing, applying filters to canvas
  applyFilters.forEach((item) => {
    item.addEventListener('change', function () {
      computedFilters = ''
      applyControls.forEach((elem) => {
        computedFilters +=
          elem.getAttribute('data-filter') +
          '(' +
          elem.value +
          elem.getAttribute('data-scale') +
          ') '
      })
      CanVas.style.filter = computedFilters
      return computedFilters
    })
    return computedFilters
  })

  const saveBtn = document.querySelector('#saveBtn')
  saveBtn.addEventListener('click', (event) => {
    popUp('Image saved to profile.')
    let oldItems = JSON.parse(localStorage.getItem('images')) || []
    let newItem = {
      image: document.querySelector('#selectedImg').currentSrc,
      styles: computedFilters,
    }
    oldItems.push(newItem)
    localStorage.setItem('images', JSON.stringify(oldItems))
  })

  const downBtn = document.querySelector('#downBtn')
  downBtn.addEventListener('click', (event) => {
    popUp('Image downloading.')

    download()
  })
}

const popUp = (popupText) => {
  const body = document.querySelector('body')
  body.style.overflow = 'hidden'

  const main = document.querySelector('main')
  const bkgrnd = Div('backblur')
  const div = Div('popup')
  const text = Text(popupText)
  const button = Button('close', 'closePopup')

  main.appendChild(bkgrnd)
  bkgrnd.appendChild(div)
  div.appendChild(text)
  div.appendChild(button)

  const closePopup = document.querySelector('#closePopup')
  closePopup.addEventListener('click', (event) => {
    const body = document.querySelector('body')
    body.style.overflow = 'unset'
    const backblur = document.querySelector('#backblur')
    backblur.remove()
  })
}

const download = async () => {
  const selectedImg = document.querySelector('#selectedImg')
  const a = document.createElement('a')
  a.href = await toDataURL(selectedImg.src)
  a.download = ''
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

const toDataURL = (url) => {
  return fetch(url)
    .then((response) => {
      return response.blob()
    })
    .then((blob) => {
      return URL.createObjectURL(blob)
    })
}
