import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ListItem,
  ListInfo,
  ListImage
} from './listStyle'

import listImage from '../../../statics/topic-image.jpeg'

class List extends Component {
  render () {
    const { articleList } = this.props

    return (
      <div>
        {articleList.map(article => {
          return (
            <ListItem key={article.id}>
              <ListImage url={listImage} />
              <ListInfo>
                <h3 className='title'>{article.title}</h3>
                <p className='desc'>{article.description}</p>
              </ListInfo>
            </ListItem>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articleList: state.home.articleList
  }
}


export default connect(mapStateToProps, null)(List)
