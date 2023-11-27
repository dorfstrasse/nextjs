'use client';

import {ThemeProvider as NextThemeProviders} from 'next-themes';

export function ThemeProvider({children, ...props}) {
    return <NextThemeProviders {...props}>
        {children}
    </NextThemeProviders>
}