import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="mt-10 bg-red-400 h-40 w-40 items-center justify-center flex">
      <StatusBar style="auto" />
      <Text className="text-blue-600">Hehence</Text>
    </View>
  );
}


