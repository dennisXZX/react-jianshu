import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getDetail } from './detailPageActions'

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

  componentDidMount () {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.detail.title,
    content: state.detail.content
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail (articleId) {
      dispatch(getDetail(articleId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))
