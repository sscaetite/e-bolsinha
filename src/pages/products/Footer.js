import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    const DivFooter = styled.div`
        height: 100px;
        background-color: #FFF6F6;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const TextFooter = styled.h5`
    margin: 0;
        font-family: "Maven Pro";
        font-size: 1em;
        font-weight: 300;
        color: #545454;

    `
    return(
        <DivFooter>
            <TextFooter>e-Bolsinha  |  Todos os direitos reservados  |  Copyright &copy;2019</TextFooter>
        </DivFooter>
    )
}

export default Footer