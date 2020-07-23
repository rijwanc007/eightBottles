import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput, TouchableOpacity
}
    from 'react-native';
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';
import {Actions} from "react-native-router-flux";
import { Input } from 'react-native-elements';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECEC',
    },

    hello : {
        left: 46,
        top: 105,
        position : 'absolute',
        textAlign: 'left',
        fontFamily:'Rubik',
        fontStyle : 'normal',
        fontWeight: 'normal',
        fontSize : 46,
        color:'#737373',
    },
    subHeading : {
        left : 46,
        top : 169,
        position : 'absolute',
        textAlign: 'left',
        fontFamily:'Rubik',
        fontStyle : 'normal',
        fontWeight: 'normal',
        fontSize : 19,
        color:'#737373',
    },
    Group_23 : {
        position: 'absolute',
        width: 16,
        height: 17.485,
        left: 55.5,
        top: 270.444,
        overflow: 'visible',
        },
    Oval : {
        position: 'absolute',
        overflow: 'visible',
        width: 8,
        height: 8.889,
        left: 4,
        top: 0,
    },
    Path : {
        position: 'absolute',
        overflow: 'visible',
        width: 16,
        height: 6.818,
        left: 0,
        top: 10.667,

    },
    Line_ : {
        position: 'absolute',
        overflow: 'visible',
        width: 225,
        height: 2,
        left: 94.5,
        top: 256,
    },
    Password_FieldEye1 : {
        position: 'absolute',
        width: 16,
        height: 8,
        left: 299.5,
        top: 448,
        overflow: 'visible'
    },
    eye_closed1 : {
        position: 'absolute',
        width: 16,
        height: 5.333,
        left: 0,
        top: 0,
        overflow: 'visible',
    },
    shape1 : {
        overflow : 'visible',
        position : 'absolute',
        width : 18,
        height : 7.333,
        left : 0,
        top : 0,
        // transform : matrix(1,0,0,1,0,0)
    },

    Lock_filled1 : {
        position: 'absolute',
        width: 16,
        height: 17.882,
        left: 56.5,
        top: 445,
        overflow: 'visible',
    },
    Shape1_ : {
        overflow: 'visible',
        position: 'absolute',
        width: 16,
        height: 17.882,
        left: 0,
        top: 0,
        // transform: matrix(1,0,0,1,0,0);
    },
    P1Line : {
        position: 'absolute',
        overflow: 'visible',
        width: 225,
        height: 2,
        left: 94.5,
        top: 430,
    },
    Password_FieldEye2 : {
        position: 'absolute',
        width: 16,
        height: 8,
        left: 299.5,
        top: 565,
        overflow: 'visible'
    },
    eye_closed2 : {
        position: 'absolute',
        width: 16,
        height: 5.333,
        left: 0,
        top: 0,
        overflow: 'visible',
    },
    shape2 : {
        overflow : 'visible',
        position : 'absolute',
        width : 18,
        height : 7.333,
        left : 0,
        top : 0,
        // transform : matrix(1,0,0,1,0,0)
    },

    Lock_filled2 : {
        position: 'absolute',
        width: 16,
        height: 17.882,
        left: 56.5,
        top: 560,
        overflow: 'visible',
    },
    Shape2_ : {
        overflow: 'visible',
        position: 'absolute',
        width: 16,
        height: 17.882,
        left: 0,
        top: 0,
        // transform: matrix(1,0,0,1,0,0);
    },
    P2Line : {
        position: 'absolute',
        overflow: 'visible',
        width: 225,
        height: 2,
        left: 94.5,
        top: 546,
    },
    Group_29 : {
        position: 'absolute',
        width: 94.85,
        height: 19,
        left: 96,
        top: 560,
        overflow: 'visible'
    },
    Rectangle_1531 : {
        position: 'absolute',
        overflow: 'visible',
        width: 165,
        height: 55,
        left: 46,
        top: 662,
    },
    Group_30 : {
        position: 'absolute',
        width: 97.85,
        height: 19,
        left: 90,
        top: 680,
        overflow: 'visible',
    },
    Sign_Up : {
        left: 0,
        top: 0,
        position: 'absolute',
        overflow: 'visible',
        textAlign: 'center',
        fontFamily: 'Rubik',
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    sign_up_text : {
        fontSize: 14,
        color:'#737373',
    },
    icon_arrow_small_bg : {
        position: 'absolute',
        width: 9.85,
        height: 8.314,
        left: 88,
        top: 7,
        overflow: 'visible',
    },
    path_bh : {
        overflow: 'visible',
        position: 'absolute',
        width: 5.364,
        height: 9.729,
        left: 5.693,
        top: 0,
    },
    line_bi : {
        overflow: 'visible',
        position: 'absolute',
        width: 10.325,
        height: 1,
        left: 0,
        top: 4.155,
    },
});

class SignUpPage extends Component{
    render(){
        return(
            <View style={styles.container}>
                  <Text style={styles.hello}>Hello</Text>
                  <Text style={styles.subHeading}>Sign in to continue</Text>

                <View style={styles.Group_23}>
                    <Svg style={styles.Oval}>
                        <Ellipse
                            fill = 'rgba(255,147,59,1)'
                            rx="4" ry="4.44444465637207" cx="4" cy="4.44444465637207">
                        </Ellipse>
                    </Svg>
                    <Svg style={styles.Path} viewBox="0 0 16 6.819">
                        <Path
                            fill = 'rgba(255,147,59,1)'
                            d = "M 16 4.888888835906982 C 16 7.588977813720703 11.92737770080566 6.666666507720947 8 6.666666507720947 C 4.072639942169189 6.666666507720947 0 7.588977813720703 0 4.888888835906982 C 0 2.188800096511841 4.072639942169189 0 8 0 C 11.92737770080566 0 16 2.188800096511841 16 4.888888835906982 Z">
                        </Path>
                    </Svg>
                </View>
                <View style={styles.Line_}>
                    <Input
                        placeholder='Full Name'
                    />
                </View>

                <View style={styles.Password_FieldEye1}>
                    <View style={styles.eye_closed1}>
                        <Svg style={styles.shape1} viewBox="0 0 16 5.333">
                            <Path fill = 'transparent'
                                  stroke = '#737373'
                                  strokeWidth = '2'
                                  strokeLinejoin = 'round'
                                  strokeLinecap = 'round'
                                  strokeMiterlimit = '10'
                                  shapeRendering = 'auto'
                                  d="M 8.000095367431641 5.333185195922852 C 7.255225658416748 5.333185195922852 6.50760555267334 5.213954925537109 5.777995586395264 4.978795051574707 L 10.22219562530518 4.978805065155029 C 9.49051570892334 5.214615345001221 8.742795944213867 5.333185195922852 8.000095367431641 5.333185195922852 Z M 5.770445346832275 4.976365089416504 C 4.471915721893311 4.556984901428223 3.239625453948975 3.779895067214966 2.107805490493774 2.666695117950439 L 5.771285533905029 4.974565029144287 L 5.770445346832275 4.976365089416504 Z M 10.22977542877197 4.976355075836182 L 10.22893524169922 4.974555015563965 L 13.89239597320557 2.666695117950439 C 12.75957584381104 3.780875205993652 11.52688598632813 4.557435035705566 10.22977542877197 4.976355075836182 Z M 2.096445560455322 2.655515193939209 C 1.341195583343506 1.910985112190247 0.6358555555343628 1.017535090446472 -4.472656200960046e-06 5.128555130795576e-06 L 2.097925424575806 2.654185056686401 L 2.096445560455322 2.655515193939209 Z M 13.90381526947021 2.655465126037598 L 13.90233516693115 2.654135227203369 L 16.00020599365234 5.128555130795576e-06 C 15.36285591125488 1.019935131072998 14.65698528289795 1.912975072860718 13.90381526947021 2.655465126037598 Z">
                            </Path>
                        </Svg>
                    </View>
                </View>
                <View style={styles.Lock_filled1}>
                    <Svg style={styles.Shape1_}>
                        <Path
                            fill = 'rgba(255,147,59,1)'
                            d="M 11.95830059051514 17.88210105895996 L 4.041900157928467 17.88210105895996 C 2.62893009185791 17.88210105895996 1.919700145721436 17.88210105895996 1.379700183868408 17.60400009155273 C 0.9008601307868958 17.35778999328613 0.5190001130104065 16.97158050537109 0.2754001319408417 16.48710060119629 C 1.358032193365943e-07 15.94080066680908 1.358032193365943e-07 15.22375011444092 1.358032193365943e-07 13.79520034790039 L 1.358032193365943e-07 10.89990043640137 C 1.358032193365943e-07 9.47075080871582 1.358032193365943e-07 8.753400802612305 0.2754001319408417 8.207100868225098 C 0.5192201137542725 7.723100662231445 0.9010801315307617 7.337190628051758 1.379700183868408 7.091100692749023 C 1.818600177764893 6.864570617675781 2.370770215988159 6.821220397949219 3.36870002746582 6.813900470733643 L 3.36870002746582 4.683600425720215 C 3.36870002746582 2.101050615310669 5.446340084075928 5.29479962096957e-07 8.000100135803223 5.29479962096957e-07 C 10.55385971069336 5.29479962096957e-07 12.63150024414063 2.101050615310669 12.63150024414063 4.683600425720215 L 12.63150024414063 6.813900470733643 C 13.62973976135254 6.821220397949219 14.1823902130127 6.864980697631836 14.6205005645752 7.091100692749023 C 15.099440574646 7.337820529937744 15.48130035400391 7.723730564117432 15.72480010986328 8.207100868225098 C 16.00020027160645 8.753400802612305 16.00020027160645 9.47075080871582 16.00020027160645 10.89990043640137 L 16.00020027160645 13.79520034790039 C 16.00020027160645 15.22375011444092 16.00020027160645 15.94080066680908 15.72480010986328 16.48710060119629 C 15.48153018951416 16.97093963623047 15.09965991973877 17.3571605682373 14.6205005645752 17.60400009155273 C 14.08050060272217 17.88210105895996 13.37127017974854 17.88210105895996 11.95830059051514 17.88210105895996 Z M 8.000100135803223 9.792900085449219 C 7.071589946746826 9.792900085449219 6.316200256347656 10.55677032470703 6.316200256347656 11.49570083618164 C 6.316200256347656 12.1019401550293 6.638649940490723 12.66717052459717 7.157700061798096 12.97080039978027 L 7.157700061798096 14.47650051116943 C 7.157700061798096 14.94596099853516 7.535600185394287 15.32790088653564 8.000100135803223 15.32790088653564 C 8.464600563049316 15.32790088653564 8.842499732971191 14.94596099853516 8.842499732971191 14.47650051116943 L 8.842499732971191 12.97080039978027 C 9.361750602722168 12.66706085205078 9.684000015258789 12.10216045379639 9.684000015258789 11.49570083618164 C 9.684000015258789 10.55677032470703 8.928609848022461 9.792900085449219 8.000100135803223 9.792900085449219 Z M 8.000100135803223 1.702800512313843 C 6.374840259552002 1.702800512313843 5.052599906921387 3.039980411529541 5.052599906921387 4.683600425720215 L 5.052599906921387 6.812100410461426 L 10.94760036468506 6.812100410461426 L 10.94760036468506 4.683600425720215 C 10.94760036468506 3.039980411529541 9.625360488891602 1.702800512313843 8.000100135803223 1.702800512313843 Z">
                        </Path>
                    </Svg>
                </View>

                <View style={styles.P1Line}>
                    <Input
                        type= "password"
                        placeholder='Create Password'
                    />
                </View>

                <View style={styles.Password_FieldEye2}>
                    <View style={styles.eye_closed2}>
                        <Svg style={styles.shape2} viewBox="0 0 16 5.333">
                            <Path fill = 'transparent'
                                  stroke = '#737373'
                                  strokeWidth = '2'
                                  strokeLinejoin = 'round'
                                  strokeLinecap = 'round'
                                  strokeMiterlimit = '10'
                                  shapeRendering = 'auto'
                                  d="M 8.000095367431641 5.333185195922852 C 7.255225658416748 5.333185195922852 6.50760555267334 5.213954925537109 5.777995586395264 4.978795051574707 L 10.22219562530518 4.978805065155029 C 9.49051570892334 5.214615345001221 8.742795944213867 5.333185195922852 8.000095367431641 5.333185195922852 Z M 5.770445346832275 4.976365089416504 C 4.471915721893311 4.556984901428223 3.239625453948975 3.779895067214966 2.107805490493774 2.666695117950439 L 5.771285533905029 4.974565029144287 L 5.770445346832275 4.976365089416504 Z M 10.22977542877197 4.976355075836182 L 10.22893524169922 4.974555015563965 L 13.89239597320557 2.666695117950439 C 12.75957584381104 3.780875205993652 11.52688598632813 4.557435035705566 10.22977542877197 4.976355075836182 Z M 2.096445560455322 2.655515193939209 C 1.341195583343506 1.910985112190247 0.6358555555343628 1.017535090446472 -4.472656200960046e-06 5.128555130795576e-06 L 2.097925424575806 2.654185056686401 L 2.096445560455322 2.655515193939209 Z M 13.90381526947021 2.655465126037598 L 13.90233516693115 2.654135227203369 L 16.00020599365234 5.128555130795576e-06 C 15.36285591125488 1.019935131072998 14.65698528289795 1.912975072860718 13.90381526947021 2.655465126037598 Z">
                            </Path>
                        </Svg>
                    </View>
                </View>
                <View style={styles.Lock_filled2}>
                    <Svg style={styles.Shape2_}>
                        <Path
                            fill = 'rgba(255,147,59,1)'
                            d="M 11.95830059051514 17.88210105895996 L 4.041900157928467 17.88210105895996 C 2.62893009185791 17.88210105895996 1.919700145721436 17.88210105895996 1.379700183868408 17.60400009155273 C 0.9008601307868958 17.35778999328613 0.5190001130104065 16.97158050537109 0.2754001319408417 16.48710060119629 C 1.358032193365943e-07 15.94080066680908 1.358032193365943e-07 15.22375011444092 1.358032193365943e-07 13.79520034790039 L 1.358032193365943e-07 10.89990043640137 C 1.358032193365943e-07 9.47075080871582 1.358032193365943e-07 8.753400802612305 0.2754001319408417 8.207100868225098 C 0.5192201137542725 7.723100662231445 0.9010801315307617 7.337190628051758 1.379700183868408 7.091100692749023 C 1.818600177764893 6.864570617675781 2.370770215988159 6.821220397949219 3.36870002746582 6.813900470733643 L 3.36870002746582 4.683600425720215 C 3.36870002746582 2.101050615310669 5.446340084075928 5.29479962096957e-07 8.000100135803223 5.29479962096957e-07 C 10.55385971069336 5.29479962096957e-07 12.63150024414063 2.101050615310669 12.63150024414063 4.683600425720215 L 12.63150024414063 6.813900470733643 C 13.62973976135254 6.821220397949219 14.1823902130127 6.864980697631836 14.6205005645752 7.091100692749023 C 15.099440574646 7.337820529937744 15.48130035400391 7.723730564117432 15.72480010986328 8.207100868225098 C 16.00020027160645 8.753400802612305 16.00020027160645 9.47075080871582 16.00020027160645 10.89990043640137 L 16.00020027160645 13.79520034790039 C 16.00020027160645 15.22375011444092 16.00020027160645 15.94080066680908 15.72480010986328 16.48710060119629 C 15.48153018951416 16.97093963623047 15.09965991973877 17.3571605682373 14.6205005645752 17.60400009155273 C 14.08050060272217 17.88210105895996 13.37127017974854 17.88210105895996 11.95830059051514 17.88210105895996 Z M 8.000100135803223 9.792900085449219 C 7.071589946746826 9.792900085449219 6.316200256347656 10.55677032470703 6.316200256347656 11.49570083618164 C 6.316200256347656 12.1019401550293 6.638649940490723 12.66717052459717 7.157700061798096 12.97080039978027 L 7.157700061798096 14.47650051116943 C 7.157700061798096 14.94596099853516 7.535600185394287 15.32790088653564 8.000100135803223 15.32790088653564 C 8.464600563049316 15.32790088653564 8.842499732971191 14.94596099853516 8.842499732971191 14.47650051116943 L 8.842499732971191 12.97080039978027 C 9.361750602722168 12.66706085205078 9.684000015258789 12.10216045379639 9.684000015258789 11.49570083618164 C 9.684000015258789 10.55677032470703 8.928609848022461 9.792900085449219 8.000100135803223 9.792900085449219 Z M 8.000100135803223 1.702800512313843 C 6.374840259552002 1.702800512313843 5.052599906921387 3.039980411529541 5.052599906921387 4.683600425720215 L 5.052599906921387 6.812100410461426 L 10.94760036468506 6.812100410461426 L 10.94760036468506 4.683600425720215 C 10.94760036468506 3.039980411529541 9.625360488891602 1.702800512313843 8.000100135803223 1.702800512313843 Z">
                        </Path>
                    </Svg>
                </View>

                <View style={styles.P2Line}>
                    <Input
                        type= "password"
                        placeholder='Repeat Password'
                    />
                </View>
                <Svg style={styles.Rectangle_1531}>
                    <Rect
                        fill = 'transparent'
                        stroke = 'rgba(115,115,115,1)'
                        strokeWidth = '1'
                        strokeLinejoin = 'miter'
                        strokeLinecap = 'butt'
                        strokeMiterlimit = '4'
                        shapeRendering = 'auto'
                        rx="5" ry="5" x="0" y="0" width="165" height="55">
                    </Rect>
                </Svg>
                <View style={styles.Group_30}>
                    <View style={styles.Sign_Up}><Text style={styles.sign_up_text}>Sing Up</Text></View>
                    <View style={styles.icon_arrow_small_bg}>
                        <Svg style={styles.path_bh} viewBox="1281.487 1163.709 4.157 8.314">
                            <Path
                                fill = 'transparent'
                                stroke = 'rgba(115,115,115,1)'
                                strokeWidth = '1'
                                strokeLinejoin = 'round'
                                strokeLinecap = 'round'
                                strokeMiterlimit = '4'
                                shapeRendering = 'auto'
                                d="M 1281.487426757813 1163.709350585938 L 1285.644409179688 1167.866577148438 L 1281.487426757813 1172.023559570313">
                            </Path>
                        </Svg>
                        <Svg style={styles.line_bi} viewBox="0 0 9.326 1">
                            <Path
                                fill = 'transparent'
                                stroke = 'rgba(115,115,115,1)'
                                strokeWidth = '1'
                                strokeLinejoin = 'miter'
                                strokeLinecap = 'round'
                                strokeMiterlimit = '4'
                                shapeRendering = 'auto'
                                d="M 9.325575828552246 0 L 0 0">
                            </Path>
                        </Svg>
                    </View>
                </View>
            </View>
        )
    }
}

export default SignUpPage;