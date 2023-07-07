const searchFormEl = document.querySelector('.search')

searchFormEl.search.addEventListener("input", () => {
 const searchValue = searchFormEl.search.value.toLowerCase()
 const cardesItem = document.querySelectorAll('.cards__item')
 const cardsTitles = document.querySelectorAll('.cards__title')
 cardsTitles.forEach((title,i) => {
  if(title.textContent.toLocaleLowerCase().includes(searchValue)){
    cardesItem[i].style.display = 'block'
  } else{
    cardesItem[i].style.display = 'none'
  }

 })
})

// filtir

const searchSelect = document.querySelectorAll('.search__select-list li')
const searchSelectSpan = document.querySelector('.search__select span')

import { createCountries } from './updateUi'
import request from './request' 

searchSelect.forEach((li) => {
  li.addEventListener('click', () => {
    searchSelectSpan.textContent = li.textContent
    let filterAPI

    if(li.textContent == 'All') {
      filterAPI = 'https://restcountries.com/v3.1/all'
    }else{
      filterAPI = `https://restcountries.com/v3.1/region/${li.textContent}`
    }


    request( filterAPI).then((data) => {
      createCountries  (data)
    }).catch((err) => {
      alert(err.message)
    })
  })
})