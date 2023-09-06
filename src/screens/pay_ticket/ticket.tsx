import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, ImageBackground, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { color } from '../../theme/fonts/colors';
import { FONTFAMILY } from '../../theme/fonts/fontFamily';
import { SPACING } from '../../theme/fonts/spacing';
import { BORDERRADIUS } from '../../theme/fonts/borderRadius';
import { images } from '../../images';

const layout = Dimensions.get('window');

export const MovieHeader = ({ navigation }: any) => {
    return (
        <View style={styles.containerHeader}>
            {/* title header */}
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.btnIconLeft} onPress={() => { }}>
                    <Ionicons name={'chevron-back-outline'} color="white" size={25} />
                </TouchableOpacity>
                <View style={styles.titleMiddle}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: color.white }}>Pay for ticket</Text>
                </View>
                <TouchableOpacity style={styles.btnIconRight} onPress={() => { navigation.goBack() }}>
                    <Ionicons name={'close-outline'} color={color.text_session} size={25} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const TicketInfo = () => {
    return (
        <View style={{
            backgroundColor: color.default_status_bar,
            flex: 0.9,
            borderRadius: BORDERRADIUS.radius_10
        }}>
            {/* QR */}
            <View style={{
                backgroundColor: color.default_status_bar,
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                paddingBottom: 30
            }}>
                <View style={styles.logoView}>
                    <Image source={images.QR} resizeMode="contain" style={styles.logo_style} />
                </View>
                <Text style={{ fontSize: 18, fontFamily: FONTFAMILY.poppins_thin, color: color.text_session }}>Show this code to the gatekeeper at the cinema</Text>
            </View>

            {/* Circle */}
            <View style={{ flex: 0.4, paddingTop: 30, paddingBottom: 0}}>
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
            </View>
            {/* movie info */}
            <View style={{
                backgroundColor: color.default_status_bar,
                flex: 1,
                marginLeft: 20,
                marginTop: 0
            }}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: color.white, paddingBottom: 10, }}>The Batman</Text>
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
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: 18, fontFamily: FONTFAMILY.poppins_thin, color: color.text_session }}>Cost</Text>
                    <Text style={{ fontSize: 20, fontFamily: FONTFAMILY.poppins_extralight, color: color.white, paddingLeft: 60 }}>3200 ₸ (paid)</Text>
                </View>
            </View>

            {/* button */}
            <View style={{
                flex: 0.3,
                flexDirection: 'row',
                justifyContent: 'center',
                marginVertical: 20,
                marginTop: 40
            }}>
                <TouchableOpacity style={styles.buttonSaveCardStyle}>
                    <Text style={{
                        fontSize: 18,
                        fontFamily: FONTFAMILY.poppins_thin,
                        color: color.White,
                        paddingLeft: 10,
                    }}>Phone number</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContinue}>
                    <Ionicons name={'send-outline'} color={color.White} size={25} />
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

const TicketScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.default_background }} >
            <View style={{ flex: 1 }}>
                <MovieHeader navigation={navigation} />
                <TicketInfo />
            </View>
        </SafeAreaView>
    );
};

export default TicketScreen;

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
    btnIconLeft: {
        width: 32, height: 32,
        paddingLeft: 10,
        opacity: 0
    },
    btnIconRight: {
        width: 32, height: 32,
        paddingRight: 10,
        paddingTop: 5
    },
    blackCircle: {
        height: 60,
        width: 60,
        borderRadius: 60,
        backgroundColor: color.Black,
        marginTop: 20,
    },
    linear: {
        borderTopColor: color.Grey,
        borderTopWidth: 3,
        width: 350,
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
        height: layout.height * 0.07,
        width: layout.width * 0.4,
        borderWidth: 1,
        borderColor: color.text_session,
        marginHorizontal: 15,
        borderRadius: BORDERRADIUS.radius_8,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContinue: {
        height: layout.height * 0.07,
        width: layout.width * 0.4,
        backgroundColor: color.button,
        marginHorizontal: 15,
        borderRadius: BORDERRADIUS.radius_8,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logoView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: BORDERRADIUS.radius_25,
        width: layout.width * 0.5,
        height: layout.height * 0.25,
        borderWidth: 1,
        marginBottom: 15,
    },
    logo_style: {
        
        width: layout.width * 0.5,
        height: layout.height * 0.25,
        alignItems: 'center',
        borderRadius: BORDERRADIUS.radius_25,
        
    },
});
