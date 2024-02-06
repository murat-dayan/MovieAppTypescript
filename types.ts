import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamsList={
    Movies: undefined,
    Series: undefined,
    Search: undefined,
    Profile:undefined
}

export type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamsList>