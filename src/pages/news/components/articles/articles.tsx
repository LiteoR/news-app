import {FlatList} from 'react-native';
import {styles} from './styles';
import useSWR from 'swr';
import {ArticleModel} from '@/models/models';
import {FilterModel} from '../../news';
import NewsCard from '@/components/news-card';

interface Props {
  filter: FilterModel;
}

const Articles = ({filter}: Props) => {
  const uniqueKeySSWR = `${filter.category}/${filter.sort}/${filter.date}`;
  const {data} = useSWR(uniqueKeySSWR);

  return (
    <FlatList
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({item}: {item: ArticleModel}) => (
        <NewsCard key={item.url} style={styles.gap} article={item} />
      )}
    />
  );
};

export default Articles;
