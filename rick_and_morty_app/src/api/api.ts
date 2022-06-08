import { ICharactersResponse } from '../types/Character';

export const BASE_URL = 'https://rickandmortyapi.com/api';

export const request = async (url: string) => {
  const response = await fetch(`${BASE_URL}${url}`);

  return response.json();
};

export const getCharacters = async (): Promise<ICharactersResponse> => request('/character');

export const getCharactersOnPage = async (page: number) => request(`/character/?page=${page}`);
