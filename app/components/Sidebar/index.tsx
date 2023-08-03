import { Categories } from '@/types'
import Item from './Item'

const getCategories = async () => {
  const items = await fetch(
    'https://my-json-server.typicode.com/rezapazan/baloot/categories'
  )
  return items.json()
}

const Sidebar = async () => {
  const categories = await getCategories()

  return (
    <aside className='fixed flex h-full w-[248px] flex-col items-start justify-between overflow-auto border-gray-200 px-[30px] pb-5 pt-28 scrollbar-thin font-IranSans scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-thumb-rounded'>
      <div className='w-full'>
        <h4 className='text-xs mb-5'>دسته‌ها</h4>
        <Item
          id={0}
          name='همه'
          path='all'
        />
        {(categories as Categories).map(item => (
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
