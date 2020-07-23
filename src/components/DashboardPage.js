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
});


class DashboardPage extends Component{
    render(){
        return(
            <View style={styles.container}>

            </View>
        )
    }
}

export default DashboardPage;