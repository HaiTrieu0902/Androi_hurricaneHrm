import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { SCREENS } from '../../constants';
import ContainLimited from '../../components/ContainLimited';
import { BG_PRIMARYCOLOR, FONT_FAMILY } from '../../utils/common';


const LimitationScreen = () => {
    const navigation = useNavigation();

    const handleChangeNavigationLimit= async (type: string) => {
        navigation.navigate(SCREENS[type] as never);
    };
    
    return (
        <SafeAreaView>
            {/* View  */}
            <View style={{ alignItems:'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10}}>
                <Text style={{fontSize: 20, fontFamily: FONT_FAMILY, color: '#0d6ea2'}}>Limitation Screen</Text>
            </View>
            {/* View  */}
            <View style={{backgroundColor: '#b8def3', borderRadius: 50, height: 750}}>
                {/* View  card total*/}
                <View style={styles.view_total_limit}> 
                    <View >
                        <Icon name='eye' size={23}></Icon>
                        <Text>12.11.2002</Text>
                    </View>
                    <View >
                        <Text style={styles.txt_money_remain}>Remaining: 5.000.000</Text>
                        <Text style={styles.txt_money_total}>Total: 6.000.000</Text>
                        
                    </View>
                </View>

                <View style={{backgroundColor: 'white', marginStart: 20, marginEnd: 20,marginTop: 5, borderRadius: 10, alignItems: 'center', justifyContent: 'center', height: 40}}>
                    <Text style={{paddingStart: 20, fontFamily: FONT_FAMILY, color: 'black', fontSize: 20}}>List all Limitation</Text>
                </View>
                {/* View  list limit*/}
                <View style={{height: 540, backgroundColor: 'white',borderRadius: 20, margin: 20, marginTop: 5}}>
                    <ScrollView> 
                        <View style={styles.view_list_item_limit}> 
                            {/* View  item limit*/}
                            <TouchableOpacity style={[styles.view_item, {backgroundColor: '#f18ca8'}] } onPress={() => handleChangeNavigationLimit('INFOR_LIMITATION')}>
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Shopping</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Total: 11111</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Remaining: 6000</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* View  item limit*/}
                            <TouchableOpacity style={[styles.view_item, {backgroundColor: '#66ab6a'}] } onPress={() => handleChangeNavigationLimit('INFOR_LIMITATION')}>
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Shopping</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Total: 11111</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Remaining: 6000</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* View  item limit*/}
                            <TouchableOpacity style={[styles.view_item, {backgroundColor: '#664fc1'}] } onPress={() => handleChangeNavigationLimit('INFOR_LIMITATION')}>
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Shopping</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Total: 11111</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Remaining: 6000</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* View  item limit*/}
                            <TouchableOpacity style={[styles.view_item, {backgroundColor: '#818562'}] } onPress={() => handleChangeNavigationLimit('INFOR_LIMITATION')}>
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Shopping</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Total: 11111</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Remaining: 6000</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            {/* View  item limit*/}
                            <TouchableOpacity style={[styles.view_item, {backgroundColor: '#4564e0'}] } onPress={() => handleChangeNavigationLimit('INFOR_LIMITATION')}>
                                <View style={[styles.view_container_limit]}>
                                    <View>
                                        <Text style={styles.text_title}>Shopping</Text>
                                    </View>
                                    <View style={styles.view_total}>
                                        <View style={{ display: 'flex', gap: 6 }}>
                                            <Text style={[styles.text_right, styles.text_total]}>Total: 11111</Text>
                                            <Text style={[styles.text_right, styles.text_remain]}>Remaining: 6000</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create ({

    view_total_limit : {
        height: 100,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 50,
        marginStart: 20,
        marginEnd: 20,
        paddingStart: 15,
        paddingEnd: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    txt_money_remain:{
        fontSize : 20,
        color: 'blue',
    },
    txt_money_total: {
        textAlign: 'right'
    },
    view_list_item_limit: {
        paddingTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingStart: 11
        
    },
    view_item: {
        width:160,
        height: 100,
        backgroundColor: '#035397',
        margin : 3,
        borderRadius: 10,
        position: 'relative',
    },
    view_container_limit: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        borderRadius: 6,
        padding: 12,
    },
    view_total: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    text_right: {
        textAlign: 'right',
    },
    text_total: {
        fontSize: 14,
        color: 'white',
        fontFamily: FONT_FAMILY,
        fontWeight: '700',
    },
    text_remain: {
        fontSize: 14,
        color: 'white',
        fontFamily: FONT_FAMILY,
    },
    text_title: {
        fontSize: 16,
        color: 'white',
        fontFamily: FONT_FAMILY,
    },


})
export default LimitationScreen;
