import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Home';
import DetailsScreen from './Detail';
import MainScreen from './MainPage';
import Drawer from './Drawer';
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Main: MainScreen,
    Drawer,
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  },
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;
