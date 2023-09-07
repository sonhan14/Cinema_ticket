import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Button,
    Alert,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { color } from '../../theme/fonts/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SignOutUser } from '../../utilities/Auth';
import { BORDERRADIUS } from '../../theme/fonts/borderRadius';
import { images } from '../../images';

const layout = Dimensions.get('window');


export const ProfileHeader = ({navigation}: any) => {

    const [tabIndex, setTabIndex] = useState(false); //choose about or session
    return (
        <View style={styles.containerHeader}>
            {/* title header */}
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.btnIcon} onPress={() => {  navigation.navigate('ProfileEmpty') }}>
                    <Ionicons name={'chevron-back-outline'} color="white" size={25} />
                </TouchableOpacity>
                <View style={styles.titleMiddle}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: color.white }}>8 (707) 268 4812</Text>
                </View>
                <TouchableOpacity style={styles.btnIcon} onPress={() => { SignOutUser(), navigation.navigate('HomeNon')}} >
                    <Ionicons name={'log-out-outline'} color="white" size={25} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const SaveCards = ({navigation}: any) => {
    return <View style={{ height: layout.height * 0.2, width: layout.width, flexDirection: 'column' }}>
        <Text style={[styles.text_title, { color: color.text_session }]}>Save Cards</Text>
        <View style={styles.visaBoxStyle}>
            <TouchableOpacity style={styles.visaStyle}>
                <FontAwesomeIcon name='cc-visa' size={30} color={color.visa} />
            </TouchableOpacity>
            <Text style={[styles.text_number_of_card]}>4716 •••• •••• 5615</Text>
            <Text style={[styles.text_date_of_card]}>06/24</Text>
        </View>

        <TouchableOpacity style={styles.buttonSaveCardStyle}>
            <Text style={[styles.text_add]}>Add new card</Text>
        </TouchableOpacity>

        <View style={{ paddingTop: 15 }}></View>

        <Text style={[styles.text_title, { color: color.text_session }]}>Payments history</Text>

        <TouchableOpacity style={styles.paymentsBoxStyle} onPress={()=> {navigation.navigate('Ticket')}}>
            <View style={{ 
                flex: 1, 
                borderRadius: BORDERRADIUS.radius_4, 
                alignItems: 'center', 
                backgroundColor: color.default_status_bar }}>
                <Image source={images.movie3} resizeMode="contain" style={{
                    flex: 1,
                    height: 130,
                    width: 110,
                    margin: 10,
                    borderRadius: BORDERRADIUS.radius_8,
                    alignContent: 'center'
                }} />
            </View>
            <View style={{ flex: 2, flexDirection: 'column', }}>
                <Text style={[styles.text_movie]}>The batman</Text>
                <Text style={[styles.text_date]}>6 April 2023, 14:40</Text>
                <Text style={[styles.text_place]}>Eurasia Cinema 7</Text>
            </View>
        </TouchableOpacity>

    </View>
}

const ProfileScreen = ({ navigation }: any) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.default_background }}>
            <ProfileHeader navigation={navigation} />
            <SaveCards navigation={navigation}/>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    containerHeader: {
        height: layout.height * 0.1,
        backgroundColor: color.default_status_bar,

    },
    visaBoxStyle: {
        height: layout.height * 0.1,
        width: layout.width * 0.94,
        flexDirection: 'row',
        backgroundColor: color.default_status_bar,
        marginHorizontal: 15,
        borderRadius: BORDERRADIUS.radius_8,
        alignItems: 'center',
    },
    paymentsBoxStyle: {
        height: layout.height * 0.17,
        width: layout.width * 0.94,
        flexDirection: 'row',
        backgroundColor: color.default_status_bar,
        marginHorizontal: 15,
        borderRadius: BORDERRADIUS.radius_8,
    },
    buttonSaveCardStyle: {
        marginTop: 20,
        height: layout.height * 0.07,
        width: layout.width * 0.94,
        borderWidth: 1,
        borderColor: color.text_session,
        marginHorizontal: 15,
        borderRadius: BORDERRADIUS.radius_8,
        alignItems: 'center',
    },
    visaStyle: {
        padding: 10,
        alignItems: 'center'
    },
    text_date_of_card: {
        color: color.text_session,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 70,
    },
    text_place: {
        color: color.text_session,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 15,
    },
    text_date: {
        color: color.white,
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 15,
        marginVertical: 15,
    },
    imageStyle: {
        flex: 1,
        height: 130,
        width: 110,
        margin: 10,
        borderRadius: BORDERRADIUS.radius_8,
        alignContent: 'center'

    },

    titleMiddle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_title: {
        color: color.white,
        fontSize: 18,
        fontWeight: '600',
        padding: 15,
    },

    wrapper: {
        height: layout.height * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btnIcon: {
        width: 32, 
        height: 32,
        padding: 5,
        margin: 10,
    },
    btn_tab: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_black: {
        fontSize: 18,
        fontWeight: '700',
        color: color.text_session,
        lineHeight: 25
    },
    backgroundVideo: {
        flex: 1,
    },
    containerVideo: {
        height: layout.height * 0.3,
        width: layout.width
    },
    playButtonContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButton: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
    },
    mark: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%'
    },
    text_number_of_card: {
        color: color.white,
        fontSize: 18,
        fontWeight: '600',
        padding: 20,
    },
    text_add: {
        color: color.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
    },
    text_movie: {
        color: color.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 15,
    }
})
