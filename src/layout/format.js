import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import NavigationComponent from '../components/NavigationComponet';

const Format = ({ children }) => {
    return (<div className='screen'>
        <HeaderComponent />
        <div className='app' >
            <NavigationComponent />
            <main>
                {children}
            </main>
        </div>
    </div >);
}

export default Format;