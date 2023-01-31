import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SafeAreaView, Text, View } from "react-native"
import DemoScreen from "./screens/DemoScreen"
import HomeScreen from "./screens/HomeScreen"
import PaywallScreen from "./screens/PaywallScreen"

export type RootStackParamsList = {
   Home: undefined
   Paywall: undefined
   Demo: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen 
               options={{
                  headerShown: false
               }}
               name="Home" component={HomeScreen} 
            />
            <Stack.Screen
               options={{
                  headerShown: false
               }}
               name="Demo" 
               component={DemoScreen} 
            />
            <Stack.Screen
               options={{
                  headerShown: false
               }}
               name="Paywall" 
               component={PaywallScreen} 
            />
         </Stack.Navigator>
      </NavigationContainer>
   )
}
