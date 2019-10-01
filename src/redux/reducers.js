import { ADD_GAME, REORDER_LIST } from './actions'

const initialState = {
  bestGames: ['Outer Wilds', 'Control', 'The Surge 2']
}

function gotyApp(state = initialState, action) {
    switch (action.type) {
        case ADD_GAME:
            if ((state.bestGames).includes(action.title)) {
                return { bestGames: [...state.bestGames] }
            } return Object.assign({}, state, {
                bestGames: [...state.bestGames, action.title]
            })
        case REORDER_LIST:
            console.log('hi', action)
            return {bestGames: action.games }
        default:
            return state
    }
}

export default gotyApp