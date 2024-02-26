import axios from 'axios';
import dayjs from 'dayjs';
import {ArticleModel} from '@/models/models';

interface AnswerModel {
  articles: ArticleModel[];
  status: string;
  totalResults: number;
}

export const getNews = async (
  search: string,
  isWeek?: boolean,
  isPopular?: boolean,
): Promise<AnswerModel> => {
  const apiKey = 'ecb9661dbe0548e59e3268f2ec1b9f1a';
  const date = dayjs()
    .subtract(1, isWeek ? 'week' : 'month')
    .format('YYYY-MM-DD')
    .toString();

  const response = await axios.get(`https://newsapi.org/v2/everything`, {
    params: {
      q: search,
      from: date,
      sortBy: isPopular ? 'popularity' : 'publishedAt',
      apiKey: apiKey,
    },
  });

  return response.data;
};
