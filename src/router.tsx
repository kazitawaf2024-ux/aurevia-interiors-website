import {
  createRouter,
  useRouter,
  type ErrorComponentProps,
} from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

function SafeErrorPage({ reset }: ErrorComponentProps) {
  const router = useRouter()
  return (
    <div className="container error-page">
      <p className="eyebrow">AUREVIA INTERIORS</p>
      <h1>A brief pause.</h1>
      <p role="alert">This page couldn’t load. Please try again.</p>
      <button
        type="button"
        className="button button-gold"
        onClick={() => {
          void router.invalidate()
          reset()
        }}
      >
        Try Again
      </button>
    </div>
  )
}

export function getRouter() {
  return createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: SafeErrorPage,
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}
