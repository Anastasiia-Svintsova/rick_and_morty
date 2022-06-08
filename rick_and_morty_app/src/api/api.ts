import { ICharactersResponse } from '../types/Character';

export const BASE_URL = 'https://rickandmortyapi.com/api';

export const request = async (url: string) => {
  const response = await fetch(`${BASE_URL}${url}`);

  return response.json();
};

export const getCharacters = async (
  url:string = `${BASE_URL}/characters`,
): Promise<ICharactersResponse> => {
  const response = await fetch(url);
  return response.json();
};

export const getCharactersOnPage = async (page: number, query: string) => (
  request(`/character/?page=${page}&name=${query}`)
);
