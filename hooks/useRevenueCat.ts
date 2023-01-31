import { useEffect, useState } from "react"
import { Platform } from "react-native"
import { CustomerInfo, PurchasesOffering } from "react-native-purchases"
import Purchases from "react-native-purchases/dist/purchases"

const APIKeys ={
   apple: "",
   google: ""
}

const useRevenueCat = () => {
   const [currentOffering, setCurrentOffering] = useState<PurchasesOffering|null>(null) 
   const [customerInfo, setCustomerInfo] = useState<CustomerInfo|null>(null) 

   const isProMember = customerInfo?.activeSubscriptions.includes("proMonthly") || customerInfo?.activeSubscriptions.includes("proYearly") 

   useEffect(()=>{
      const fetchData = async () =>{
         Purchases.setDebugLogsEnabled(true)
         if(Platform.OS === "android"){
            await Purchases.configure({
               apiKey: APIKeys.google
            })
         }else{
            await Purchases.configure({
               apiKey: APIKeys.apple
            })
         }

         const offerings = await Purchases.getOfferings()
         const customerInfo = await Purchases.getCustomerInfo()

         setCurrentOffering(offerings.current)
         setCustomerInfo(customerInfo)
      }
      fetchData().catch(console.error)
   },[])

   useEffect(() => {
      const customerInfoUpdated = async (purchaserInfo: CustomerInfo) =>{
         setCustomerInfo(purchaserInfo)
      }
      Purchases.addCustomerInfoUpdateListener(customerInfoUpdated)
   }, [])

   return {
      currentOffering,
      customerInfo,
      isProMember
   }
}
export default useRevenueCat
