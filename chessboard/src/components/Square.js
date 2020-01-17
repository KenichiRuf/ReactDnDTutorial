import React from 'react'
import styled from 'styled-components'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Constants'

const Square = ({black, children, moveKnight, canMoveKnight, x, y}) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        canDrop: () => canMoveKnight(x, y),
        drop: () => moveKnight(x,y),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        })
    })

    let squareColor = black ? "black" : "white"
    const pieceColor = !black ? "black" : "white"
    
    if(canDrop && isOver) {
        squareColor = "LightGreen"
    } else if(!canDrop && isOver) {
        squareColor = "LightCoral"
    } else if(canDrop && !isOver) {
        squareColor = "LightGoldenRodYellow"
    } else {
        squareColor = black ? "black" : "white"
    }

    const SquareDiv = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${squareColor};
        color: ${pieceColor};
        width: 12.5%;
        height: 12.5%;
    `
    

    return(
        <SquareDiv ref={drop}>
            {children}
        </SquareDiv>
    )
}

export default Square