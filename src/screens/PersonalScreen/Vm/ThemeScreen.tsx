import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
const ThemeScreen = () => {
    const navigation = useNavigation();
    const handleNavigator = () => {
        navigation.goBack();
    };
    return (
        <SafeAreaView>
            <Text>Themme nha</Text>
            <TouchableOpacity onPress={handleNavigator}>
                <View>
                    <Text> back to personal</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default ThemeScreen;
