import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem, TopicImage } from './topicStyle'

import topicImage from '../../../statics/topic-image.jpeg'

class Topic extends Component {
  render () {
    const { topicList } = this.props

    return (
      <TopicWrapper>
        {topicList.map(item => {
          return (
            <TopicItem key={item.id}>
              <TopicImage url={topicImage} />
              {item.title}
            </TopicItem>
          )
        })}

      </TopicWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topicList: state.home.topicList
  }
}

export default connect(mapStateToProps, null)(Topic)
