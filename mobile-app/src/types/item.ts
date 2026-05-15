import { NativeURLListener } from "expo-linking"

export type Item = {
    id: string
    name: string
    shortName: string
    types: string[]
    description: string | null
    size: {
        width: number
        height: number
    }
    wikiLink: string
    iconImage: string
    bannerImage: string

}