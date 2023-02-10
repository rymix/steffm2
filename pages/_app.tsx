import Metadata from "components/pages/Metadata";
import StyledApp from "components/pages/StyledApp";
import { MenuProvider } from "contexts/menu";
import { ProcessProvider } from "contexts/process";
import { SessionProvider } from "contexts/session";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <ProcessProvider>
    <SessionProvider>
      <StyledApp>
        <Metadata />
        <MenuProvider>
          <Component {...pageProps} />
        </MenuProvider>
      </StyledApp>
    </SessionProvider>
  </ProcessProvider>
);

export default App;
