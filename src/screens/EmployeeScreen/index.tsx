import { Link, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonUI from '../../components/Button';
import Container from '../../components/Container';
import HeaderText from '../../components/HeaderText';

import { useAppDispatch } from '../../redux/store';
import { BG_SCREEN, SIZE_ICON_DEFAULT, TEXT_COLOR_PRIMARY } from '../../utils/common';
import { SCREENS } from '../../constants';
const EmployeeScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.bg_scrren}>
            <HeaderText title="Management Employee" />

            <View style={styles.search}>
                <View style={styles.icon_search}>
                    <AntDesign name="search1" color={TEXT_COLOR_PRIMARY} size={20}></AntDesign>
                </View>
                <TextInput style={styles.txt_search} placeholder="Search name user"></TextInput>
                <View style={styles.filter}>
                    <AntDesign name="filter" size={24}></AntDesign>
                </View>
            </View>
            <ScrollView>
                <TouchableOpacity>
                    <View style={styles.bg_container}>
                        <View style={styles.list_employee}>
                            <Container>
                                <View style={styles.view_manage_item}>
                                    <Text>Name:</Text>
                                    <Text style={styles.text_item}>Name cc</Text>
                                </View>
                                <View style={styles.view_manage_item}>
                                    <Text>Position:</Text>
                                    <Text style={styles.text_item}>An may</Text>
                                </View>
                                <View style={styles.view_manage_item}>
                                    <Text>Mobile Phone:</Text>
                                    <Text style={styles.text_item}>Name cc</Text>
                                </View>
                                <View style={styles.view_manage_item}>
                                    <Text>Code:</Text>
                                    <Text style={styles.text_item}>Name cc</Text>
                                </View>
                            </Container>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.bg_container}>
                    <View style={styles.list_employee}>
                        <Container>
                            <View style={styles.view_manage_item}>
                                <Text>Name:</Text>
                                <Text style={styles.text_item}>Name cc</Text>
                            </View>
                            <View style={styles.view_manage_item}>
                                <Text>Position:</Text>
                                <Text style={styles.text_item}>An may</Text>
                            </View>
                            <View style={styles.view_manage_item}>
                                <Text>Mobile Phone:</Text>
                                <Text style={styles.text_item}>Name cc</Text>
                            </View>
                            <View style={styles.view_manage_item}>
                                <Text>Code:</Text>
                                <Text style={styles.text_item}>Name cc</Text>
                            </View>
                        </Container>
                    </View>
                </View>
                <View style={styles.bg_container}>
                    <View style={styles.list_employee}>
                        <Container>
                            <View style={styles.view_manage_item}>
                                <Text>Name:</Text>
                                <Text style={styles.text_item}>Name cc</Text>
                            </View>
                            <View style={styles.view_manage_item}>
                                <Text>Position:</Text>
                                <Text style={styles.text_item}>An may</Text>
                            </View>
                            <View style={styles.view_manage_item}>
                                <Text>Mobile Phone:</Text>
                                <Text style={styles.text_item}>Name cc</Text>
                            </View>
                            <View style={styles.view_manage_item}>
                                <Text>Code:</Text>
                                <Text style={styles.text_item}>Name cc</Text>
                            </View>
                        </Container>
                    </View>
                </View>
                <View style={styles.bg_container}>
                    <View style={styles.list_employee}>
                        <Container>
                            <View style={styles.view_manage_item}>
                                <Text>Name:</Text>
                                <Text style={styles.text_item}>Name cc</Text>
                            </View>
                            <View style={styles.view_manage_item}>
                                <Text>Position:</Text>
                                <Text style={styles.text_item}>An may</Text>
                            </View>
                            <View style={styles.view_manage_item}>
                                <Text>Mobile Phone:</Text>
                                <Text style={styles.text_item}>Name cc</Text>
                            </View>
                            <View style={styles.view_manage_item}>
                                <Text>Code:</Text>
                                <Text style={styles.text_item}>Name cc</Text>
                            </View>
                        </Container>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.btn_add}>
                <ButtonUI
                    text="Add Employee"
                    onPress={() => {
                        navigation.navigate(SCREENS.ADD_OR_UPDATE_EMPLOYEE as never);
                    }}
                ></ButtonUI>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    bg_scrren: {
        backgroundColor: BG_SCREEN,
        height: '100%',
    },
    list_employee: {},
    bg_container: {
        paddingStart: 16,
        paddingEnd: 16,
        paddingTop: 10,
    },
    search: {
        flexDirection: 'row',
        paddingTop: 10,
        alignContent: 'center',
        justifyContent: 'space-between',
        paddingStart: 20,
        paddingEnd: 20,
    },
    icon_search: {
        paddingTop: 8,
    },
    txt_search: {
        paddingTop: 4,
        width: 300,
        height: 40,
        borderWidth: 1, // Đặt độ dày cho viền
        borderColor: 'black', // Màu viền
        borderRadius: 5, // Độ cong góc của viền
        backgroundColor: 'white',
    },

    filter: {},
    view_manage_item: {
        display: 'flex',
        gap: 12,
        flexDirection: 'row',
        alignContent: 'center',
        paddingBottom: 5,
        paddingTop: 5,
    },
    text_item: {
        color: 'black',
    },
    btn_add: {
        position: 'relative',
        paddingStart: 40,
        paddingEnd: 40,
        paddingTop: 10,
        paddingBottom: 10,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
});

export default EmployeeScreen;
