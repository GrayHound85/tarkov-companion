import { FlatList, Text, View, TextInput, Image, StyleSheet, Pressable } from 'react-native'
import { useState, useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import rawItems from '../../src/data/items.json'
const items: Item[] = rawItems

import { Item } from '../../src/types/item'


const styles = StyleSheet.create({
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 10,
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 6,
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
    },
    })


export default function ItemsScreen() {
    const [search, setSearch] = useState('')

    const filteredItems = useMemo(() => {
        return items.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        )
    }, [search])

    const renderItem = ({ item }: { item: Item }) => {
        return (
            <Link href={`/items/${item.id}`} asChild>
                <Pressable style={styles.itemRow}>
                    <Image
                        source={{ uri: item.iconImage }}
                        style={styles.icon}
                    />

                    <Text style={styles.name}>
                        {item.name}
                    </Text>
                </Pressable>
            </Link>
        )
    }

    return (
    <SafeAreaView style={{ flex: 1, padding: 10 }}>
      <TextInput
        placeholder="Search items..."
        value={search}
        onChangeText={setSearch}
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          marginBottom: 10,
          borderRadius: 8,
        }}
      />

      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    )
}