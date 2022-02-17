import type { NextPage } from 'next'
import {ContributeToFund} from '@gofundust/components'

const Home: NextPage = () => {
  return (
  <>
  <ContributeToFund  fundAddress='terra1xtqzqdw0vlg3933fq73nuwvsaruyry0n4up6fc'/>
  </>
  )
}

export default Home
