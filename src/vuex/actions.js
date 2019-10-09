import * as PokemonModel from '../models/PokemonModel';
import * as ResultsModel from '../models/ResultsModel';

import mutations from './mutation-types';
import router from '../router';

export const getPokemons = async ({ commit }) => {
  const questions = await PokemonModel.getPokemons();
  commit(mutations.SET_QUESTIONS, questions); 
}

export const checkAnswer = ({commit}) => {
  commit(mutations.UPDATE_SCORE);
  commit(mutations.TOGGLE_ANSWER);
}

export const saveResult = async ({commit}, {name, score}) => {
  await ResultsModel.save(name, score);
  router.push('/endgame');
}

export const clickNext  = async ({commit}) => {
  commit(mutations.UPDATE_INDEX)
  commit(mutations.TOGGLE_ANSWER);
}

export const onChange = ({commit}, value) => {
  commit(mutations.ON_CHANGE, value);
}

export const redirectToHome = async ({commit}) => {
  await commit(mutations.RESET_STORE);
  commit(mutations.REDIRECT_TO_HOME);
}

export const getResults = async ({commit}) => {
  const results = await ResultsModel.getAll();
  commit(mutations.SET_RESULTS, results);
}
