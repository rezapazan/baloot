'use client'

import { getItems } from '@/api/items'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React, { useEffect } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 5 * 60 * 1000,
      staleTime: 1 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
})

const prefetchItems = async () => {
  await queryClient.prefetchQuery({
    queryKey: ['items'],
    queryFn: getItems,
  })
}

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    prefetchItems()
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <main>{children}</main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default CategoriesLayout
