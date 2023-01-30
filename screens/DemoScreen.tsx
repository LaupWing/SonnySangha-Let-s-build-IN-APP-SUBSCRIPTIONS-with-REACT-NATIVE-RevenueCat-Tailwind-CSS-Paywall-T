import { View, Text, SafeAreaView } from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { NativeStackNavigationProp } from "@react-navigation/native"
import { RootStackParamsList } from "../App"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Demo"
>

const DemoScreen = () => {
   const navigation = useN

   return (
      <SafeAreaView>
         <Text>DemoScreen</Text>
      </SafeAreaView>
   )
}
export default DemoScreen
