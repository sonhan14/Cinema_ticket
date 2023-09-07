import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { color } from '../../theme/fonts/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { BORDERRADIUS } from '../../theme/fonts/borderRadius';
import { FONTSIZE } from '../../theme/fonts/fontSize';
import { SPACING } from '../../theme/fonts/spacing';
import { useState } from 'react';
import { FONTFAMILY } from '../../theme/fonts/fontFamily';
const layout = Dimensions.get('window');

const generateSeats = () => {
	const numRow = 8;
	const numColumn = 8;
	const rowArray = [];
	let start = 1;

	for (let i = 0; i < numRow; i++) {
		const columnArray = [];
		for (let j = 0; j < numColumn; j++) {
			const seatObject = {
				number: start,
				taken: Boolean(Math.round(Math.random())),
				selected: false,
			};
			columnArray.push(seatObject);
			start++;
		}
		rowArray.push(columnArray);
	}
	return rowArray;
};

export const MovieHeader = ({ navigation }: any) => {
	return (
		<View style={styles.containerHeader}>
			{/* title header */}
			<View style={styles.wrapper}>
				<TouchableOpacity style={styles.btnIcon} onPress={() => { navigation.goBack() }}>
					<Ionicons name={'chevron-back-outline'} color="white" size={25} />
				</TouchableOpacity>
				<View style={styles.topBar}>
					<Text style={{ fontSize: 20, fontWeight: '700', color: color.white }}>Eurasia Cinema7</Text>
					<Text style={{ fontSize: 18, fontWeight: '600', color: color.text_session, }}>The Batman</Text>
				</View>
				<TouchableOpacity style={styles.btnIcon} >
					<FontAwesomeIcon name='repeat' color="white" size={25} ></FontAwesomeIcon>
				</TouchableOpacity>
			</View>
			{/* Date Time Button  */}
			<View style={styles.dateTime}>
				<TouchableOpacity style={styles.btnSelectTime}>
					<FontAwesomeIcon name='calendar' color="white" size={25} ></FontAwesomeIcon>
					<Text style={{ fontSize: 20, fontWeight: '100', color: color.white, paddingLeft: 10 }} >April, 14</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.btnSelectTime}>
					<Ionicons name={'time'} color="white" size={25} />
					<Text style={{ fontSize: 20, fontWeight: '100', color: color.white, paddingLeft: 10 }} >15:10</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export const SeatMap = ({ navigation }: any) => {
	const [twoDSeatArray, setTwoDSeatArray] = useState<any[][]>(generateSeats());
	const [selectedSeatArray, setSelectedSeatArray] = useState([]);
	const [selectedSeat, setSelectedSeat] = useState(0);
	console.log(JSON.stringify(twoDSeatArray, null, 2));

	const selectSeat = (index: number, subindex: number, num: number) => {
		if (!twoDSeatArray[index][subindex].taken) {
			let array: any = [...selectedSeatArray];
			let temp = [...twoDSeatArray];
			temp[index][subindex].selected = !temp[index][subindex].selected;
			if (!array.includes(num)) {
				array.push(num);
				setSelectedSeatArray(array);
				setSelectedSeat(selectedSeat + 1);
			} else {
				const tempindex = array.indexOf(num);
				if (tempindex > -1) {
					array.splice(tempindex, 1);
					setSelectedSeatArray(array);
					setSelectedSeat(selectedSeat - 1);
				}
			}

			setTwoDSeatArray(temp);
		}
		console.log(selectedSeatArray);

	};
	return (
		<View style={{ alignItems: 'center' }}>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<View style={styles.seatContainer}>
					{/* raido button */}
					<View style={styles.seatRadioContainer}>
						<View style={styles.radioContainer}>
							<Ionicons name="radio-button-on-outline" style={styles.radioIcon} />
							<Text style={styles.radioText}>Available</Text>
						</View>
						<View style={styles.radioContainer}>
							<Ionicons
								name="radio-button-on-outline"
								style={[styles.radioIcon, { color: color.WhiteRGBA32 }]}
							/>
							<Text style={styles.radioText}>Occupied</Text>
						</View>
						<View style={styles.radioContainer}>
							<Ionicons
								name="radio-button-on-outline"
								style={[styles.radioIcon, { color: color.Orange }]}
							/>
							<Text style={styles.radioText}>Chosen</Text>
						</View>
					</View>
					{/* Text SCREEN */}
					<Text style={{ fontSize: 18, fontWeight: '600', color: color.text_session, alignSelf: 'center', marginBottom: 10 }}>SCREEN</Text>
					{/* SEAT */}
					<View style={styles.containerGap20}>
						{twoDSeatArray?.map((item, index) => {
							return (
								<View key={index} style={styles.seatRow}>
									{item?.map((subitem, subindex) => {
										return (
											<TouchableOpacity style={[styles.seatNormal, subitem.taken ? { backgroundColor: color.seat } : subitem.selected ? { backgroundColor: color.Orange } : {}]}
												key={subitem.number}
												onPress={() => {
													selectSeat(index, subindex, subitem.number);
												}}>
												<Text style={[styles.radioText, subitem.taken ? { color: color.lightGrey } : {}]}>
													{!subitem.taken ? subitem.number : 'X'}
												</Text>
											</TouchableOpacity>
										);
									})}
								</View>
							);
						})}
					</View>
				</View>
			</View>
			{
				selectedSeat == 0 ?
					<View></View>
					:
					<TouchableOpacity style={styles.buttonContinue} onPress={() => { navigation.navigate('Loading', {screen: 'Pay'}) }}>
						<Text style={{
							fontSize: 18,
							fontFamily: FONTFAMILY.poppins_thin,
							fontWeight: '700',
							color: color.White,
							paddingLeft: 10,
						}}>By {selectedSeat} ticket</Text>
					</TouchableOpacity>
			}


		</View>

	);
}

const SeatBookingScreen = ({ navigation }: any) => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: color.default_background }} >
			<ScrollView style={{ flex: 1 }}>
				<MovieHeader navigation={navigation} />
				<SeatMap navigation={navigation} />
			</ScrollView>
		</SafeAreaView>
	)
};

export default SeatBookingScreen;

const styles = StyleSheet.create({
	containerHeader: {
		height: layout.height * 0.2,
		backgroundColor: color.default_status_bar,
	},
	buttonContinue: {
		height: layout.height * 0.07,
		width: layout.width * 0.7,
		backgroundColor: color.button,
		marginTop: 20,
		borderRadius: BORDERRADIUS.radius_8,
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
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
	topBar: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	dateTime: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	btnSelectTime: {
		width: 150,
		height: 50,
		borderRadius: BORDERRADIUS.radius_8,
		borderWidth: 1,
		borderColor: color.text_session,
		alignItems: 'center',
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'center'
	},
	seatIcon: {
		fontSize: FONTSIZE.size_20,
		color: color.White,
	},
	seatContainer: {
		marginVertical: 10,
		flex: 1,
	},
	containerGap20: {
		gap: SPACING.space_20,
		marginTop: 10
	},
	seatRow: {
		flexDirection: 'row',
		gap: SPACING.space_20,
		justifyContent: 'center',
	},
	seatRadioContainer: {
		flexDirection: 'row',
		margin: 10,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	radioContainer: {
		flexDirection: 'row',
		gap: SPACING.space_10,
		alignItems: 'center',
	},
	radioIcon: {
		fontSize: FONTSIZE.size_20,
		color: color.White,
	},
	radioText: {
		fontFamily: FONTFAMILY.poppins_medium,
		fontSize: FONTSIZE.size_12,
		color: color.White,
	},
	buyButton: {
		flex: 1,
		backgroundColor: color.orange,
		height: layout.height * 0.07,
		justifyContent: 'center',
		alignItems: 'center',
		width: layout.width * 0.75,
		marginTop: 20,
		borderRadius: 20
	},
	textBuyTicket: {
		color: color.white,
		fontSize: 18,
		fontWeight: '700'
	},
	seatNormal: {
		backgroundColor: color.visa,
		borderWidth: 1,
		borderColor: color.text_session,
		borderRadius: BORDERRADIUS.radius_4,
		alignItems: 'center',
		justifyContent: 'center',
		width: layout.width * 0.075,
		height: layout.width * 0.075
	}
});
