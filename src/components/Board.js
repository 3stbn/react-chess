import React from 'react'
import BoardSquare from './BoardSquare'


export default function Board({board}) {
  return (
    <div className='board'>
      {/* maps through array board */}
      {/* .flat makes 2d array into 1d */}
      {board.flat().map((piece, index) => (
        <div key={index} className='square'>
          <BoardSquare piece={piece}/>
        </div>
      ))}
    </div>
  )
}
