import React,{Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    SafeAreaView,
    ScrollView,
}
    from 'react-native';
import Svg, {
    Rect,
}
    from 'react-native-svg';
import { Actions } from 'react-native-router-flux';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECEC',
    },
    top_view : {
        top: 50,
        position : 'absolute',
    },
    shape : {
        top: 8,
        left: 40,
        position: 'absolute',
    },
    Subheading_y : {
        left: 130,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        color:'#737373',
    },
    Subheading_w : {
        left:150,
        top: 0,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 12,
        color:'#BCBCBC',
    },
    Subheading : {
        left: 150,
        top: 30,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 22,
        color:'#737373',
    },
    Gender : {
        left: 63,
        top: 261,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color:'#737373',
    },
    Female : {
        left: 256,
        top: 261,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color:'#BCBCBC',
    },
    shape_r : {
        position : 'absolute',
        top : 269,
        left : 340,
    },
    BG : {
        position: 'absolute',
        overflow: 'visible',
        width: 250,
        height: 1,
        left: 63,
        top: 303,
    },

    Birth_year: {
        left: 63,
        top: 322,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color:'#737373',
    },
    Year : {
        left: 274,
        top: 322,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color:'#BCBCBC',
    },
    BG_ : {
        position: 'absolute',
        overflow: 'visible',
        width: 250,
        height: 1,
        left: 63,
        top: 364,
    },
    shape_r2 : {
        position : 'absolute',
        top : 330,
        left : 340,
    },

    Height: {
        left: 63,
        top: 383,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color:'#737373',
    },
    IDH : {
        left: 284,
        top: 383,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color:'#BCBCBC',
    },
    BG3_ : {
        position: 'absolute',
        overflow: 'visible',
        width: 250,
        height: 1,
        left: 63,
        top: 425,
    },
    shape_r3 : {
        position : 'absolute',
        top : 390,
        left : 340,
    },
    Weight: {
        left: 63,
        top: 444,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color:'#737373',
    },
    IDW : {
        left: 265,
        top: 444,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color:'#BCBCBC',
    },
    shape_r4 : {
        position : 'absolute',
        top : 450,
        left : 340,
    },
    My_activity: {
        left: 63,
        top: 525,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color:'#737373',
    },
    Unit: {
        left: 63,
        top: 673,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color:'#737373',
    },
    IDU : {
        left: 280,
        top: 673,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color:'#BCBCBC',
    },
    shape_r5 : {
        position : 'absolute',
        top : 680,
        left : 340,
    },
    dots : {
        position : 'absolute',
        top : 535,
        left : 300,
    },
    gear : {
        position : 'absolute',
        top : 609,
        left : 62,
    },
    setting: {
        left: 100,
        top: 608,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        color:'#737373',
    },
    BG4_ : {
        position: 'absolute',
        overflow: 'visible',
        width: 250,
        height: 1,
        left: 63,
        top: 654,
    },
    image_text_view : {
        top: 115,
        position : 'absolute',
    },
    p_photo_1486064_1 : {
        position: 'absolute',
        width: 79,
        height: 79,
        left: 33,
        overflow: 'visible',
    },
    Version_134 : {
        left: 138,
        top: 740,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'left',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        color:'#BCBCBC',
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


class ProfilePage extends Component{
    render(){
        const goToProfile = () => {
            Actions.profile()
        };
        const goToDashboard = () => {
            Actions.dashboard()
        };
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.top_view}>
                    <Text style={styles.Subheading_y}>Personal Info</Text>
                    <Image onTouchStart={() => goToDashboard()}
                           style={styles.shape}
                           source = {require('../../assets/images/Shape.png')}/>
                </View>
                <ScrollView  vertical={true}>
                    <View style={{height: 1000}}>
                        <View style={styles.image_text_view}>
                            <Image
                                style={styles.p_photo_1486064_1}
                                source = {require('../../assets/images/client.png')}
                            />
                            <Text style={styles.Subheading_w}>Welcome Back</Text>
                            <Text style={styles.Subheading}>Julie Bell</Text>
                        </View>
                        <Text style={styles.Gender}>Gender</Text>
                        <Text style={styles.Female}>Female</Text>
                        <Image
                            style={styles.shape_r}
                            source = {require('../../assets/images/ShapeR.png')}
                        />
                        <Svg style={styles.BG}>
                            <Rect
                                fill = 'rgba(245,245,245,1)'
                                rx="0" ry="0" x="0" y="0" width="250" height="1">
                            </Rect>
                        </Svg>
                        <Text style={styles.Birth_year}>Birth year</Text>
                        <Text style={styles.Year}>1990</Text>
                        <Image
                            style={styles.shape_r2}
                            source = {require('../../assets/images/ShapeR.png')}
                        />
                        <Svg style={styles.BG_}>
                            <Rect
                                fill = 'rgba(245,245,245,1)'
                                rx="0" ry="0" x="0" y="0" width="250" height="1">
                            </Rect>
                        </Svg>

                        <Text style={styles.Height}>Height</Text>
                        <Text style={styles.IDH}>5'6"</Text>
                        <Image
                            style={styles.shape_r3}
                            source = {require('../../assets/images/ShapeR.png')}
                        />
                        <Svg style={styles.BG3_}>
                            <Rect
                                fill = 'rgba(245,245,245,1)'
                                rx="0" ry="0" x="0" y="0" width="250" height="1">
                            </Rect>
                        </Svg>
                        <Text style={styles.Weight}>Weight</Text>
                        <Text style={styles.IDW}>455 lb</Text>
                        <Image
                            style={styles.shape_r4}
                            source = {require('../../assets/images/ShapeR.png')}
                        />
                        <Text style={styles.My_activity}>My activity</Text>
                        <Image
                            style={styles.dots}
                            source = {require('../../assets/images/dots.png')}
                        />
                        <Image
                            style={styles.gear}
                            source = {require('../../assets/images/gear.png')}
                        />
                        <Text style={styles.setting}>Settings</Text>
                        <Svg style={styles.BG4_}>
                            <Rect
                                fill = 'rgba(245,245,245,1)'
                                rx="0" ry="0" x="0" y="0" width="250" height="1">
                            </Rect>
                        </Svg>
                        <Text style={styles.Unit}>Units</Text>
                        <Text style={styles.IDU}>US</Text>
                        <Image
                            style={styles.shape_r5}
                            source = {require('../../assets/images/ShapeR.png')}
                        />
                        <Text style={styles.Version_134}>Version: 1.3.4</Text>
                    </View>
                </ScrollView>
                <View style={{ position: 'absolute' }}>
                    <View style={{ zIndex: 1 }} ><Text>hello</Text></View>
                    <View style={{ zIndex: 1 }} />
                    <View style={{ zIndex: 0, position: 'absolute' }} />
                </View>
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
            </SafeAreaView>
        )
    }
}

export default ProfilePage;