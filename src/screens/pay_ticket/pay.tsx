import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { color } from '../../theme/fonts/colors';

const layout = Dimensions.get('window');

export const MovieHeader = () => {
    return (
        <View style={styles.containerHeader}>
            {/* title header */}
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.btnIcon} onPress={() => { }}>
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
            backgroundColor: color.Orange,
            flex: 0.7,
        }}>

        </View>
    )
}

const payScreen = (props: any) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: color.default_background }} >
			<View style={{ flex: 1 }}>
				<MovieHeader />
				<TicketInfo/>
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
});
