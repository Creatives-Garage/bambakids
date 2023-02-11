import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* 
            <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> 
          */}
          <meta name="robots" content="all" />
          <meta name="googlebot" content="index,follow" />
          <meta property="og:type" content="website" key="og-type" />
          <meta
            property="og:url"
            content="bambakids.org"
            key="og-url"
          />
          <meta
            property="og:title"
            content="Bamba Kids"
            key="og-title"
          />
          <meta
            property="og:description"
            content="With the Bamba kids app , the young ones can read digital books, play educational games, be enlightened with general knowledge facts"
            key="og-description"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800;900&family=Nunito:wght@400;500;600;700;800;900;1000&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;