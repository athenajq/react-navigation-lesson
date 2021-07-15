import React from 'react';
import { SafeAreaView , Text, StyleSheet, Button} from 'react-native';

export default class Home extends React.Component {
    render () {
        return (
            <SafeAreaView>
                <Text style={styles.text}>Home Screen</Text>
                <Button title="go to details page" onPress={()=>{this.props.navigation.navigate("Details", {text:"abc"})}}/>
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