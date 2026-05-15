import { FlatList, Text, View } from 'react-native'

import rawItems from '../../src/data/items.json'
const items: Item[] = rawItems

import { Item } from '../../src/types/item'


export default function ItemsScreen() {
    const renderItem = ({ item }: { item: Item }) => {
        return (
            <View>
                <Text>{item.name}</Text>
            </View>
        )
    }

    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    )
}