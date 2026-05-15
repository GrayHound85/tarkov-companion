import { View, Text, Image, ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import rawItems from '../../src/data/items.json'
import { Item } from '../../src/types/item'

const items: Item[] = rawItems as Item[]

export default function ItemDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const item = items.find((i) => i.id === id)

  if (!item) {
    return (
      <SafeAreaView>
        <Text>Item not found</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          {item.name}
        </Text>

        <Text style={{ marginBottom: 10, opacity: 0.7 }}>
          {item.shortName}
        </Text>

        <Image
          source={{ uri: item.bannerImage }}
          style={{
            width: '100%',
            height: 200,
            borderRadius: 10,
            marginBottom: 15,
          }}
          resizeMode="cover"
        />

        <Text style={{ fontSize: 16 }}>
          {item.description}
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}