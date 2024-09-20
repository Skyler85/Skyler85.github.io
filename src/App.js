import './App.css';
import Information from './components/Information.jsx';
import Histories from './components/history/Histories.jsx';
import Tech from './components/tech/Tech.jsx'
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;

  const handleScroll = (event) => {
    if (event.deltaY > 0 && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else if (event.deltaY < 0 && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // eslint-disable-next-line
  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentPage]);

  return (
    <AppContainer>
      <PageContainer currentPage={currentPage}>
        <Section>
          <p> Who are you?</p>
        </Section>
      </PageContainer>
      <PageContainer currentPage={currentPage}>
        <Section>
          <Information />
        </Section>
      </PageContainer>
      <PageContainer currentPage={currentPage}>
        <Section>
          <Histories />
        </Section>
      </PageContainer>
      <PageContainer currentPage={currentPage}>
        <Section>
          <Tech />
        </Section>
      </PageContainer>
      <UpButton onClick={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))}>Up</UpButton>
      <DownButton onClick={() => setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev))}>down</DownButton>
      </AppContainer>
  );
}

const AppContainer = styled.div`
overflow: hidden;
height: 100vh;
background-color: #282c34;
color: white;
  /* font-size: calc(10px + 2vmin); */
`;

const PageContainer = styled.div`
display: flex;
flex-direction: column;
transform: translateY(${(props) => `-${props.currentPage * 100}vh`});
transition: transform 0.5s ease-in-out;
height: 100vh;
`;

const Section = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

const UpButton = styled.button`
position: fixed;
top: 0;
left: 50%;
transform: translateX(-50%);
background-color: white;
color: black;
`
const DownButton = styled.button`
position: fixed;
bottom: 0;
left: 50%;
transform: translateX(-50%);
background-color: white;
color: black;
`
export default App;
