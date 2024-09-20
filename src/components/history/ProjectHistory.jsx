import styled from "styled-components"

const ProjectHistory = () => {
  return (
    <Container>
      <Content>
        <ContentTitle>Project</ContentTitle>
        <strong>oo 공모전 참가</strong>{' '}
        <small>2024. 02. 01 ~ 2024. 03. 01</small>
        <ul>
          <li>sdfasdfasdf</li>
          <li>sdfasdfasdf</li>
          <li>sdfasdfasdf</li>
        </ul>

        <strong>oo 공모전 참가</strong>{' '}
        <small>2024. 02. 01 ~ 2024. 03. 01</small>
        <ul>
          <li>sdfasdfasdf</li>
          <li>sdfasdfasdf</li>
          <li>sdfasdfasdf</li>
        </ul>
        <strong>oo 공모전 참가</strong>{' '}
        <small>2024. 02. 01 ~ 2024. 03. 01</small>
        <ul>
          <li>sdfasdfasdf</li>
          <li>sdfasdfasdf</li>
          <li>sdfasdfasdf</li>
        </ul>
        <strong>oo 공모전 참가</strong>{' '}
        <small>2024. 02. 01 ~ 2024. 03. 01</small>
        <ul>
          <li>sdfasdfasdf</li>
          <li>sdfasdfasdf</li>
          <li>sdfasdfasdf</li>
        </ul>
      </Content>
    </Container>)
}

const Container = styled.div`
position: absolute;
  width: 100%;
  max-width: 500px;
  left: 0;
  bottom: 8%;
`

const Content = styled.div`
  margin-left: 20px;
  border-left: 5px solid black;
  padding: 0 20px;
`

const ContentTitle = styled.h2`
  font-size: 32px;
`
export default ProjectHistory