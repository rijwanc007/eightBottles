import React,{Component} from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {Router, Scene} from "react-native-router-flux";
import ProfilePage from "./src/components/ProfilePage";
import DashboardPage from "./src/components/DashboardPage";
import LandingPage from "./src/components/LandingPage";
import LoginPage from "./src/components/LoginPage";
import SignUpPage from "./src/components/SignUpPage";
let customFonts = {
    'Rubik': require('./assets/fonts/Rubik-Regular.ttf'),
};

class App extends Component{
    state = {
        fontsLoaded: false,
    };
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }
    componentDidMount() {
        this._loadFontsAsync();
    }
    render() {
        if (this.state.fontsLoaded) {
            return (
                     <Router>
                        <Scene>
                            <Scene key = "home" component = {HomePage}  title = "HomePage" />
                            <Scene hideTabBar
                                   hideNavBar
                                   key="landing"
                                   title="Landing Page"
                                   component={LandingPage}
                                   Layout={LandingPage}
                                   initial = {true}  />
                            <Scene hideTabBar
                                   hideNavBar
                                   key="login"
                                   title="LoginPage"
                                   component={LoginPage}
                                   Layout={LoginPage}/>
                            <Scene hideTabBar
                                   hideNavBar
                                   key = "signUp"
                                   title = "SignUpPage"
                                   component = {SignUpPage}
                                   Layout = {SignUpPage}/>
                            <Scene hideTabBar
                                   hideNavBar
                                   key = "profile"
                                   title = "ProfilePage"
                                   component = {ProfilePage}
                                   Layout = {ProfilePage}/>
                            <Scene hideTabBar
                                   hideNavBar
                                   key = "dashboard"
                                   title = "DashboardPage"
                                   component = {DashboardPage}
                                   Layout = {DashboardPage}/>
                        </Scene>
                     </Router>
                     );
       } else { return <AppLoading />; }
    }
}

export default App;