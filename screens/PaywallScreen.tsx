import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { RootStackParamsList } from "../App"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Paywall"
>

const PaywallScreen = () => {
   const navigation = useNavigation<NavigationProp>()

   return (
      <ScrollView className="bg-[#1A2F44] flex-1">
         <View className="m-10 space-y-2">
            <Text className="text-2xl text-center uppercase text-white font-bold">
               Upgrade
            </Text>
            <Text className="text-center text-white">
               Upgrade to Pro to access all the Features
            </Text>
         </View>
         <TouchableOpacity
            onPress={navigation.goBack}
         >
            <Ionicons
               name="md-close-circle-sharp"
               size={32}
               color="#E5962D"
            />
         </TouchableOpacity>
         <View>
            <View className="flex-row space-x-10 items-center">
               <Ionicons
                  name="md-key"
                  size={32}
                  color="#E5962D"
               />
               <View className="flex-1">
                  <Text className="text-white font-bold text-lg">
                     Access to all pro features
                  </Text>
                  <Text className="text-white text-sm font-extralight">
                     Upgrade to the premium version of the app and enjoy all the exclusive features available only to pro users.{" "}
                  </Text>
               </View>
            </View>

            <View className="flex-row space-x-10 items-center">
               <Ionicons
                  name="md-person-add-outline"
                  size={32}
                  color="#E5962D"
               />
               <View className="flex-1">
                  <Text className="text-white font-bold text-lg">
                     Helpline 24/7 to Personal Trainers
                  </Text>
                  <Text className="text-white text-sm font-extralight">
                     Get unlimted acccess to our fitness support team and get help anytime you need it - day or night.{" "}
                  </Text>
               </View>
            </View>

            <View className="flex-row space-x-10 items-center">
               <Ionicons
                  name="md-star"
                  size={32}
                  color="#E5962D"
               />
               <View className="flex-1">
                  <Text className="text-white font-bold text-lg">
                     Unlock Limited Edition Content
                  </Text>
                  <Text className="text-white text-sm font-extralight">
                     Unlock exclusive content that you can't get anywhere else, like special exlusive workouts and routines
                  </Text>
               </View>
            </View>

         </View>
      </ScrollView>
   )
}
export default PaywallScreen
