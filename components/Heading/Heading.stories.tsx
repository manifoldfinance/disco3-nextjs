import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Heading } from './index'

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>

export const Heading6xl: React.VFC<{}> = () => (
  <Heading size="6xl">Whereas recognition of the inherent dignity</Heading>
)

export const Heading5xl: React.VFC<{}> = () => (
  <Heading size="5xl">Whereas recognition of the inherent dignity</Heading>
)

export const Heading4xl: React.VFC<{}> = () => (
  <Heading size="4xl">Whereas recognition of the inherent dignity</Heading>
)

export const Heading3xl: React.VFC<{}> = () => (
  <Heading size="3xl">Whereas recognition of the inherent dignity</Heading>
)

export const Heading2xl: React.VFC<{}> = () => (
  <Heading size="2xl">Whereas recognition of the inherent dignity</Heading>
)

export const HeadingXl: React.VFC<{}> = () => (
  <Heading size="xl">Whereas recognition of the inherent dignity</Heading>
)

export const HeadingLg: React.VFC<{}> = () => (
  <Heading size="lg">Whereas recognition of the inherent dignity</Heading>
)

export const HeadingMd: React.VFC<{}> = () => (
  <Heading size="md">Whereas recognition of the inherent dignity</Heading>
)

export const HeadingSm: React.VFC<{}> = () => (
  <Heading size="sm">Whereas recognition of the inherent dignity</Heading>
)

export const HeadingXs: React.VFC<{}> = () => (
  <Heading size="xs">Whereas recognition of the inherent dignity</Heading>
)
