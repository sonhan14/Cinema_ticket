import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { color } from '../../theme/fonts/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { BORDERRADIUS } from '../../theme/fonts/borderRadius';
import { FONTSIZE } from '../../theme/fonts/fontSize';
import { SPACING } from '../../theme/fonts/spacing';
import { useState } from 'react';
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



export const MovieHeader = () => {
	return (
		<View style={styles.containerHeader}>
			{/* title header */}
			<View style={styles.wrapper}>
				<TouchableOpacity style={styles.btnIcon} onPress={() => { }}>
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

export const SeatMap = () => {
	const [twoDSeatArray, setTwoDSeatArray] = useState<any[][]>(generateSeats());
	const [selectedSeatArray, setSelectedSeatArray] = useState([]);
	console.log(JSON.stringify(twoDSeatArray, null, 2));
	//  
	// 	if (!twoDSeatArray[index][subindex].taken) {
	// 		let array: any = [...selectedSeatArray];
	// 		let temp = [...twoDSeatArray];
	// 		temp[index][subindex].selected = !temp[index][subindex].selected;
	// 		if (!array.includes(num)) {
	// 			array.push(num);
	// 			setSelectedSeatArray(array);
	// 		} else {
	// 			const tempindex = array.indexOf(num);
	// 			if (tempindex > -1) {
	// 				array.splice(tempindex, 1);
	// 				setSelectedSeatArray(array);
	// 			}
	// 		}

	// 		setTwoDSeatArray(temp);
	// 	}
	// };


	return (
		<View style={{ height: layout.height * 0.8, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
			<Text style={{ fontSize: 18, fontWeight: '600', color: color.text_session, }}>SCREEN</Text>

			<View style={styles.seatContainer}>
				<View style={styles.containerGap20}>
					{twoDSeatArray?.map((item, index) => {
						return (
							<View key={index} style={styles.seatRow}>
								{item?.map((subitem, subindex) => {
						
console.log('====================================');
console.log(subindex);
console.log('====================================');
									return (
										<TouchableOpacity style={{ backgroundColor: color.text_session, 
											borderWidth: 1,
											borderColor: color.text_session,
											borderRadius: BORDERRADIUS.radius_8,
											alignItems: 'center', }}
											key={subitem.number}
											onPress={() => {
												// selectSeat(index, subindex, subitem.number);
											}}>
												<Text>
													{subindex}
												</Text>
										
											<FontAwesomeIcon
												name="calendar"
												style={[
													styles.seatIcon,
													subitem.taken ? { color: color.White } : {},
													subitem.selected ? { color: color.Yellow } : {},
												]}
											/>
										</TouchableOpacity>
									);
								})}
							</View>
						);
					})}
				</View>
				{/* <View style={styles.seatRadioContainer}>
					<View style={styles.radioContainer}>
						<CustomIcon name="radio" style={styles.radioIcon} />
						<Text style={styles.radioText}>Available</Text>
					</View>
					<View style={styles.radioContainer}>
						<CustomIcon
							name="radio"
							style={[styles.radioIcon, { color: COLORS.Grey }]}
						/>
						<Text style={styles.radioText}>Taken</Text>
					</View>
					<View style={styles.radioContainer}>
						<CustomIcon
							name="radio"
							style={[styles.radioIcon, { color: COLORS.Orange }]}
						/>
						<Text style={styles.radioText}>Selected</Text>
					</View>
				</View> */}
			</View>


		</View>
	);
}

const SeatBookingScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: color.default_background }} >
			<ScrollView>
				<MovieHeader />
				<SeatMap />
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
		fontSize: FONTSIZE.size_30,
		color: color.Yellow,
	},
	seatContainer: {
		marginVertical: SPACING.space_20,
	},
	containerGap20: {
		gap: SPACING.space_20,
	},
	seatRow: {
		flexDirection: 'row',
		gap: SPACING.space_20,
		justifyContent: 'center',
	}
});
