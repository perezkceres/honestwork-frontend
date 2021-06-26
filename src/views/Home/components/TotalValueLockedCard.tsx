import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`


background: linear-gradient(135deg, orange 60%, cyan);
background-image: url('/images/egg/tvl.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
    min-width: 10%;
  min-height: 10%;
  width: 10%;
  height: 100%;
  
  align-items: center;
  display: flex;
  flex: 2;
`


const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue();
  const tvl = totalValue.toNumber();
  const realValue = tvl;
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading size="lg" mb="24px">
          {TranslateString(999, 'Total Value Locked (TVL)')}
        </Heading>
        <>
          {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
          {/* <Heading size="xl"> */}
            <CardValue value={realValue} prefix="$" decimals={2}/>
          {/* </Heading> */}
          <Text color="textSubtle">Across All Barns</Text>
        </>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
