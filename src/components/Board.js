import React from 'react'

export default function Board({board}) {
  return (
    <div className='board'>
      {/* maps through array board */}
      {board.map((piece, index) => (
        <div key={index}>
          <p>{JSON.stringify(piece)}</p>
        </div>
      ))}
    </div>
  )
}
