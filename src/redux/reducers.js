import { ADD_GAME, REORDER_BEST_GAMES_LIST, REORDER_BEST_REMAKES_LIST } from './actions'

const initialState = {
  bestGames: ['Outer Wilds', 'Control', 'The Surge 2'],
  bestRemakes: ['Resident Evil 2', 'The Legend Of Zelda: Link\'s Awakening'],
}

function gotyApp(state = initialState, action) {
    console.log(action, state);
    switch (action.type) {
        case ADD_GAME:
            if ((state.bestGames).includes(action.title)) {
                return { bestGames: [...state.bestGames] }
            } return Object.assign({}, state, {
                bestGames: [...state.bestGames, action.title]
            })
        case REORDER_BEST_GAMES_LIST:
            return { bestGames: action.games, ...state };
        case REORDER_BEST_REMAKES_LIST:
            return { bestRemakes: action.games, ...state };
        default:
            return state;
    }
}

export default gotyApp
