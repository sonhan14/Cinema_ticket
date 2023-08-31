
import React, {useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/screens/Login';
import { color } from './src/theme/fonts/colors';
import Navigation from './src/navigatiors/app-navigator';
import { movieCastDetails, nowPlayingMovies, searchMovies} from './src/api/apicalls'

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={color.default_status_bar}
      />
      <Navigation/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;