import type { NextPage } from 'next'
import { Center } from '../components/Center'
import { Heading } from '../components/Heading'
import { Button } from '../components/Button'
import { AutoLayout } from '../components/AutoLayout'
import { Flex } from '../components/Flex'
import { Box } from '../components/Box'
import { Text } from '../components/Text'
import { ThemeToggle } from '../utils/components/ThemeToggle'

const Home: NextPage = () => {
  return (
    <Box>
      <Flex
        css={{
          justifyContent: 'space-between',
          p: '$2',
          mb: '$6',
          boxShadow: '0 1px 1px $colors$subtleBorder',
        }}
      >
        <Text>v0.0.1</Text>
        <ThemeToggle />
      </Flex>
      <Center>
        <AutoLayout>
          <Heading>disco3</Heading>
          <AutoLayout css={{ gap: '$4' }}>
           <br />
          </AutoLayout>
        </AutoLayout>
      </Center>
    </Box>
  )
}

export default Home
