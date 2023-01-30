// import "expo-status-bar"
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import ActionRow from "../components/ActionRow"

const HomeScreen = () => {
   return (
      <SafeAreaView className="flex-1 bg-gray-100 relative">
         <ScrollView>
            <TouchableOpacity className="absolute z-50 top-5 right-10 items-center">
               <Ionicons name="person-circle" size={30} color="#E59620" />
               <Text className="text-center text-[#E59620]">PRO/UPGRADE</Text>
            </TouchableOpacity>

            <Image
               source={{
                  uri: "https://i.imgur.com/e14NE49.png"
               }}
               className="h-64 w-full"
            />
            <ActionRow
               title="Track Workout"
               screen="Demo"
               color="#E59620"
               icon="fitness"
               vertical
            />
         </ScrollView>
      </SafeAreaView>
   )
}
export default HomeScreen
