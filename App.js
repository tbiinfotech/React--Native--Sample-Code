import { StackNavigator } from 'react-navigation';
// import Reactotron from './ReactotronConfig';
import Router from './src/Routes';
// Route file indicate the all pages screen
export default class App extends React.Component {
  render() {
    return (
            <Router />
    );
  }
}

