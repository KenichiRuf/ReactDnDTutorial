import React, {useState} from 'react'
import Square from './Square'
import Knight from './Knight'
import styled from 'styled-components'
import {DndProvider} from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

const Board = props => {

    const [knightPosition, setKnightPosition] = useState([0,0])

    const BoardDiv = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        border: black 1px solid;
        width: 80vh;
        height: 100%;
        margin: 10vh auto;
    `

    const moveKnight = (x, y) => {
        setKnightPosition([x, y])
    }

    const canMoveKnight = (to_x, to_y) => {
        const [x, y] = knightPosition
        const dx = to_x - x
        const dy = to_y - y

        return (
            (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
            (Math.abs(dx) === 1 && Math.abs(dy) === 2)
        )
    }
    
    const renderSquare = (index, [knightX, knightY]) => {
        
        const x = index % 8
        const y = Math.floor(index/8)
        const black = (x+y) % 2 === 1
        const isKnightHere = knightX === x && knightY === y
        const piece = isKnightHere ? <Knight /> : null
        
        return (
            <Square key={index} black={black} moveKnight={moveKnight} canMoveKnight={canMoveKnight} x={x} y={y}>
                {piece}
            </Square>  
        )
    }

    

    const squares = []

    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }

    return (
        <DndProvider backend={Backend}>
            <BoardDiv>
                {squares}
            </BoardDiv>
        </DndProvider>
    )
}

export default Board