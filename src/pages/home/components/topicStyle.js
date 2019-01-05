import styled from 'styled-components'

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  margin-left: -18px;
  overflow: hidden;
`

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
  margin-left: 18px;
  margin-bottom: 18px;
  cursor: pointer;
  
  &:hover {
    background-color: #f7f4e2;
  }
`

export const TopicImage = styled.div`
  background: url("${props => props.url}") no-repeat center;
  background-size: cover;
  float: left;
  width: 32px;
  margin-right: 10px;
  height: 32px;
`