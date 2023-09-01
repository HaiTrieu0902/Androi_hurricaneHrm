import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { SCREENS } from '../../constants';


const LimitationScreen = () => {
    const navigation = useNavigation();

    const handleChangeNavigationLimit= async (type: string) => {
        navigation.navigate(SCREENS[type] as never);
    };
    
    return (
        <SafeAreaView>
            <View style={styles.view_total_limit}> 
                <View >
                    <Icon name='eye' size={23}></Icon>
                    <Text>12.11.2002</Text>
                </View>
                <View >
                    <Text style={styles.txt_money_remain}>5.000.000 VND</Text>
                    <Text style={styles.txt_money_total}>/6.000.00 VND</Text>
                </View>
            </View>

            <View style={styles.view_list_item_limit}> 
                <TouchableOpacity style={styles.view_item}>
                    <Text style={styles.view_title}>Food & Drink</Text>
                    <View style={styles.view_item_money}>
                        <Text style={styles.txt_item_money_remain}>5.000.000 VND</Text>
                        <Text style={styles.txt_item_money_total}>/6.000.00 VND</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.view_item}>
                    <Text style={styles.view_title}>Shopping</Text>
                    <View style={styles.view_item_money}>
                        <Text style={styles.txt_item_money_remain}>5.000.000 VND</Text>
                        <Text style={styles.txt_item_money_total}>/6.000.00 VND</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.view_item}>
                    <Text style={styles.view_title}>Charity</Text>
                    <View style={styles.view_item_money}>
                        <Text style={styles.txt_item_money_remain}>5.000.000 VND</Text>
                        <Text style={styles.txt_item_money_total}>/6.000.00 VND</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.view_item}>
                    <Text style={styles.view_title}>Other</Text>
                    <View style={styles.view_item_money}>
                        <Text style={styles.txt_item_money_remain}>5.000.000 VND</Text>
                        <Text style={styles.txt_item_money_total}>/6.000.00 VND</Text>
                    </View>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.btn_change}  onPress={() => handleChangeNavigationLimit('INFOR_LIMITATION')}>
                <Text style={{paddingTop: 8, textAlign: 'center', color:'black'}}>Change this Settings</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create ({



    view_total_limit : {
        height: 100,
        backgroundColor: '#b8def3',
        borderRadius: 20,
        margin: 20,
        paddingStart: 15,
        paddingEnd: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    txt_money_remain:{
        fontSize : 23,
        color: 'blue',
    },
    txt_money_total: {
        textAlign: 'right'
    },
    view_list_item_limit: {
        height: 500,
        backgroundColor: '#b8def3',
        borderRadius: 20,
        margin: 20,
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingStart: 11
        
    },
    view_item: {
        width: 160,
        height: 100,
        backgroundColor: 'orange',
        margin : 2,
        borderRadius: 10,
        position: 'relative',
    },
    view_title:{
        fontSize: 15,
        color: 'white',
        paddingTop: 5,
        paddingStart : 5
    },
    view_item_money:{
        position :'absolute',
        bottom:0,
        right:0,
        paddingEnd : 5,
        paddingBottom :5
    },
    txt_item_money_remain:{
        fontSize: 16,
        textAlign: 'right',
        color: 'white',
    },
    txt_item_money_total: {
        fontSize: 13,
        textAlign: 'right',
        color: 'white',
    },
    btn_change: {
        height:40,
        backgroundColor: '#b8def3',
        width: '70%',
        marginStart: '15%',
        borderRadius: 10,
    }
})
export default LimitationScreen;
