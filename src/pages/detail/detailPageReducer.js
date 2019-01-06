import {

} from './detailPageActions'
import React from 'react'

const defaultState = {
  title: 'Title',
  content: `
    <p><b>Lorem ipsum dolor sit amet</b>, consectetur adipisicing elit. Autem consequuntur delectus deleniti doloribus eos incidunt ipsa laboriosam magnam maxime, modi pariatur quae repudiandae sapiente, sequi sint suscipit tempore? Aperiam, minima?</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur delectus deleniti doloribus eos incidunt ipsa laboriosam magnam maxime, modi pariatur quae repudiandae sapiente, sequi sint suscipit tempore? Aperiam, minima?</p>`
}


export default (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state
  }
}