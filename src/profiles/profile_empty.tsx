import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';



const ProfileEmptyScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
        </View>
    );
};

export default ProfileEmptyScreen;

const styles = StyleSheet.create({
    container: {}
});
