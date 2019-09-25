export const ADD_GAME = 'ADD_GAME'

export function addGame(title) {
    return { type: ADD_GAME, title }
  }