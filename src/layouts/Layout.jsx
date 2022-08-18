import React from 'react';
import Lnb from 'layouts/Lnb';

const Layout = () => {
    if ( window.location.pathname !== '/' ) {
        return (
            <div id="body">
            <Lnb/>
            <div id="main">

            </div>
        </div>
        );
      } else {
        return null;
      }
};

export default Layout;
