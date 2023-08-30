import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { COLOR_BORDER, FONT_FAMILY, SIZE_ICON_20, TEXT_COLOR_PRIMARY } from '../../utils/common';
import Container from '../Container';

interface ContainerInfomationProps {
    columns: any[] | Object | any;
    dataSource: any[] | Object | any;
}

const ContainerInfomation = ({ columns, dataSource }: ContainerInfomationProps) => {
    return (
        <Container borderWidth={1} borderColor={COLOR_BORDER} marginTop={14} padding={true}>
            <View style={styles.view_item_container}>
                <View style={styles.view_manage_list}>
                    {columns.map((column: any, index: number) => (
                        <View
                            key={column.key}
                            style={[styles.view_manage_item, index !== 0 && styles.setting_paddding]}
                        >
                            <View style={styles.view_sub_item}>
                                <Text style={styles.text_sub_item}>{column.name}: </Text>
                                <Text style={styles.text_sub_item_value}>{dataSource[column.key]} </Text>
                            </View>
                        </View>
                    ))}
                </View>
                <Icon name="angle-right" color={TEXT_COLOR_PRIMARY} size={SIZE_ICON_20} />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    view_item_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    view_manage_list: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },
    view_manage_item: {
        display: 'flex',
        gap: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
    },
    view_sub_item: {
        display: 'flex',
        gap: 4,
        flexDirection: 'row',
        alignContent: 'center',
    },

    setting_paddding: {
        paddingTop: 10,
    },
    text_sub_item: {
        fontFamily: FONT_FAMILY,
        color: TEXT_COLOR_PRIMARY,
    },
    text_sub_item_value: {
        fontFamily: FONT_FAMILY,
        color: 'black',
    },
});

export default ContainerInfomation;
