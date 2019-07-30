import React from 'react';

import { Router, Scene, Stack } from 'react-native-router-flux';
import Home from './Home';
import DrawerContent from './components/DrawerContent';

const ScreenRoute = () => {
        return (
            <Router>
                <Stack key="root">
                    <Scene 
                        drawer
                        contentComponent={DrawerContent}
                        drawerWidth = {250}
                        hideDrawerButton={true}
                        hideNavBar={true}
                    >
                        <Scene key="home" component={Home} title="Home" hideNavBar={true}/>
                    </Scene>
                </Stack>
            </Router>
        );
}

export default ScreenRoute;