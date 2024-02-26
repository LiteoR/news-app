import {Suspense, useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {getNews} from '@/api/news';
import dayjs from 'dayjs';
import {SWRConfig} from 'swr';
import Articles from './components/articles';
import Filter from '@/pages/news/components/filter';
import TabFilter from '@/components/tab-filter';

export interface FilterModel {
  sort: string;
  date: string;
  category: string;
}

const filter = {
  sort: [
    {name: 'Latest', value: 'Latest'},
    {name: 'Popular', value: 'Popular'},
  ],
  date: [
    {name: 'Week', value: 'Week'},
    {name: 'Month', value: 'Month'},
  ],
  category: [
    {name: 'Tesla', value: 'Tesla'},
    {name: 'Apple', value: 'Apple'},
    {name: 'Microsoft', value: 'Microsoft'},
  ],
};

const News = () => {
  const [filterValue, setFilter] = useState<FilterModel>({
    sort: filter.sort[0].value,
    date: filter.date[0].value,
    category: filter.category[0].value,
  });

  const handleFilter = (item: {[key: string]: string}) => {
    setFilter({
      ...filterValue,
      ...item,
    });
  };

  const getArticles = async () => {
    return await getNews(
      filterValue.category,
      filterValue.date === 'Week',
      filterValue.sort === 'Popular',
    );
  };

  return (
    <SafeAreaView>
      <SWRConfig
        value={{
          fetcher: () => getArticles().then(res => res.articles),
          suspense: true,
        }}>
        <Filter
          list={filter}
          handleFilter={handleFilter}
          activeValues={filterValue}
        />
        <Suspense fallback={<Text>loading...</Text>}>
          <Articles filter={filterValue} />
        </Suspense>
      </SWRConfig>
    </SafeAreaView>
  );
};

export default News;
