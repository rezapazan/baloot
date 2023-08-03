import { Item } from '@/types'
import { dateFormatter, rialToToman } from '@/utils'
import React from 'react'

const Item = (props: Item) => {
  return (
    <div className='rounded border px-3 py-5 border-gray-400'>
      <h3 className='font-bold mb-10'>{props.title}</h3>
      <div className='flex items-center text-sm mb-3'>
        <span>قیمت:</span>
        <span>&nbsp;</span>
        <span>{rialToToman(props.price)}</span>
        <span>&nbsp;</span>
        <span>تومان</span>
      </div>
      <div className='flex items-center text-sm'>
        <span>زمان انتشار:</span>
        <span>&nbsp;</span>
        <span>{dateFormatter(props.date)}</span>
      </div>
    </div>
  )
}

export default Item
