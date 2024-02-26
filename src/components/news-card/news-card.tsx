import {Button, Image, Text, View} from 'react-native';
import {styles} from './styles';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {StackActions, useNavigation} from '@react-navigation/native';
import {ArticleModel} from '@/models/models';

dayjs.extend(relativeTime);

interface Props {
  article: ArticleModel;
  style?: any;
}

const NewsCard = ({article, style}: Props) => {
  const navigation = useNavigation();
  const {urlToImage, description, url, publishedAt} = article;

  const handleButton = () => {
    const pushAction = StackActions.push('newsPage', {url: url});
    navigation.dispatch(pushAction);
  };

  return (
    <View style={[styles.container, style]}>
      <Image style={styles.img} source={{uri: urlToImage}} />
      <View style={styles.content}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.date}>{dayjs(publishedAt).fromNow()}</Text>
      </View>
      <Button onPress={handleButton} title={'Read'} color="#2196F3" />
    </View>
  );
};

export default NewsCard;
