import React from 'react';
import { StyleSheet, View, TextInput, SafeAreaView, Button } from 'react-native';

const OtpScreen = () => {
    return (
        <View style={styles.container}>
          
            <SafeAreaView >
                <TextInput
                    style={styles.input}
                    placeholder="Enter OTP"
                >
                </TextInput>
            </SafeAreaView>

            <View style= {styles.btnBlock}>
                <Button
                    style={styles.btn}
                    title="Proceed"
                    color="#126e82"
                    accessibilityLabel="Proceed"
                    onPress={() =>
                        navigation.navigate('otpScreen')
                    }
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 8,
        paddingRight: 8
    },
    btn: {
        width: 50,
        margin: 16
    },
    btnBlock: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
})

export default OtpScreen;