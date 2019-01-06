import React, { Component } from 'react'
import {
  Content,
  DetailWrapper,
  Header
} from './detailPageStyle'

class Detail extends Component {
  render () {
    return (
      <DetailWrapper>
        <Header>Title</Header>
        <Content>
          <p><b>Lorem ipsum dolor sit amet</b>, consectetur adipisicing elit. Autem consequuntur delectus deleniti doloribus eos incidunt ipsa laboriosam magnam maxime, modi pariatur quae repudiandae sapiente, sequi sint suscipit tempore? Aperiam, minima?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur delectus deleniti doloribus eos incidunt ipsa laboriosam magnam maxime, modi pariatur quae repudiandae sapiente, sequi sint suscipit tempore? Aperiam, minima?</p>
        </Content>
      </DetailWrapper>
    )
  }
}

export default Detail
