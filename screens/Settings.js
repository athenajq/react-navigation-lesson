import React from 'react';
import { SafeAreaView , Text, StyleSheet, Button} from 'react-native';

export default class Settings extends React.Component {
    render () {
        return (
            <SafeAreaView>
                <Text style={styles.text}>Settings Screen</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        width: '100%',
        textAlign: 'center'
    },
})