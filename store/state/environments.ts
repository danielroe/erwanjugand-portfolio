import { IconStyle } from '~/composables/useIcon'

export interface Environment {
  title: string
  icon: Icon
}

export const environments: Environment[] = [
  {
    title: 'VSCode',
    icon: {
      style: IconStyle.custom,
      name: 'visualStudioCode',
    },
  },
  {
    title: 'Git',
    icon: {
      style: IconStyle.brand,
      name: 'gitAlt',
    },
  },
  {
    title: 'Ubuntu (WSL)',
    icon: {
      style: IconStyle.brand,
      name: 'ubuntu',
    },
  },
  {
    title: 'Terminal',
    icon: {
      style: IconStyle.solid,
      name: 'rectangleTerminal',
    },
  },
  {
    title: 'Adobe',
    icon: {
      style: IconStyle.custom,
      name: 'adobe',
    },
  },
  {
    title: 'Docker',
    icon: {
      style: IconStyle.brand,
      name: 'docker',
    },
  },
]
