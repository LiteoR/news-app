import {createNativeStackNavigator} from '@react-navigation/native-stack';
import News from '@/pages/news';
import NewsPage from '@/pages/news-page';

interface Props {
  initialRouteName: string;
}

const AppNavigations = ({initialRouteName}: Props) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="news" component={News} />
      <Stack.Screen name="newsPage" component={NewsPage} />
    </Stack.Navigator>
  );
};

export default AppNavigations;
