import Document, { DocumentContext } from 'next/document'

import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const cache = createCache()
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <StyleProvider cache={cache}>
                <App {...props} />
              </StyleProvider>
            )
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {/* This is hack, `extractStyle` does not currently support returning JSX or related data. */}
            <script
              dangerouslySetInnerHTML={{
                __html: `</script>${extractStyle(cache)}<script>`
              }}
            />
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}
