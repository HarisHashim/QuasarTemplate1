/*
export function someMutation (state) {
}
*/

export const setDifficulty = (state, difficulty) => {
  state.difficulty = difficulty;
}

export const setMoneySupply = (state, moneySupply) => {
  state.moneySupply = moneySupply;
}

export const setHashRate = (state, hashRate) => {
  state.hashRate = hashRate;
}
