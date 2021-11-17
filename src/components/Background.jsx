import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    width: 100w;
    height: 100vh;
`
const Image = styled.img`
width: 100w;
height: 100vh;
`


function Background({src}) {
    return (
        <Container>
            <Image src={src} alt="background clouds" />
        </Container>
    )
}

export default Background
