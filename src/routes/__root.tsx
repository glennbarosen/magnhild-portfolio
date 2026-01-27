import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Header, Footer, ErrorBoundary } from '@/components/layout'
import { SkipLink } from '@/components/ui'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen flex flex-col">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
        {import.meta.env.DEV && <TanStackRouterDevtools />}
      </div>
    </ErrorBoundary>
  )
}
