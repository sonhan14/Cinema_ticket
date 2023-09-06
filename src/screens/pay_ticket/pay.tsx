import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { color } from '../../theme/fonts/colors';
import { FONTFAMILY } from '../../theme/fonts/fontFamily';
import { SPACING } from '../../theme/fonts/spacing';
import { BORDERRADIUS } from '../../theme/fonts/borderRadius';

const layout = Dimensions.get('window');

export const MovieHeader = ({navigation} : any) => {
    return (
        <View style={styles.containerHeader}>
            {/* title header */}
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.btnIcon} onPress={() => { navigation.goBack() }}>
                    <Ionicons name={'chevron-back-outline'} color="white" size={25} />
                </TouchableOpacity>
                <View style={styles.titleMiddle}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: color.white }}>Pay for ticket</Text>
                </View>
                <TouchableOpacity style={styles.btnIcon} >
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const TicketInfo = () => {
    return (
        <View style={{
            backgroundColor: color.default_status_bar,
            flex: 0.8,
        }}>
            {/* Movie Info */}
            <View style={{
                backgroundColor: color.default_status_bar,
                flex: 2,
                marginLeft: 20,
            }}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: color.white, paddingBottom: 20, }}>The Batman</Text>
                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: FONTFAMILY.poppins_thin, color: color.text_session }}>Cinema</Text>
                    <View style={{
                        flexDirection: 'column',
                        paddingLeft: 50,
                    }}>
                        <Text style={{ fontSize: 20, fontFamily: FONTFAMILY.poppins_extralight, color: color.white, }}>Eurasia Cinema7</Text>
                        <Text style={{ fontSize: 18, fontFamily: FONTFAMILY.poppins_thin, color: color.text_session }}>ул. Петрова, д.24, ТЦ "Евразия"</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: FONTFAMILY.poppins_thin, color: color.text_session, }}>Date</Text>
                    <Text style={{ fontSize: 20, fontFamily: FONTFAMILY.poppins_extralight, color: color.white, paddingLeft: 70 }}>6 April 2022, 14:40</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: FONTFAMILY.poppins_thin, color: color.text_session }}>Hall</Text>
                    <Text style={{ fontSize: 20, fontFamily: FONTFAMILY.poppins_extralight, color: color.white, paddingLeft: 75 }}>6th</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: FONTFAMILY.poppins_thin, color: color.text_session }}>Seats</Text>
                    <Text style={{ fontSize: 20, fontFamily: FONTFAMILY.poppins_extralight, color: color.white, paddingLeft: 60 }}>7 row (7, 8)</Text>
                </View>
                <View style={styles.line}></View>
                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: FONTFAMILY.poppins_thin, color: color.text_session, }}>1 x Adult</Text>
                    <Text style={{ fontSize: 20, fontFamily: FONTFAMILY.poppins_extralight, color: color.white, paddingLeft: 35 }}>6 April 2022, 14:40</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: FONTFAMILY.poppins_thin, color: color.text_session }}>1 x Child</Text>
                    <Text style={{ fontSize: 20, fontFamily: FONTFAMILY.poppins_extralight, color: color.white, paddingLeft: 35 }}>2200 ₸</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: FONTFAMILY.poppins_thin, color: color.text_session }}>1000 ₸</Text>
                    <Text style={{ fontSize: 20, fontFamily: FONTFAMILY.poppins_extralight, color: color.white, paddingLeft: 45 }}>3200 ₸</Text>
                </View>
            </View>

            {/* dot part */}
            <View style={{
                flex: 1,
                paddingTop: 30,
            }}>
                <View
                    style={[
                        styles.blackCircle,
                        { position: 'absolute', top: -20, left: -40 },
                    ]}>
                </View>
                <View style={styles.linear}></View>
                <View
                    style={[
                        styles.blackCircle,
                        { position: 'absolute', top: -20, right: -40 },
                    ]}>
                </View>
                <TouchableOpacity style={styles.buttonSaveCardStyle}>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: FONTFAMILY.poppins_thin,
                        color: color.text_session,
                        paddingLeft: 10,
                    }}>Phone number</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContinue}>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: FONTFAMILY.poppins_thin,
                        color: color.White,
                        paddingLeft: 10,
                    }}>Phone number</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const payScreen = ({navigation}: any) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.default_background }} >
            <View style={{ flex: 1 }}>
                <MovieHeader navigation = {navigation} />
                <TicketInfo />
            </View>
        </SafeAreaView>
    );
};

export default payScreen;

const styles = StyleSheet.create({
    containerHeader: {
        height: layout.height * 0.1,
        backgroundColor: color.default_status_bar,

    },
    titleMiddle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        height: layout.height * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnIcon: {
        width: 32, height: 32,
        paddingLeft: 10,
    },
    blackCircle: {
        height: 80,
        width: 80,
        borderRadius: 80,
        backgroundColor: color.Black,
        marginTop: 10,
    },
    linear: {
        borderTopColor: color.Grey,
        borderTopWidth: 3,
        width: 300,
        alignSelf: 'center',
        backgroundColor: color.text_session,
        borderStyle: 'dashed',
    },
    line: {
        borderColor: color.text_session,
        borderWidth: 0.3,
        width: 370,
        alignSelf: 'center',
        borderStyle: 'solid',
        margin: 15,
    },
    buttonSaveCardStyle: {
        marginTop: 40,
        height: layout.height * 0.07,
        width: layout.width * 0.9,
        borderWidth: 1,
        borderColor: color.text_session,
        marginHorizontal: 15,
        borderRadius: BORDERRADIUS.radius_8,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    buttonContinue: {
        marginTop: 10,
        height: layout.height * 0.07,
        width: layout.width * 0.9,
        backgroundColor: color.button,
        marginHorizontal: 15,
        borderRadius: BORDERRADIUS.radius_8,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
