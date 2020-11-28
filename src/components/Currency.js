import React, { Component } from 'react'
import styled from 'styled-components';


const CurrencySelect = styled.select`
    max-width: 80px;
    padding: 8px 13px 5px 10px;
    background-position: 100% 60%;
    cursor: pointer;
`

class Currency extends Component {
    render () {
        return (
            <CurrencySelect>
                <option>EUR</option>
            </CurrencySelect>
        )
    }
}

export default Currency