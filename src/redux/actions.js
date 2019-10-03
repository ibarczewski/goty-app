export const ADD_BEST_GAMES_GAME = "ADD_BEST_GAMES_GAME";
export const ADD_BEST_REMAKES_GAME = "ADD_BEST_REMAKES_GAME";
export const REORDER_BEST_GAMES_LIST = "REORDER_BEST_GAMES_LIST";
export const REORDER_BEST_REMAKES_LIST = "REORDER_LIST";

export function addBestGamesGame(title) {
  return { type: ADD_BEST_GAMES_GAME, title };
}

export function addBestRemakesList(title) {
  return { type: ADD_BEST_REMAKES_GAME, title };
}

export function reorderBestGamesList(games) {
  return { type: REORDER_BEST_GAMES_LIST, games };
}

export function reorderBestRemakesList(games) {
  return { type: REORDER_BEST_REMAKES_LIST, games };
}
