import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import ProductDetails1 from "./screens/ProductDetails1";
import ProductDetails2 from "./screens/ProductDetails2";

const Stack = createNativeStackNavigator();
const Stack2 = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ProductDetails1" component={ProductDetails1} />
            <Stack.Screen name="ProductDetails2" component={ProductDetails2} />
        </Stack.Navigator>
    );
}



function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#FFF",
                tabBarInactiveTintColor: "lightgray",
                tabBarStyle: { backgroundColor: "#6d56f9" },
            }}>
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="home-variant"
                            size={36}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="account"
                            size={36}
                            color={color}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

export default function Routes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="TabRoutes" component={TabRoutes} />
        </Stack.Navigator>
    );
}
