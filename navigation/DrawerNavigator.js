import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigation";
import Profile from "../screens/Profile";
import LikedPost from "../screens/LikedPosts";
import Messages from "../screens/Messages";
import Settings from "../screens/Settings";
import About from "../screens/About";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StackNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
                        <Drawer.Screen name="LikedPosts" component={LikedPost} />
            <Drawer.Screen name="Messages" component={Messages} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="About" component={About} />

        </Drawer.Navigator>
    );
};

export default DrawerNavigator;