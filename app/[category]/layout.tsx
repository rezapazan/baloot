'use client'

import FilterProvider from '@/context/filterProvider'
import { Compose } from '@/utils'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Compose components={[FilterProvider]}>
      <QueryClientProvider client={queryClient}>
        <main className='w-full'>{children}</main>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Compose>
  )
}

export default CategoriesLayout
