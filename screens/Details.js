import React from 'react';
import { Text, SafeAreaView , StyleSheet} from 'react-native';

export default class Details extends React.Component {
    render () {
        const {text} = this.props.route.params;
        return (
            <SafeAreaView>
                <Text style={styles.title}>Details Screen</Text>
                <Text style={styles.title}>{text}</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 20
    }
})