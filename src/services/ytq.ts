import axios from 'axios';
import { getRandomString } from '../utils';

axios.defaults.baseURL = process.env.REACT_APP_YTQUEUE_SERVER;

export const search = async (query: string) => {
  const { data } = await axios.get(`/api/search/${query}`);

  const searchResult = data.map((x: any) => {
    return { ...x, id: getRandomString(), videoId: x.id.videoId, kindId: x.id.kind };
  });

  return searchResult;
};
