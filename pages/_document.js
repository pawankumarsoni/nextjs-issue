import Document, {Html, Head, Main, NextScript} from 'next/document';
import {theme} from '@utils/Theme';

const MyDocument = () => {
    return (
        <Html lang="en">
            <Head>
                <meta name="theme-color" content={theme.palette.primary.main}/>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}

MyDocument.getInitialProps = Document.getInitialProps;
MyDocument.renderDocument = Document.renderDocument;

export default MyDocument;
