import { ThemeProvider } from '@/components/theme-provider';
import { ReactNode } from 'react';

interface wrapperProps {
	children: ReactNode;
}

const Wrapper = ({ children }: wrapperProps) => {
	return (
		<ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
			{children}
		</ThemeProvider>
	);
};

export default Wrapper;
