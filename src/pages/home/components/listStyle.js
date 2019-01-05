import styled from 'styled-components'

export const ListImage = styled.div`
  background: url("${props => props.url}") no-repeat center;
  background-size: cover;
  float: right;
  display: block;
  width: 125px;
  height: 100px;
  overflow: hidden;
  border-radius: 10px;
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  
  .title {
  font-size: 18px;
  line-height: 27px;
  font-weight: bold;
  color: #333;
  }
  
  .desc {
  font-size: 13px;
  line-height: 24px;
  color: #999;
  }
`;