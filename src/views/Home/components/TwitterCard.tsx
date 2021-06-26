import React from 'react'
import { Card, CardBody, Heading,LinkExternal,Flex, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms } from '../../../state/hooks'
import rug from  './rug.png'


const StyledTwitterCard = styled(Card)`
background-image: url('/images/egg/twitter.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
    min-width: 10%;
  min-height: 10%;
  width: 10%;
  height: 100%;
  center: right;
  
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(10003, 'Announcements')}
        </Heading>
        <Flex flexDirection="row" mb="15px">
        <Heading size="l" mb="24px" color="secondary">
        token go livee : 🚜
        </Heading>
        <LinkExternal mb="5px" small href="https://quickswap.exchange/#/swap?outputCurrency=0x4dA646B71014332AE8370017d05205346d3ca50A">
        BUY 
          </LinkExternal>
          </Flex>
          <Heading size="l" mb="24px" color="secondary">
        Farming Starts:
        </Heading>
          <Heading size="l" mb="24px" color="secondary">
        RugDoc Review:
        </Heading>
          <Flex flexDirection="row" mb="15px">
          <LinkExternal mb="5px" small href="https://rugdoc.io/project/honest-farms/">
          <img  src={rug} alt="rug"/>
          </LinkExternal>
          </Flex>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'Polyhonest'
          }}
          options={{
            height: '300',
            chrome: "noheader, nofooter",
            width: "400"
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
