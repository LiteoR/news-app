import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigations from '@/navigation/app-navigations';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigations initialRouteName={'news'} />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
