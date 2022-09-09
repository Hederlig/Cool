import React from 'react'
import * as RiIcons from 'react-icons/ri'
import * as BiIcons from 'react-icons/bi'
import * as GiIcons from 'react-icons/gi'

export const SidebarData = [
  {
    title: 'Killar',
    path: '',
    icon: <BiIcons.BiMale />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Jeans',
        path: '/killar/jeans'
      },
      {
        title: 'Shorts',
        path: '/killar/shorts'
      },
      {
        title: 'T-Shirts',
        path: '/killar/t-shirts'
      },
      {
        title: 'Långarmat',
        path: '/killar/langarmat'
      },
      {
        title: 'Stickat',
        path: '/killar/stickat'
      },
      {
        title: 'Hoodies',
        path: '/killar/hoodies'
      },
      {
        title: 'Mer..',
        path: '/killar/mer..'
      }
    ]
  },
  {
    title: 'Tjejer',
    path: '/tjejer',
    icon: <BiIcons.BiFemale />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Toppar',
        path: '/tjejer/toppar'
      },
      {
        title: 'Byxor',
        path: '/tjejer/byxor'
      },
      {
        title: 'Jeans',
        path: '/tjejer/jeans'
      },
      {
        title: 'Kjolar',
        path: '/tjejer/kjolar'
      },
      {
        title: 'Mer..',
        path: '/tjejer/mer..'
      }
    ]
  },
  {
    title: 'Skor',
    path: '/skor',
    icon: <GiIcons.GiRunningShoe />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Killar',
        path: '/skor/killar'
      },
      {
        title: 'Tjejer',
        path: '/skor/tjejer'
      },
      {
        title: 'Se alla',
        path: '/skor/se alla'
      }
    ]
  }
]