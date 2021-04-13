import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.appTitleArea}>
                <Text style={styles.appTitle}> Expense Managament System</Text>
            </View>

            <SafeAreaView >
                <TextInput
                    style={styles.input}
                    placeholder="Enter PIN"
                    keyboardType="numeric"
                    onChangeText={(text)=>{
                        console.log(text)
                        if(text == 1234){
                            navigation.navigate('MainMenuScreen')
                        }
                    }}
                >
                </TextInput>
                <Text style={{ backgroundColor: '#369', borderRadius: 10, width:134, textAlign:'center', color: '#f1f1f1', alignSelf: 'flex-end', padding: 4 }}> Forgot Password?</Text>
            </SafeAreaView>
            <View style={styles.btnBlock}>
                <Button
                    style={styles.btn}
                    title="Exit"
                    color="#126e82"
                    accessibilityLabel="Exit"
                    onPress={() =>
                        navigation.navigate('Home')
                    }
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    appTitleArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
        textAlign: 'center'
    },
    appTitle: {
        color: '#212121',
        fontSize: 24,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 8,
        paddingRight: 8
    },
    // appDescArea: {
    //     padding: 16,
    //     // borderTopRightRadius: 10,
    //     // borderBottomLeftRadius: 10,
    //     borderRadius: 5,
    //     marginLeft: 16,
    //     marginRight: 16,
    //     backgroundColor: '#f1f1f1',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    // },
    btnBlock: {
        flex: 1, 
        padding: 16,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'flex-start'
    },
    btn: {
        width: 50,
        margin: 16
    }
})

export default LoginScreen;