import React from 'react'
import { ItemTypes } from '../Constants'
import { useDrag } from 'react-dnd'
import styled from 'styled-components'

const Knight = () => {
    const [{isDragging}, drag] = useDrag({
        item: {type: ItemTypes.KNIGHT},
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    const KnightSpan = styled.span`
        font-size: 5rem;
        cursor: 'move';
        opacity: ${isDragging ? 0.5 : 1};
    `

    return (
        <KnightSpan ref={drag}>
            ♘
        </KnightSpan> 
    )
}

export default Knight