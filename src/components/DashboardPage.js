import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
}
from 'react-native';
import { Actions } from 'react-native-router-flux';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECEC',
    },
    home:{
        top:55,
        left:40,
    },
    logo : {
        top:30,
        left:160,
    },
    bottle:{
        top:8,
        left:330,
    },
    ID800_ml : {
        left: 64,
        top: 494,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 26,
        color:'#737373',
    },
    of_2150_ml : {
        left: 72,
        top: 531,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 15,
        color:'#737373',
        },
    add : {
        top:200,
        left:90,
    },
    option : {
        top:250,
        left:90,
    },
    bottleImage:{
        position: 'absolute',
        width: 459,
        height: 988,
        left: -42,
        top: -103,
        overflow: 'visible',
    },
    No_bottle_paired: {
        left: 130,
        top: 648,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'center',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        color:'#737373',
        },
    nav_view : {
        top:750,
        position : 'absolute',
    },
    nav_one : {
        left:50,
        position : 'absolute',
    },
    nav_two : {
        left:135,
        position : 'absolute',
    },
    nav_three : {
        left:225,
        position : 'absolute',
    },
    nav_four : {
        left:315,
        position : 'absolute'
    }
});


class DashboardPage extends Component{
    render(){
        const goToProfile = () => {
            Actions.profile()
        };
        return(
            <View style={styles.container}>
                <Image
                    style={styles.home}
                    source = {require('../../assets/images/home.png')}
                />
                <Image
                    style={styles.logo}
                    source = {require('../../assets/images/logo.png')}
                />
                <Image
                    style={styles.bottle}
                    source = {require('../../assets/images/bottle.png')}
                />
                <Image
                    style={styles.add}
                    source = {require('../../assets/images/add.png')}
                />
                <Image
                    style={styles.option}
                    source = {require('../../assets/images/option.png')}
                />
                <Image
                    style={styles.bottleImage}
                    source = {require('../../assets/images/bottleImage.png')}
                />
                <Text style={styles.ID800_ml}>800 ml</Text>
                <Text style={styles.of_2150_ml}>of 2150 ml</Text>
                <Text style={styles.No_bottle_paired}>No bottle paired</Text>
                <View style={styles.nav_view}>
                <Image
                    style={styles.nav_one}
                    source = {require('../../assets/images/nav_one.png')}
                />
                <Image
                    style={styles.nav_two}
                    source = {require('../../assets/images/nav_two.png')}
                />
                <Image
                    style={styles.nav_three}
                    source = {require('../../assets/images/nav_three.png')}
                />
                <Image onTouchStart={() => goToProfile()}
                    style={styles.nav_four}
                    source = {require('../../assets/images/nav_four.png')}
                />
                </View>
                <StatusBar style="auto" />
            </View>
        )
    }
}

export default DashboardPage;