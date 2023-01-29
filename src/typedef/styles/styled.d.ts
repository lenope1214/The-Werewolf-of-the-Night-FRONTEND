import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    flex: {
      row: string;
      col: string;
    };
    colors: {
      brand500: string;
      brand100: string;
      red: string;
      yellow: string;
      grey: string;
      black: string;
    };
  }
}
