import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Provider} from "overmind-react";
import {theme} from '@utils/Theme';
import {overmind} from '@utils/OvermindHelper'

React.useLayoutEffect = React.useEffect;

const _app = (props) => {
    const {Component, pageProps} = props;

    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <Provider value={overmind}>
            <React.Fragment>

                <ThemeProvider theme={theme}>
                    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </React.Fragment>
        </Provider>
    );
};

_app.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default _app;
