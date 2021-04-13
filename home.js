import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = ({navigation}) => {

    return (
        <View style={styles.container}>
                <View style={styles.appTitleArea}>
                    <Text style={styles.appTitle}> Expense Management System </Text>
                </View>
                <View style={styles.appDescArea}>
                    <Text >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
                </View>
                <View style={styles.btnBlock}>
                    <Button
                        style={styles.btn}
                        title="Login"
                        color="#126e82"
                        accessibilityLabel="Login"
                        onPress={() =>
                            navigation.navigate('Login')
                          }
                    />
                    <Button
                        style={styles.btn}
                        title="Register"
                        color="#126e82"
                        accessibilityLabel="Register"
                        onPress={() =>
                            navigation.navigate('Register')
                          }
                    /> 
                </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#51c4d3',
        flexDirection: 'column'

    },
    appTitleArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
    },
    appTitle: {
        color: '#212121',
        fontSize: 24,
    },
    appDescArea: {
        flex: 2,
        padding: 16,
        // borderTopRightRadius: 10,
        // borderBottomLeftRadius: 10,
        borderRadius: 5,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: '#f1f1f1',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    btnBlock: {
        flex: 1, 
        padding: 16,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'center'
    },
    btn: {
        width: 50,
        margin: 16
    }
})

export default Home;