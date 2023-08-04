'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 5 * 60 * 1000,
      staleTime: 1 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
})

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className='w-full'>{children}</main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default CategoriesLayout
