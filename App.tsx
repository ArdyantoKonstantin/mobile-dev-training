import { NavigationContainer } from '@react-navigation/native';
import { RootNavigationStack } from './components/navigations/Root/RootNavigationStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigationStack />
      </NavigationContainer>
    </SafeAreaProvider>

  );
}

