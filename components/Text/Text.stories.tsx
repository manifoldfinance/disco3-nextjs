import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Text } from './index'

export default {
  title: 'Components/Typography/Text',
  component: Text,
} as ComponentMeta<typeof Text>

export const Text6xl: React.VFC<{}> = () => (
  <Text size="6xl">Whereas recognition of the inherent dignity</Text>
)

export const Text5xl: React.VFC<{}> = () => (
  <Text size="5xl">Whereas recognition of the inherent dignity</Text>
)

export const Text4xl: React.VFC<{}> = () => (
  <Text size="4xl">беручи до уваги, що народи Об'єднаних Націй</Text>
)

export const Text3xl: React.VFC<{}> = () => (
  <Text size="3xl">Όλοι οι άνθρωποι γεννιούνται ελεύθεροι και</Text>
)

export const Text2xl: React.VFC<{}> = () => (
  <Text size="2xl">Whereas recognition of the inherent dignity</Text>
)

export const TextXl: React.VFC<{}> = () => (
  <Text size="xl">Whereas recognition of the inherent dignity</Text>
)

export const TextLg: React.VFC<{}> = () => (
  <Text size="lg">Whereas recognition of the inherent dignity</Text>
)

export const TextMd: React.VFC<{}> = () => (
  <Text size="md">Whereas recognition of the inherent dignity</Text>
)

export const TextSm: React.VFC<{}> = () => (
  <Text size="sm">Whereas recognition of the inherent dignity</Text>
)

export const TextXs: React.VFC<{}> = () => (
  <Text size="xs">Whereas recognition of the inherent dignity</Text>
)
