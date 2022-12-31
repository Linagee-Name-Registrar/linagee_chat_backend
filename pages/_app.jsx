// import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
// import { publicProvider } from 'wagmi/providers/public';
// import { SessionProvider } from 'next-auth/react';

import '../styles/global.scss';

import '@rainbow-me/rainbowkit/styles.css';
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  wallet,
  AvatarComponent,
} from '@rainbow-me/rainbowkit';
import { CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import { createTheme } from '@mui/material/styles';



import { Theme } from '@rainbow-me/rainbowkit';


import dynamic from 'next/dynamic';
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { SessionProvider } from 'next-auth/react';


const { provider, webSocketProvider, chains } = configureChains(defaultChains, [publicProvider()]);

const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains,
});

const client = createClient({
    provider,
    webSocketProvider,
    autoConnect: false,
    // added connectors from rainbowkit
    connectors,
});

const ResponsiveAppBar = dynamic(() => import('../components/AppBar'), { ssr: false });



  //-------------CUSTOM THEME------------------------

  const theme = createTheme({
    palette: {
        primary: {
            main: "#a89be1",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#dabaee",
            contrastText: "#ffffff",
        },
        success: {
          main: "#9afa92",
          contrastText: "ffffff"
        },
    },
  });
  
  
  const myCustomTheme= {
    blurs: {
      modalOverlay: '...',
    },
    colors: {
      accentColor: 'white',
      accentColorForeground: '#1d1d1d',
      actionButtonBorder: 'solid black 2px',
      actionButtonBorderMobile: 'solid black 2px',
      actionButtonSecondaryBackground: 'white',
      closeButton: '...',
      closeButtonBackground: '...',
      connectButtonBackground: 'white',
      connectButtonBackgroundError: 'red',
      connectButtonInnerBackground: 'white',
      connectButtonText: '#1d1d1d',
      connectButtonTextError: '...',
      connectionIndicator: '#1d1d1d',
      error: '...',
      generalBorder: '...',
      generalBorderDim: '...',
      menuItemBackground: '...',
      modalBackdrop: '...',
      modalBackground: 'white',
      modalBorder: 'solid black 2px',
      modalText: 'black',
      modalTextDim: '...',
      modalTextSecondary: '...',
      profileAction: '...',
      profileActionHover: '...',
      profileForeground: '...',
      selectedOptionBorder: '...',
      standby: '...',
    },
    fonts: {
      body: '...',
    },
    radii: {
      actionButton: '6px',
      connectButton: '6px',
      menuButton: '6px',
      modal: '6px',
      modalMobile: '6px',
    },
    shadows: {
      connectButton: 'medium',
      dialog: '...',
      profileDetailsAction: '...',
      selectedOption: '...',
      selectedWallet: '...',
      walletLogo: '...',
    },
  };
  

function MyApp({ Component, pageProps }) {
    return (
        <WagmiConfig client={client}>
            <RainbowKitProvider theme={myCustomTheme} chains={chains} coolMode>
        
            <ThemeProvider theme={theme}> 
                <SessionProvider session={pageProps.session} refetchInterval={0}>
                    <div className="provider">
                        <div className="header">
                            <ResponsiveAppBar/>
                        </div>
                        <Component {...pageProps} />
                    </div>
                </SessionProvider>
             </ThemeProvider>

            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default MyApp;
