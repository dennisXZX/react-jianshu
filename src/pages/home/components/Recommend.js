import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from './recommendStyle'

class Recommend extends Component {
  render () {
    const { recommendList } = this.props

    return (
      <RecommendWrapper>
        {
          recommendList.map(recommendItem => {
            return (
              <RecommendItem
                key={recommendItem.id}
                imgUrl={recommendItem.imgUrl}
              />
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recommendList: state.home.recommendList
  }
}

export default connect(mapStateToProps, null)(Recommend)
