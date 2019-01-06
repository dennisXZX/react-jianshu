import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Content,
  DetailWrapper,
  Header
} from './detailPageStyle'

class Detail extends Component {
  render () {
    const { title, content } = this.props

    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.detail.title,
    content: state.detail.content
  }
}


export default connect(mapStateToProps, null)(Detail)
