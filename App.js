import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen"
import ImageScreen from "./src/screens/ImageScreen"
import CounterScreen from "./src/screens/CounterScreen"
import ColorScreen from "./src/screens/ColorScreen"
import SquareScreen from "./src/screens/SquareScreen"
import TextScreen from './src/screens/TextScreen';
import ValidatePassword from './src/screens/ValidatePassword';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  { // route object which defines different routes we can navigate to in our app
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Password: ValidatePassword,
    Box: BoxScreen,
  },
  {
    initialRouteName: "Home", // sets which route to show initially
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
