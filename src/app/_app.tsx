import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"
import useDarkMode from 'use-dark-mode';
import { Switch, useTheme } from '@nextui-org/react'


const darkTheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
        colors: {
            // brand colors
            primaryLight: '$green200',
            primaryLightHover: '$green300',
            primaryLightActive: '$green400',
            primaryLightContrast: '$green600',
            primary: '#4ADE7B',
            primaryBorder: '$green500',
            primaryBorderHover: '$green600',
            primarySolidHover: '$green700',
            primarySolidContrast: '$white',
            primaryShadow: '$green500',

            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#5E1DAD',

            // you can also create your own color
            myColor: '#ff4ecd'

            // ...  more colors
        },
        space: {},
        fonts: {},
        breakpoints:{
            maxSm: '640px',
        }
    }
});

const lightTheme = createTheme(
    {
        type: "light", // it could be "light" or "dark"
        theme: {
            colors: {
                // brand colors
                primaryLight: '$green200',
                primaryLightHover: '$green300',
                primaryLightActive: '$green400',
                primaryLightContrast: '$green600',
                primary: '#4ADE7B',
                primaryBorder: '$green500',
                primaryBorderHover: '$green600',
                primarySolidHover: '$green700',
                primarySolidContrast: '$white',
                primaryShadow: '$green500',

                gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
                link: '#5E1DAD',



                // you can also create your own color
                myColor: '#ff4ecd'

                // ...  more colors
            },
            space: {},
            fonts: {}
        }

    });


function MyApp({ Component, pageProps }: AppProps) {
  const { type, isDark } = useTheme();
    console.log(type, isDark);
    return (
        <>
                <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
                    <Component {...pageProps} />
                </NextUIProvider>
        </>
    );
}

export default MyApp;
