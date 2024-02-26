import {styles} from './styles';
import WebView from 'react-native-webview';
import {Button, SafeAreaView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

interface RouteParams {
  url: string;
}

const NewsPage = () => {
  const navigation = useNavigation();
  const url = (useRoute().params as RouteParams).url;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: url}} />
      <Button title={'Back'} onPress={handleBack} />
    </SafeAreaView>
  );
};

export default NewsPage;
