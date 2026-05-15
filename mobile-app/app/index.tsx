import { Text, StyleSheet } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { Link } from 'expo-router'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>

      <Link href="/items">
        Go To Items
      </Link>

      <Link href="/settings">
        Go To Settings
      </Link>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})