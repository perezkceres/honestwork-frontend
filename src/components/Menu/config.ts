import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy',
        href: 'https://quickswap.exchange/#/swap?inputCurrency=0xb3694901fCa2376c40986c1bf5ffdf8781f49389',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0xb3694901fCa2376c40986c1bf5ffdf8781f49389',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Barn',
    icon: 'PoolIcon',
    href: '/pools',
  },


  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: '/nft',
  },
 
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap Chart',
        href: 'https://info.quickswap.exchange/token/0x4dA646B71014332AE8370017d05205346d3ca50A',
      },
      {
        label: 'Polygon Explorer',
        href: 'https://polygonscan.com/token/0x4dA646B71014332AE8370017d05205346d3ca50A',
      },
      {
        label: 'honest Chart',
        href: 'https://quickchart.app/token/0x4dA646B71014332AE8370017d05205346d3ca50A'
      }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/HonestWorkFarm/",
      },
      {
        label: "Blog",
        href: "https://medium.com/@honestwork",
      },
      {
        label: "Docs",
        href: "https://honestwork.gitbook.io/honestwork-farms/",
      },
    ],
  },
  {
    label: "APR Pumpamentals",
    icon: "RoadmapIcon",
    href: 'https://honestwork.gitbook.io/honestwork-farms/farms-pools/farm-pumpamentals',
  },
  {
    label: "Collab",
    icon: "HandshakeIcon",
    href: 'https://t.me/honestworkfarms',
  }
]

export default config
