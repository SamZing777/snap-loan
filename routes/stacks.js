import { createStackNavigator } from "react-navigation-stack";

import Index from '../screens/index';
import About from '../screens/about';
import Contact from '../screens/contact';
import Customer from '../screens/customer';
import Settings from '../screens/settings';
import Register from '../screens/register';
import Login from '../screens/login';
import Apply from '../screens/apply';


const Stack = createStackNavigator();

const ScreenStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Customer" component={Customer} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Apply" component={Apply} />
        </Stack.Navigator>
    )
}

export default ScreenStack;
