export const ADD_GAME = "ADD_GAME";
export const REORDER_BEST_GAMES_LIST = "REORDER_BEST_GAMES_LIST";
export const REORDER_BEST_REMAKES_LIST = "REORDER_LIST";

export function addGame(title) {
  return { type: ADD_GAME, title };
}

export function reorderBestGamesList(games) {
  return { type: REORDER_BEST_GAMES_LIST, games };
}

export function reorderBestRemakesList(games) {
  return { type: REORDER_BEST_REMAKES_LIST, games };
}
