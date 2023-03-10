// import "expo-status-bar"
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import ActionRow from "../components/ActionRow"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamsList } from "../App"
import { useNavigation } from "@react-navigation/native"
import useRevenueCat from "../hooks/useRevenueCat"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Home"
>

const HomeScreen = () => {
   const navigation = useNavigation<NavigationProp>()
   const { isProMember } = useRevenueCat()

   return (
      <SafeAreaView className="flex-1 bg-gray-100 relative">
         <ScrollView>
            <TouchableOpacity 
               className="absolute z-50 top-5 right-10 items-center"
               onPress={() => navigation.navigate("Paywall")}   
            >
               <Ionicons name="person-circle" size={30} color="#E59620" />
               <Text className="text-center text-[#E59620]">{
                  isProMember 
                     ? "PRO"
                     : "UPGRADE"
                  }
               </Text>
            </TouchableOpacity>

            <Image
               source={{
                  uri: "https://i.imgur.com/e14NE49.png"
               }}
               className="h-64 w-full"
            />
            <View className="mx-5">
               <View className="flex-row space-x-2">
                  <ActionRow
                     title="Track Workout"
                     screen="Demo"
                     color="#E59620"
                     icon="fitness"
                     vertical
                  />
                  <ActionRow
                     title="Browse Workouts"
                     screen="Demo"
                     color="#1982C4"
                     icon="library"
                     vertical
                  />
               </View>
               <ActionRow
                  title="Connect with Friends"
                  screen="Demo"
                  color="#F44174"
                  icon="share-social"
               />
               <ActionRow
                  title="Add an Exercise"
                  screen="Demo"
                  color="#8AC926"
                  icon="add-circle"
                  requiresPro
               />
               <ActionRow
                  title="Create a Routine"
                  screen="Demo"
                  color="#C03221"
                  icon="md-time"
                  requiresPro
               />
               <ActionRow
                  title="Join Challanges"
                  screen="Demo"
                  color="#23967F"
                  icon="trophy"
                  requiresPro
               />
            </View>
         </ScrollView>
      </SafeAreaView>
   )
}
export default HomeScreen
