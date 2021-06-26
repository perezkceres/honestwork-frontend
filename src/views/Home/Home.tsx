import React from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie';
import { Image, Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import rot13 from '../../utils/encode'
// import LotteryCard from './components/LotteryCard'
import { isAddress } from '../../utils/web3'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import EarnAPRCard from './components/EarnAPRCard'
import EarnAssetCard from './components/EarnAssetCard'
import WinCard from './components/WinCard'
import MetaMask from './components/Metamask'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg/3a.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 50px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/egg/home.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
    min-width: 10%;
  min-height: 10%;
  width: 100%;
  height: 10%;
  
  align-items: center;
  display: flex;
  flex: 1;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 72px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const Home: React.FC = () => {
    const TranslateString = useI18n()
    const cookies = new Cookies();
    const aint = "It ain't much but it's Honest Work"

    return (
        <Page>
            <Hero>
                <Heading as="h1" size="xl" mb="14px" color="secondary">
                    Honest Farms
                </Heading>
                <Heading as="h1" size="m" mb="24px" color="secondary">
                {aint}
                </Heading>
                <Text>First fixed supply deflationary Farm on polygon</Text>
               
                <Heading as="h1" size="xl" mb="14px" color="secondary">
                    ...
                </Heading>
            </Hero>
             
            
            <div>
                <Cards>
                    <FarmStakingCard />
                    <TwitterCard />
                </Cards>
            
                <Cards>
                    <CakeStats />
                    <TotalValueLockedCard />
                    <MetaMask/>
                </Cards>
            </div>
            
        </Page>
    )
}

export default Home
