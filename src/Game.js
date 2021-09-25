import * as Chess from 'chess.js'
import { BehaviorSubject } from 'rxjs'

// initialize new chess game
const chess = new Chess()
// BehaviorSubject is an 'observable' with
// attribute board
export const gameSubject = new BehaviorSubject({
  // chess.board() makes arry representation of board
  // from chess.js
  board: chess.board()
})
