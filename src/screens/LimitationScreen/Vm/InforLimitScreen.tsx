import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationGoBack from '../../../components/NavigationGoBack';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon1 from 'react-native-vector-icons/Entypo'
import { BG_PRIMARYCOLOR, FONT_FAMILY } from '../../../utils/common';
import { ScrollView } from 'react-native-gesture-handler';
import { SCREENS } from '../../../constants';


const InforLimitScreen = () => {
  const navigation = useNavigation();
  const handleChangeNavigationLimit= async (type: string) => {
    navigation.navigate(SCREENS[type] as never);
  };
  return (
      <SafeAreaView>
        <View>
          <NavigationGoBack paddingBottom={12} paddingTop={12} paddingStart={10} title="History Limit" />
        </View>
        {/* View limit card */}
        <View style={styles.view_card_limit}>
          <View style={styles.view_card}>
            <View style={styles.view_card_top}>
              <Text style={{fontSize: 14,color: 'white',fontFamily: FONT_FAMILY,fontWeight: '700',}}>Shopping</Text>
              <Icon1 name='dots-three-vertical' size={23} color={'white'}></Icon1>
            </View>
            <View style={styles.view_card_between}>
              <Text style={{color: 'white', fontSize: 20}}>Maintain: 100000</Text>
              <Text style={{textAlign: 'right', color: 'white'}}>Total limit: 100000</Text>
            </View>
            <View style={styles.view_card_bottom}>
              <Text style={{color: 'white'}}>Account balance</Text>
              <Text style={{color: 'white'}}>Total: 900000</Text>
            </View>
          </View>
        </View>
        {/* View history */}
        <View style={styles.view_history}>
          <View style={styles.view_date}>
            <Text >January, 2023</Text>
          </View>
          <View style={{height: 480}}>
            <ScrollView>
              {/* View list item history */}
              <View style={styles.view_list_history}>
                {/* View item history */}
                <TouchableOpacity onPress={() => handleChangeNavigationLimit('CHANGE_HISTORY')}>
                  <View style={styles.view_item_history}>
                    <View style={styles.icon_history}>
                      <Icon name='cart-shopping' size={16}></Icon>
                    </View>
                    <View style={styles.content_history}>
                      <View style={styles.content_left}>
                        <Text style={{fontSize: 20, color: 'black'}}>Note content</Text>
                        <Text >12.11.2002</Text>
                      </View>
                      <View style={styles.content_right}>
                        <View style={{justifyContent:'center' , paddingEnd: 5}}>
                          <Text style={{textAlign: 'right', color: 'red'}}>- 10000</Text>
                          <Text style={{textAlign: 'right'}}>Shopping</Text>
                        </View>
                        <View style={{justifyContent:'center' , paddingStart: 10}}>
                          <Icon name='angle-right' size={20}></Icon>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* View item history */}
                <TouchableOpacity onPress={() => handleChangeNavigationLimit('CHANGE_HISTORY')}>
                  <View style={styles.view_item_history}>
                    <View style={styles.icon_history}>
                      <Icon name='cart-shopping' size={16}></Icon>
                    </View>
                    <View style={styles.content_history}>
                      <View style={styles.content_left}>
                        <Text style={{fontSize: 20, color: 'black'}}>Note content</Text>
                        <Text >12.11.2002</Text>
                      </View>
                      <View style={styles.content_right}>
                        <View style={{justifyContent:'center' , paddingEnd: 5}}>
                          <Text style={{textAlign: 'right', color: 'red'}}>- 10000</Text>
                          <Text style={{textAlign: 'right'}}>Shopping</Text>
                        </View>
                        <View style={{justifyContent:'center' , paddingStart: 10}}>
                          <Icon name='angle-right' size={20}></Icon>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* View item history */}
                <TouchableOpacity onPress={() => handleChangeNavigationLimit('CHANGE_HISTORY')}>
                  <View style={styles.view_item_history}>
                    <View style={styles.icon_history}>
                      <Icon name='cart-shopping' size={16}></Icon>
                    </View>
                    <View style={styles.content_history}>
                      <View style={styles.content_left}>
                        <Text style={{fontSize: 20, color: 'black'}}>Note content</Text>
                        <Text >12.11.2002</Text>
                      </View>
                      <View style={styles.content_right}>
                        <View style={{justifyContent:'center' , paddingEnd: 5}}>
                          <Text style={{textAlign: 'right', color: 'red'}}>- 10000</Text>
                          <Text style={{textAlign: 'right'}}>Shopping</Text>
                        </View>
                        <View style={{justifyContent:'center' , paddingStart: 10}}>
                          <Icon name='angle-right' size={20}></Icon>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* View item history */}
                <TouchableOpacity onPress={() => handleChangeNavigationLimit('CHANGE_HISTORY')}>
                  <View style={styles.view_item_history}>
                    <View style={styles.icon_history}>
                      <Icon name='cart-shopping' size={16}></Icon>
                    </View>
                    <View style={styles.content_history}>
                      <View style={styles.content_left}>
                        <Text style={{fontSize: 20, color: 'black'}}>Note content</Text>
                        <Text >12.11.2002</Text>
                      </View>
                      <View style={styles.content_right}>
                        <View style={{justifyContent:'center' , paddingEnd: 5}}>
                          <Text style={{textAlign: 'right', color: 'red'}}>- 10000</Text>
                          <Text style={{textAlign: 'right'}}>Shopping</Text>
                        </View>
                        <View style={{justifyContent:'center' , paddingStart: 10}}>
                          <Icon name='angle-right' size={20}></Icon>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* View item history */}
                <TouchableOpacity onPress={() => handleChangeNavigationLimit('CHANGE_HISTORY')}>
                  <View style={styles.view_item_history}>
                    <View style={styles.icon_history}>
                      <Icon name='cart-shopping' size={16}></Icon>
                    </View>
                    <View style={styles.content_history}>
                      <View style={styles.content_left}>
                        <Text style={{fontSize: 20, color: 'black'}}>Note content</Text>
                        <Text >12.11.2002</Text>
                      </View>
                      <View style={styles.content_right}>
                        <View style={{justifyContent:'center' , paddingEnd: 5}}>
                          <Text style={{textAlign: 'right', color: 'red'}}>- 10000</Text>
                          <Text style={{textAlign: 'right'}}>Shopping</Text>
                        </View>
                        <View style={{justifyContent:'center' , paddingStart: 10}}>
                          <Icon name='angle-right' size={20}></Icon>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                {/* View item history */}
                <TouchableOpacity onPress={() => handleChangeNavigationLimit('CHANGE_HISTORY')}>
                  <View style={styles.view_item_history}>
                    <View style={styles.icon_history}>
                      <Icon name='cart-shopping' size={16}></Icon>
                    </View>
                    <View style={styles.content_history}>
                      <View style={styles.content_left}>
                        <Text style={{fontSize: 20, color: 'black'}}>Note content</Text>
                        <Text >12.11.2002</Text>
                      </View>
                      <View style={styles.content_right}>
                        <View style={{justifyContent:'center' , paddingEnd: 5}}>
                          <Text style={{textAlign: 'right', color: 'red'}}>- 10000</Text>
                          <Text style={{textAlign: 'right'}}>Shopping</Text>
                        </View>
                        <View style={{justifyContent:'center' , paddingStart: 10}}>
                          <Icon name='angle-right' size={20}></Icon>
                        </View>
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
}

export default InforLimitScreen

const styles = StyleSheet.create({
  view_card_limit: {
    justifyContent: 'center', 
    alignItems: 'center',
    height: 200,
    backgroundColor: 'white',
    
  },
  view_card : {
    width: 250,
    height: 150,
    backgroundColor: '#797272',
    borderRadius: 10

  },
  view_card_top: {
    paddingTop: 10,
    paddingStart: 10,
    paddingEnd: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  view_card_between: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view_card_bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingEnd:5,
    paddingStart: 10
  },
  view_history : {
    height: 550,
  },
  view_date : {
    height: 40,
    justifyContent: 'center',
    paddingStart: 20,
    backgroundColor: '#b8def3',
    borderRadius: 10
  },
  view_list_history: {
    marginStart: 10,
    marginEnd: 10,
  },
  view_item_history: {
    alignItems:'center',
    flexDirection: 'row',
    height: 70,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10
  },
  icon_history: {
    paddingStart: 20,
    paddingEnd: 10
  },
  content_history: {
    width: 310,
    height: 60,
    paddingStart: 10,
    flexDirection: 'row',
    justifyContent:"space-between"
  },
  content_left:{
    justifyContent: 'center',
  },
  content_right: {
    justifyContent: 'center',
    flexDirection: 'row'
  },

})