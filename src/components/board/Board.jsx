import React from "react";
import {Square} from "../square/Square";
import "./Board.scss"

export const Board = ({squares, onClick}) => (
    <div className='board'>
        {squares.map(
            (square, i) => <Square key={i} value={square} onClick={() => onClick(i)}/>
        )}
    </div>
)
