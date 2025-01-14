import { WalletConnectAdapter } from '@shapeshiftoss/hdwallet-walletconnect'
import { WalletConnectIcon } from 'components/Icons/WalletConnectIcon'
import { SupportedWalletInfo } from 'context/WalletProvider/config'

export const WalletConnectConfig: Omit<SupportedWalletInfo, 'routes'> = {
  adapter: WalletConnectAdapter,
  supportsMobile: 'both',
  icon: WalletConnectIcon,
  name: 'WalletConnect',
}
