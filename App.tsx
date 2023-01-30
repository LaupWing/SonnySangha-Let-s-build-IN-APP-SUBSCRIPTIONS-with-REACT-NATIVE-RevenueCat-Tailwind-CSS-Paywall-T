import { StatusBar } from "expo-status-bar"
import { SafeAreaView, Text, View } from "react-native"

export default function App() {
   return (
      <SafeAreaView className="p-10 text-red-400">
         <Text>Open up App.tsx to start working on your app!</Text>
         <StatusBar style="auto" />
      </SafeAreaView>
   )
}
