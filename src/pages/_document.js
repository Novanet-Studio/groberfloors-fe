import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="keywords"
            content="Luxury Vinyl flooring, rigid vinyl flooring"
          />
          <meta
            name="description"
            content="Luxury Vinyl flooring is a type of rigid vinyl flooring that is designed to mimic the look and feel of natural materials like wood or stone. It is a popular choice for residential and commercial spaces due to its durability, water resistance, and ease of maintenance"
          />
          <meta name="author" content="@groberfloors" />
          <link rel="shortcut icon" href="/img/favicon.png" />
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
