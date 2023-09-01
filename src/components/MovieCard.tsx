import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SPACING } from '../theme/fonts/spacing';
import { color } from '../theme/fonts/colors';
import { BORDERRADIUS } from '../theme/fonts/borderRadius';
import { FONTFAMILY } from '../theme/fonts/fontFamily';
import { FONTSIZE } from '../theme/fonts/fontSize';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const layout = Dimensions.get('window');

const genres: any = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentry',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystry',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
};

const MovieCard = (props: any) => {
    return (
        <TouchableOpacity onPress={() => props.cardFunction()}>
            <View
                style={[
                    styles.container,
                ]}>
                    <Image
                        style={[styles.cardImage]}
                        source={{ uri: props.imagePath }}
                    />

                    <View style={[
                        styles.rateContainer, 
                        {backgroundColor: props.vote_average > 7 ? color.orange : color.default_status_bar}]}>
                        <Text style={[styles.voteText]}>
                            {props.vote_average}
                        </Text>
                    </View>

                    <Text numberOfLines={2} style={styles.textTitle}>
                        {props.title}
                    </Text>

                    {props.genre.map((item: any) => {
                        return (
                            <Text style={styles.genreText}>{genres[item]}</Text>
                        );
                    })}
                    
                </View>
            
        </TouchableOpacity>
    );
};

export default MovieCard;

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: color.default_background,
        padding: 5,
        margin: 10,
        width: layout.width * 0.42,
        height: layout.height * 0.32,
    },
    cardImage: {
        width: layout.width * 0.42,
        height: layout.height * 0.25,
        borderRadius: BORDERRADIUS.radius_8,
        alignContent: 'center'
    },
    textTitle: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontWeight: 'bold',
        fontSize: FONTSIZE.size_14,
        color: color.White,
        textAlign: 'left',
        marginTop: 10,
    },
    rateContainer: {
        gap: SPACING.space_10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SPACING.space_10,
        position: 'absolute',
        borderRadius: BORDERRADIUS.radius_4,
        height: 25,
        width: 30,
        right: 0,
        top: 10
    },
    voteText: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_16,
        color: color.White,
    },
    genreContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: SPACING.space_20,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    genreText: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: FONTSIZE.size_10,
        color: color.xam_nhat,
        textAlign: 'left',
        marginTop: 10,
    },
});