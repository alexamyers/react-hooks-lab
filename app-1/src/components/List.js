import React from 'react'
import Todo from './Todo'

const List = (props) => {
    const { list } = props
    console.log(props)

    const listMapped = list.map((item, index) => {
        return <Todo key={ index } item={ item }/>
    })

    return (
        <div>{ listMapped }</div>
    )
}

export default List