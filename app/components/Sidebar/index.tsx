import { SidebarItems } from '@/types'
import React from 'react'
import Item from './Item'

// TODO: Delete path
const menuItems: SidebarItems = [
  {
    id: 1,
    name: 'املاک',
    path: 'real-estate',
  },
  {
    id: 2,
    name: 'کالای دیجیتال',
    path: 'electronic-devices',
  },
  {
    id: 3,
    name: 'خانه و آشپزخانه',
    path: 'home-kitchen',
  },
]

const Sidebar = () => {
  return (
    <aside className='fixed flex h-full w-[248px] flex-col items-start justify-between overflow-auto border-gray-200 px-[30px] pb-5 pt-28 scrollbar-thin font-IranSans scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-thumb-rounded'>
      <div className='w-full'>
        <h4 className='text-xs mb-5'>دسته‌ها</h4>
        {(menuItems as SidebarItems).map(item => (
          <Item
            name={item.name}
            key={item.id}
            id={item.id}
            path={item.path}
          />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
