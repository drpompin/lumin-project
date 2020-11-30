import React, { Component } from 'react'
import styled from 'styled-components';
// import { Query } from 'react-apollo'
import { useQuery } from '@apollo/react-hooks'

import gql from 'graphql-tag'



const GET_ALL_CURRENCIES = gql`
    {
        currency: __type(name: "Currency") {
            enumValues {
                name
            }
        }
    }
`


const CurrencySelect = styled.select`
    max-width: 80px;
    padding: 8px 13px 5px 10px;
    background-position: 100% 60%;
    cursor: pointer;
`

function Currency() {

    const { data, loading, error } = useQuery(GET_ALL_CURRENCIES)
    if (loading) return <h4>Loading...</h4>
    if (error) console.log(error)

    return (

        <CurrencySelect>
            {data && data.currency.enumValues.map(c => (
                <option key={c} value={c} >
                    {c.name}
                </option>
            ))}
        </CurrencySelect>
    )
}

export default Currency