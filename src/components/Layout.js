import React from 'react';
import Navbar from './Navbar';
import SetLogoText from '../logo/containers/SetLogoText';
import GenerateLogos from '../logo/containers/GenerateLogos';

class Layout extends React.Component {

    render() {
        return (
            <div>
                <Navbar />

                <div className="logomator-base">
                    <SetLogoText />

                    <div className="selection container-fluid">
                        <div className="row">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;