
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        const setInitialTheme = `
        function getUserPreference() {
            if(window.localStorage.getItem('dark')==='true') {
                console.log("set initial theme is getting dark=true from LS",window.localStorage.getItem('dark'));
                return 'dark'
            } else if(window.localStorage.getItem('dark')==='false'){
                console.log("set initial theme is getting dark=false from LS",window.localStorage.getItem('dark'));
                return 'light'
            }
            console.log('running outside of the if logic');
            return window.matchMedia('(prefers-color-scheme: dark)').matches
        }
        document.body.dataset.theme = getUserPreference();
        `;
        return (
        <Html>
            <Head />
            <body>
            <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
            <Main />
            <NextScript />
            </body>
        </Html>
        );
    }
}

export default MyDocument;