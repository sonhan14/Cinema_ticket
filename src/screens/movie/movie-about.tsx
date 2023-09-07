import React, { useEffect, useRef, useState } from 'react';
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
import { Button, Switch } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

import { images } from '../../images';

import { BORDERRADIUS } from '../../theme/fonts/borderRadius';
import { FONTFAMILY } from '../../theme/fonts/fontFamily';

const layout = Dimensions.get('window');

export const MovieHeader = ({ navigation, tabIndex, setTabIndex }: any) => {
    return (
        <View style={styles.containerHeader}>
            {/* title header */}
            <View style={styles.wrapper}>
                <Button style={styles.btnIcon} onPress={() => { navigation.goBack() }}>
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

const TimeBar = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style={styles.timeBar}>
            <View style={styles.timeBarEle}>
                <Image style={{ height: layout.height * 0.03, width: layout.height * 0.03, marginBottom: 10 }} source={images.calendar} />
                <Text style={{ color: color.white, fontWeight: '500' }}>April, 18</Text>
            </View>
            <View style={styles.timeBarEle}>
                <Image style={{ height: layout.height * 0.03, width: layout.height * 0.03, marginBottom: 10 }} source={images.timeSort} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: color.white, fontWeight: '500' }}>Time </Text>
                    <Ionicons name={'arrow-up-outline'} color="white" size={18} />
                </View>

            </View>
            <View style={styles.timeBarEle}>
                <Switch
                    style={{ marginBottom: 5 }}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => { setIsEnabled(!isEnabled) }}
                    value={isEnabled}
                />
                <Text style={{ color: color.white, fontWeight: '500' }}>April, 18</Text>
            </View>
        </View>
    )
}

const TimeCalendar = () => {
    const textItems = ['Time', 'Adult', 'Child', 'Student', 'VIP'];
    const [priceList, setPriceList] = useState([
        { price: '3500 T' },
        { price: '3500 T' },
        { price: '3500 T' },
        { price: '3500 T' },
    ]);
    const [timeList, setTimeList] = useState([
        { time: '14:10' },
        { time: '15:10' },
        { time: '16:10' },
        { time: '17:10' },
        { time: '18:10' },
    ]);


    return (
        <View style={{ flex: 1, marginBottom: 20 }}>
            <View style={styles.cateBar}>
                {textItems.map((item, index) => (
                    <View style={styles.textBarContainer} key={index}>
                        <Text style={styles.textBar}>{item}</Text>
                    </View>
                ))}
            </View>
            {timeList.map((time, index) => (
                <View key={index} style={styles.timeInfoContainer}>
                    <View style={styles.time_text_container}>
                        <Text style={styles.text_white}>{time.time}</Text>
                        <Text style={[styles.textBar, { marginTop: 10 }]}>Pyc</Text>
                    </View>
                    <View style={{ height: '100%', width: '70%', justifyContent: 'center', padding: 10 }}>
                        <Text style={styles.text_white}>Eurasia Cinema 7</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            {priceList.map((price, i) => (
                                <View key={i} style={{ width: '20%', justifyContent: 'center' }}>
                                    <Text style={[styles.text_white, { fontSize: 14 }]}>{price.price}</Text>
                                </View>
                            ))}
                        </View>
                    </View>



                </View>
            ))}


        </View>
    )
}

const ButtonSelected = ({ navigation }: any) => {
    return (
        <TouchableOpacity style={styles.buttonContinue} onPress={() => { navigation.navigate('SeatBooking') }}>
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

export const MovieAbout = ({ navigation }: any) => {
    const [tabIndex, setTabIndex] = useState(false); //choose about or session
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.default_background }}>
            <ScrollView>
                <MovieHeader navigation={navigation} tabIndex={tabIndex} setTabIndex={setTabIndex} />
                {!tabIndex ?
                    <View>
                        <MovieTrailer />
                        <MovieInfo />
                        <ButtonSelected navigation={navigation} />
                    </View>

                    :
                    <View>
                        <TimeBar />
                        <TimeCalendar />
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    containerHeader: {
        height: layout.height * 0.15,
        backgroundColor: color.default_status_bar,
        borderBottomColor: color.Grey,
        borderBottomWidth: 2
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

    timeBar: {
        height: layout.height * 0.1,
        backgroundColor: color.default_status_bar,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    timeBarEle: {
        height: '100%',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cateBar: {
        height: layout.height * 0.05,
        backgroundColor: '#253554',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    textBarContainer: {
        height: '100%',
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBar: {
        color: '#637394',
        fontWeight: '500',
        fontSize: 16
    },
    timeInfoContainer: {
        height: layout.height * 0.15,
        padding: 10,
        flexDirection: 'row',
        borderBottomColor: '#253554',
        borderBottomWidth: 1
    },
    text_white: {
        color: color.white,
        fontWeight: '500',
        fontSize: 18,

    },
    time_text_container: {
        height: '100%',
        width: '30%',
        borderRightColor: '#253554',
        borderRightWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
