import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { color } from '../../theme/fonts/colors';
import { images } from '../../images';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { FONTSIZE } from '../../theme/fonts/fontSize';
import { useEffect, useState } from 'react';
import { SPACING } from '../../theme/fonts/spacing';
import MovieCard from '../../components/MovieCard';
import { baseImagePath, nowPlayingMovies } from '../../api/apicalls';


const { width, height } = Dimensions.get('window');

const getNowPlayingMoviesList = async () => {
	try {
		let response = await fetch(nowPlayingMovies);
		let json = await response.json();
		return json;
	} catch (error) {
		console.error(
			' Something went wrong in getNowPlayingMoviesList Function',
			error,
		);
	}
};

const HomeScreenAuth = ({ navigation }: any) => {
	const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<any>(undefined);

	useEffect(() => {
		(async () => {
			let tempNowPlaying = await getNowPlayingMoviesList();
			
			setNowPlayingMoviesList([
				{ id: 'dummy1' },
				...tempNowPlaying.results,
				{ id: 'dummy2' },
			]);
		})();
	}, []);

	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: 'column',
					backgroundColor: color.header,
					alignItems: 'center'
				}}>
				<View style={styles.headerStyle}>
					<Image source={images.logo} resizeMode="contain" />
					<TouchableOpacity style={styles.headerStyle}>
						<FontAwesomeIcon name='globe' size={30} color={color.icon_bar} />
						<Text style={styles.textStyle}>Nur-Sultan</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.headerStyle}>
						<FontAwesomeIcon name='language' size={30} color={color.icon_bar} />
						<Text style={styles.textStyle}>Nur-Sultan</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.loginProfile}
						onPress={() => { navigation.navigate('ProfileEmpty') }}>
						<Text style={styles.textStyle}>Profile</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.titleStyle}>
				<Text style={styles.titleTextStyle}>Now in cinemas</Text>
				<TouchableOpacity onPress={() => navigation.navigate('MovieCard')}>
					<FontAwesomeIcon name='search' size={30} color={color.icon_bar} />
				</TouchableOpacity>

			</View>

			<FlatList
				data={nowPlayingMoviesList}
				numColumns={2}
				keyExtractor={(item: any) => item.id}
				bounces={false}
				showsVerticalScrollIndicator={true}
				
				// @ts-ignore
				renderItem={({ item, index }) => {
					if (item.original_title) {
					return (
						<MovieCard
							cardFunction={() => {
								navigation.push('MovieAbout', {movieid: item.id})
							}}
							
							title={item.original_title}
							imagePath={baseImagePath('w780', item.poster_path)}
							genre={item.genre_ids.slice(1, 2)}
							vote_average={item.vote_average}
							vote_count={item.vote_count}
						/>);
						
					}
				}
			}
			/>
		</View>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.default_background,
	},
	headerStyle: {
		flexDirection: 'row',
		alignContent: 'center',
		padding: 5,
		alignItems: 'center',
		marginRight: 5,
	},
	textStyle: {
		color: '#ffffff',
		fontWeight: '700',
		padding: 10,
	},
	loginProfile: {
		width: 70,
		backgroundColor: color.button,
		borderRadius: 8,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 10,
	},
	titleStyle: {
		flexDirection: 'row',
		alignContent: 'center',
		justifyContent: 'space-between',
		marginRight: 10
	},
	titleTextStyle: {
		color: '#ffffff',
		fontWeight: 'bold',
		fontSize: 24,
		marginLeft: 20
	},
	iconStyle: {
		size : '39', 
		color : color.icon_bar
	}
});

export default HomeScreenAuth;