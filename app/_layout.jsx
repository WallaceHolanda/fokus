import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                screenOptions={{
                    headerTintColor: '#FFF',
                    headerStyle: {
                        backgroundColor: '#021123',
                    },
                    drawerStyle: {
                        backgroundColor: '#021123',
                    },
                    drawerLabelStyle: {
                        color: '#FFF',
                    }
                }}
            >
                <Drawer.Screen
                    name='index'
                    options={{
                        headerShown: false,
                        drawerItemStyle: {
                            display: 'none',
                        }
                    }}
                />
                <Drawer.Screen
                    name='add-task/index'
                    options={{
                        drawerItemStyle: {
                            display: 'none',
                        }
                    }}
                />
                <Drawer.Screen
                    name='pomodoro'
                    options={{
                        title: '',
                        drawerLabel: 'Timer',
                    }}
                />
                <Drawer.Screen
                    name='tasks/index'
                    options={{
                        title: '',
                        drawerLabel: 'TLista de Tarefas',
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
