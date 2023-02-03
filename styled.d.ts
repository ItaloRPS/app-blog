import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      darkText: string,
      secondary: string,
      white: string,
      mediumGray: string,
      darkerGray: string,
    },
    font: {
      family: {
        default: string,
      },
      sizes: {
        xsmall: string,
        small: string,
        medium: string,
        large: string,
        xlarge: string,
        xxlarge: string,
        huge: string,
        xhuge: string,
      },
    },
    media: {
      lteMedium: string,
      lteSmall: string,
    },
    spacings: {
      xsmall: string,
      small: string,
      medium: string,
      large: string,
      xlarge: string,
      xxlarge: string,
      huge: string,
      xhuge: string,
    },
    sizes: {
      max: string,
      content: string
    },
  }
}