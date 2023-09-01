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

import { color } from '../theme/fonts/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { SignOutUser } from '../utilities/Auth';
import { BORDERRADIUS } from '../theme/fonts/borderRadius';
import { images } from '../images';

const layout = Dimensions.get('window');


export const ProfileHeader = (props: any) => {

    const [tabIndex, setTabIndex] = useState(false); //choose about or session
    return (
        <View style={styles.containerHeader}>
            {/* title header */}
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.btnIcon} onPress={() => { props.goBack() }}>
                    <Ionicons name={'chevron-back-outline'} color="white" size={25} />
                </TouchableOpacity>
                <View style={styles.titleMiddle}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: color.white }}>{ }</Text>
                </View>
                <TouchableOpacity style={styles.btnIcon} onPress={() => { SignOutUser() }} >
                    <Ionicons name={'log-out-outline'} color="white" size={25} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const SaveCards = (props: any) => {
    return <View style={{ height: layout.height * 0.2, width: layout.width, flexDirection: 'column' }}>
        <Text style={[styles.text_title, { color: color.text_session }]}>Save Cards</Text>
        <View style={{
            height: layout.height * 0.1,
            width: layout.width * 0.94,
            flexDirection: 'row',
            backgroundColor: color.default_status_bar ,
            marginHorizontal: 15,
            borderRadius: BORDERRADIUS.radius_8,
            alignItems: 'center',
        }}>
            <TouchableOpacity style={styles.visaStyle}>
                <FontAwesomeIcon name='cc-visa' size={30} color={color.visa} />
            </TouchableOpacity>
            <Text style={[styles.text_number_of_card, { color: color.white }]}>4716 •••• •••• 5615</Text>
            <Text style={[styles.text_date_of_card, { color: color.text_session }]}>06/24</Text>


        </View>

    </View>
}


const ProfileScreen = ({ navigation }: any) => {


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.default_background }}>
            <ProfileHeader />
            <SaveCards />
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    containerHeader: {
        height: layout.height * 0.1,
        backgroundColor: color.default_status_bar,

    },
    visaStyle: {
        padding: 10,
        alignItems: 'center'
    },
    text_date_of_card: {
        color: color.white,
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 70,
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
        width: 32, height: 32,
        padding: 5,
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
    }
})
