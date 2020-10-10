import React from 'react';
import brain from './brain.png';
import Tilt from 'react-tilt';
import 'tachyons';

const Navigation = () => {
    return (
        <div className=' br3 shadow-3 ma4 mt0' >
            <Tilt>
                <div>
                    <img style={{ paddingTop: '20px' }} alt='logo' src={brain} />
                </div>
            </Tilt>
        </div>
    );
}

export default Navigation;