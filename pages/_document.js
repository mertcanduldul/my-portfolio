import NextDocument, { Html, Head, Main, NextScript } from 'next/document';


export default class MyDocument extends NextDocument {
    static getInitialProps(ctx) {
        return NextDocument.getInitialProps(ctx);
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/Inter-roman.var.woff2?v=3.15"
                        as="font"
                        type="font/woff2"
                        crossOrigin="anonymous"
                    />

                    {/* base */}
                    <meta charSet="utf-8" />
                    <meta name="robots" content="follow, index" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta name="description" />
                    <link rel="canonical" />

                    {/* facebook */}
                    <meta property="og:url" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" />
                    <meta property="og:description" />

                    {/* twitter */}
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:url" />
                    <meta name="twitter:title" />
                    <meta name="twitter:description" />

                    {/* pwa */}
                    <link href="/static/icons/site.webmanifest" rel="manifest" />
                    <link
                        href="/static/icons/icon-apple-touch-icon.png"
                        rel="apple-touch-icon"
                        sizes="180x180"
                    />
                    <link
                        href="/static/icons/icon-favicon-32x32.png"
                        rel="icon"
                        sizes="32x32"
                        type="image/png"
                    />
                    <link
                        href="/static/icons/icon-favicon-16x16.png"
                        rel="icon"
                        sizes="16x16"
                        type="image/png"
                    />
                    <link
                        color="#ffffff"
                        href="/static/icons/icon-safari-pinned-tab.svg"
                        rel="mask-icon"
                    />
                    <meta content="#ffffff" name="theme-color" />
                    <meta content="#ffffff" name="msapplication-TileColor" />
                </Head>

                <body
                    className="bg-white text-gray-600 antialiased
      dark:bg-gray-900 dark:text-gray-400"
                >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}