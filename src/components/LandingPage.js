import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View
}
    from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Rect} from "react-native-svg";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECEC',
        alignItems: 'center',
    },
    logo:{
        marginLeft:20,
        marginTop: -100,
    },
    hi_there_lets_get_you_started : {
      left : 82,
      top : 182,
      position : 'absolute',
      overflow : 'visible',
      lineHeight : 31,
      marginTop : -4.5,
      textAlign : 'left',
      fontFamily : 'Rubik',
      fontStyle : 'normal',
      fontWeight: 'normal',
    },
    textDesign : {
        fontSize:22,
        color:'#737373',
    },
    create_button: {
        borderWidth: 1,
        paddingLeft: 42,
        paddingRight: 42,
        paddingTop: 17,
        paddingBottom: 17,
        color:'#737373',
        borderColor: '#737373',
        borderRadius: 5,
        marginTop:350,
    },
    login_button: {
        borderWidth:1,
        paddingLeft:85,
        paddingRight:85,
        paddingTop: 17,
        paddingBottom: 17,
        color:'#737373',
        borderColor: '#737373',
        borderRadius:5,
        textAlign: 'center',
        marginTop:10,
    }
});

class LandingPage extends Component{
    render() {
        const goToAbout = () => {
            Actions.login()
        };
        const goToSignUp = () => {
            Actions.signUp()
        };
        return(
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image
                        style={{width:400,height:400}}
                        source = {require('../../assets/eight_bottle.png')}
                    />
                </View>
                <View style={styles.hi_there_lets_get_you_started}>
                    <Text style={styles.textDesign}>Hi There,</Text>
                    <Text style={styles.textDesign}>Let's get you started</Text>
                </View>
                <TouchableOpacity  onPress = {goToSignUp}>
                    <Text style = {styles.create_button}>
                        Create an account
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress = {goToAbout}>
                    <Text style = {styles.login_button}>
                        Login
                    </Text>
                </TouchableOpacity>
                <StatusBar style="auto" />
            </View>
        );
    }
}

export default LandingPage;

