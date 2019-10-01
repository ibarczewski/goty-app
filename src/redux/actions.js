export const ADD_GAME = 'ADD_GAME'
export const REORDER_LIST = 'REORDER_LIST'

export function addGame(title) {
    return { type: ADD_GAME, title }
  }

  export function reorderList(games) {
    return { type: REORDER_LIST, games }
  }

