import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MainMenu = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.appTitleArea}>
                <Text style={styles.appTitle}> Expense Management System </Text>
            </View>
            <View style={{flex:1, justifyContent: 'center'}}>
                <View style={styles.btnBlock}>
                    <Button
                        style={styles.btn}
                        title="Classify Calls"
                        color="#126e82"
                        accessibilityLabel="Classify Calls"
                        onPress={() =>
                            navigation.navigate('ClassifyCallScreen')
                        }
                    />
                    <Button
                        style={styles.btn}
                        title="Assign Calls"
                        color="#126e82"
                        accessibilityLabel="Assign Calls"
                        onPress={() =>
                            navigation.navigate('AssignCallScreen')
                        }
                    />
                    <Button
                        style={styles.btn}
                        title="Change Cell #"
                        color="#126e82"
                        accessibilityLabel="Change Cell"
                        onPress={() =>
                            navigation.navigate('ChangeCellScreen')
                        }
                    />
                    <Button
                        style={styles.btn}
                        title="Log out"
                        color="#126e82"
                        accessibilityLabel="Log out"
                        onPress={() =>
                            navigation.navigate('Home')
                        }
                    />
                </View>

            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    appTitleArea: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
        textAlign: 'center'
    },
    appTitle: {
        color: '#212121',
        fontSize: 24,
    },
    btnBlock: {
        padding: 16,
        flexDirection: 'column',
        justifyContent: "space-around",
        height:300
    },
    btn: {
        marginTop: 16,
        width: 100,
    }
})

export default MainMenu;