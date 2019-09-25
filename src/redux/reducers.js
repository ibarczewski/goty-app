import { ADD_GAME } from './actions'

const initialState = {
  bestGames: ['Outer Wilds', 'Control', 'The Surge 2']
}

function gotyApp(state = initialState, action) {
    switch (action.type) {
        case ADD_GAME:
            return Object.assign({}, state, {
                bestGames: [...state.bestGames, action.title]
            })
        default:
            return state
    }
}

export default gotyApp