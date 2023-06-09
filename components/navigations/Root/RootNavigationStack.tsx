import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootBottomTab } from "../RootBottomTab/RootBottomTab";

const Stack = createNativeStackNavigator();

export const RootNavigationStack: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="RootBottomTab" component={RootBottomTab} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );
}