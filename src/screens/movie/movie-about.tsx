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
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { color } from '../../theme/fonts/colors';
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BORDERRADIUS } from '../../theme/fonts/borderRadius';
import { FONTFAMILY } from '../../theme/fonts/fontFamily';

const layout = Dimensions.get('window');

export const MovieHeader = ({navigation} : any) => {
    
    const [tabIndex, setTabIndex] = useState(false); //choose about or session
    return (
        <View style={styles.containerHeader}>
            {/* title header */}
            <View style={styles.wrapper}>
                <Button style={styles.btnIcon} onPress={() => { navigation.goBack()}}>
                    <Ionicons name={'chevron-back-outline'} color="white" size={25} />
                </Button>
                <View style={styles.titleMiddle}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: color.white }}>The Batman</Text>
                </View>
                <Button style={styles.btnIcon} >
                </Button>
            </View>
            {/* session header  */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity style={[styles.btn_tab, tabIndex ? {} : { borderBottomColor: color.orange, borderBottomWidth: 1 }]} onPress={() => { tabIndex ? setTabIndex(!tabIndex) : {} }}>
                    <Text style={[styles.text_black, tabIndex ? { color: color.text_session } : { color: color.orange }]}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn_tab, tabIndex ? { borderBottomColor: color.orange, borderBottomWidth: 1 } : {}]} onPress={() => { !tabIndex ? setTabIndex(!tabIndex) : {} }}>
                    <Text style={[styles.text_black, tabIndex ? { color: color.orange } : { color: color.text_session }]}>Sessions</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const MovieTrailer = () => {

    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <View style={{ marginTop: 0 }}>
            <TouchableOpacity style={styles.containerVideo} onPress={togglePlayPause}>
                <Video
                    source={require('../../videos/invisible.mov')}
                    resizeMode={'contain'}
                    style={styles.backgroundVideo}
                    repeat={true}
                    paused={!isPlaying}
                />
                {
                    isPlaying ?
                        <View></View>
                        :
                        <View style={[styles.playButtonContainer]}>
                            <TouchableOpacity style={styles.playButton} onPress={togglePlayPause}>
                                <Icon name={isPlaying ? 'pause' : 'play'} size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                }
            </TouchableOpacity>

            {/* movie mark */}
            <View style={{ height: layout.height * 0.08, width: layout.width, backgroundColor: color.default_status_bar, flexDirection: 'row' }}>
                <View style={styles.mark}>
                    <Text style={styles.text_mark}>8.3</Text>
                    <Text style={[styles.text_mark, { color: color.text_session }]}>IMDB</Text>
                </View>
                <View style={styles.mark}>
                    <Text style={styles.text_mark}>7.9</Text>
                    <Text style={[styles.text_mark, { color: color.text_session }]}>Kinopoisk</Text>
                </View>
            </View>
        </View>


    );
}

const Info = ({ title, result }: any) => {
    return (
        <View style={{ flexDirection: 'row', paddingTop: 5, paddingBottom: 3, justifyContent: 'space-between' }}>
            <Text style={[styles.text_mark, { color: color.text_session, width: '25%' }]}>{title}</Text>
            <Text style={[styles.text_mark, { width: '70%', fontSize: 16 }]}>{result}</Text>
        </View>
    )

}

const MovieInfo = () => {
    return (
        <View style={{ padding: 15 }}>
            <Text style={{ color: color.white }}>
                Don't forget join us for the August LeetCoding Challenge. You can earn LeetCoins daily,
                and even get a chance to win some at the end of the month,
                as well as a LeetCode polo shirt. Happy LeetCoding!
            </Text>

            <View>
                <Info title={'Certificate'} result={16 + '+'} />
                <Info title={'Runtime'} result={'02:56'} />
                <Info title={'Release'} result={2022} />
                <Info title={'Genre'} result={'Action, Crime, Drama'} />
                <Info title={'Director'} result={'SonHan'} />
                <Info title={'Cast'} result={'Son Han, Quang Huy, Ngo Duc, Lan Huong'} />
            </View>
        </View>
    )
}

const ButtonSelected = ({navigation} : any) => {
    return (
        <TouchableOpacity style={styles.buttonContinue} onPress={()=> {navigation.navigate('SeatBooking')}}>
                    
                    <Text style={{
                        fontSize: 18,
                        fontFamily: FONTFAMILY.poppins_thin,
                        fontWeight: '700',
                        color: color.White,
                        paddingLeft: 10,
                    }}>Select session</Text>
                </TouchableOpacity>
    )
}

export const MovieAbout = ({navigation} : any) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.default_background }}>
            <ScrollView>
                <MovieHeader navigation = {navigation}/>
                <MovieTrailer />
                <MovieInfo />
                <ButtonSelected navigation = {navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    containerHeader: {
        height: layout.height * 0.15,
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
    text_mark: {
        color: color.white,
        fontSize: 18,
        fontWeight: '600',
    },
    buttonContinue: {
        height: layout.height * 0.07,
        width: layout.width * 0.9,
        backgroundColor: color.button,
        marginHorizontal: 0,
        borderRadius: BORDERRADIUS.radius_8,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
})

