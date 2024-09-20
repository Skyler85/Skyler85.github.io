import styled from "styled-components"

const Information = () => {
    return (
        <Container>
            <Content>

            <Name>황두나</Name>
            <Description>의도가 명확한 서비스를 만들고자 합니다.</Description>
            <Description>성장하는 서비스를 만들고자 합니다.</Description>
            <Description>생각을 눈에 보이게 정리하는 것을 좋아합니다.</Description>
            <ButtonBox>
                <Button>GIT HUB</Button>
                <Button>BLOG</Button>
                <Button>YOUTUBE</Button>
            </ButtonBox>
            </Content>
        </Container>
    )
}
const Container = styled.div`
display: flex;
width: 100%;
min-height: 600px;
background-color: white;
color: black;
`
const Content = styled.div`
position: relative;

    width: 100%;
    max-width: 800px;
    margin: auto;
    
`
const Name = styled.p`
    font-size: 0.75em;
`;
const Description = styled.p`
    font-size: 0.5em;
`

const ButtonBox = styled.div`
position: absolute;
display: flex;
flex-direction: column;
gap: 10px;
top: 50%;
right: 0;
transform: translateY(-50%);
`
const Button = styled.button`
    background-color: gray;
    width: 80px;
    height: 30px;
    border: 0px;
    border-radius: 15px;
`
export default Information
