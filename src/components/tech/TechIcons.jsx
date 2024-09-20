import React from 'react'
import { IconCSS, IconFramer, IconGraphQL, IconHTML, IconJS, IconMongoDB, IconMysql, IconNext, IconNode, IconReact, IconReactRouter, IconTailwind, IconTS } from './../../essets/iconIndex.js'
import styled from 'styled-components'

const TechIcons = () => {
  return (
    <>
      <h5>TechIcons</h5>
      <Container>
        <IconContent>
          <IconHTML style={{ height: '40px' }} />
        </IconContent>
        <IconContent>
          <IconCSS style={{ height: '40px' }} />
        </IconContent>
        <IconContent>
          <IconJS style={{ height: '40px' }} />
        </IconContent>
        <IconContent>
          <IconTS style={{ height: '40px' }} />
        </IconContent>
        <IconContent>
          <IconReact style={{ height: '40px' }} />
        </IconContent>
        <IconContent>
          <IconReactRouter style={{ height: '40px' }} />
        </IconContent>
        <IconContent>
          <IconNext style={{ height: '40px' }} />
        </IconContent>
        <IconContent>
          <IconTailwind style={{ height: '40px' }} />
        </IconContent>
        <IconContent>
          <IconNode style={{ height: '40px' }} />
        </IconContent>
        <IconContent>
          <IconFramer style={{ height: '40px' }} />
        </IconContent>
        <IconContent>
          <IconGraphQL style={{ height: '40px' }} />
        </IconContent>
        <IconContent>
          <IconMongoDB style={{ height: '40px' }} />
        </IconContent>
        <IconContent>
          <IconMysql style={{ height: '40px' }} />
        </IconContent>
      </Container>
    </>
  )
}


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  gap: 10px
`
const IconContent = styled.button`
  width: 60px;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background-color: white;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default TechIcons