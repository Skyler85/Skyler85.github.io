import styled from "styled-components"
import TechHistories from "./TechHistories"
import TechIcons from "./TechIcons"

const Tech = () => {
  return (
    <Container>
    <TechIcons />
    <TechHistories />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Tech