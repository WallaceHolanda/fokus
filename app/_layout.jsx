import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
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
                        drawerItemStyle: { display: 'none' },
                        title: '',
                        headerLeft: () => {
                            return <Ionicons
                                name='arrow-back'
                                size={24}
                                color='#FFF'
                                style={{ marginLeft: 16 }}
                                onPress={() => router.navigate('/tasks')}
                            />
                        },

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
                        drawerLabel: 'Lista de Tarefas',
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
