import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from "react-native"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"
import { RootStackParamsList } from "../App"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"
import useRevenueCat from "../hooks/useRevenueCat"
import Purchases from "react-native-purchases"

export type NavigationProp = NativeStackNavigationProp<
   RootStackParamsList,
   "Paywall"
>

const PaywallScreen = () => {
   const navigation = useNavigation<NavigationProp>()
   const { currentOffering } = useRevenueCat()

   const handleMonthlyPurchase = async () => {
      if(!currentOffering?.monthly){
         return
      }
      const purchaseInfo = await Purchases.purchasePackage(currentOffering?.monthly)

      console.log("YOU BOUGHT THE >>", purchaseInfo.customerInfo.entitlements.active)

      if(purchaseInfo.customerInfo.entitlements.active.pro){
         navigation.goBack()
      }
   }

   const handleAnnualPurchase = async () =>{
      if(!currentOffering?.annual){
         return
      }
      const purchaseInfo = await Purchases.purchasePackage(currentOffering?.annual)

      console.log("YOU BOUGHT THE >>", purchaseInfo.customerInfo.entitlements.active)

      if(purchaseInfo.customerInfo.entitlements.active.pro){
         navigation.goBack()
      }
   }

   const restorePurchases = async () => {
      const purchaseInfo = await Purchases.restorePurchases()

      if(purchaseInfo.activeSubscriptions.length > 0){
         Alert.alert("Success", "Your purchase has been restored")
      }else{
         Alert.alert("Error", "No purchases to restore")
      }
   }

   if(!currentOffering){
      return (
         <View className="bg-[#1A2F44] flex-1 p-10">
            <ActivityIndicator size={"large"} color="#E5962D"/>
         </View>
      )
   }

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
            className="absolute top-0 right-0 p-5"
            onPress={navigation.goBack}
         >
            <Ionicons
               name="md-close-circle-sharp"
               size={32}
               color="#E5962D"
            />
         </TouchableOpacity>

         <View className="items-center">
            <MaterialCommunityIcons
               name="trophy-award"
               size={150}
               color="#E5962D"
            />
         </View>

         <View className="space-y-5 px-10 py-5">
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

         <TouchableOpacity 
            className="items-center px-10 py-5 bg-[#E5962D] mx-10 rounded-full"
            onPress={handleMonthlyPurchase}
         >
            <Text className="text-white text-md text-center font-bold mb-1">FREE trail for 1 week...</Text>
            <Text className="text-white">{currentOffering.monthly?.product.priceString}/month after</Text>
         </TouchableOpacity>

         {currentOffering.annual && (
            <TouchableOpacity 
               className="items-center px-10 py-5 bg-[#E5962D] mx-10 rounded-full mt-2"
               onPress={handleAnnualPurchase}
            >
               <Text className="text-white text-md text-center font-bold mb-1">
                  Save{" "}
                  {(
                     (1 -
                        currentOffering.annual?.product.price! /   
                        (currentOffering.monthly?.product.price! * 12)
                     ) * 100
                  ).toPrecision(2)}
                  % Annually
               </Text>
               <Text className="text-white">{currentOffering.annual?.product.priceString}/year</Text>
            </TouchableOpacity>
         )}
         
         <TouchableOpacity className="m-5" onPress={restorePurchases}>
            <Text className="text-center text-[#E5962D]">Restore Purchases</Text>
         </TouchableOpacity>
      </ScrollView>
   )
}
export default PaywallScreen
