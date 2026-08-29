import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { env } from 'cloudflare:workers'

const getBindingExample = createServerFn({ method: 'GET' }).handler(() => ({
  message: env.BINDING_EXAMPLE_MESSAGE,
}))

export const Route = createFileRoute('/')({
  loader: () => getBindingExample(),
  component: Home,
})

function Home() {
  const binding = Route.useLoaderData()

  return (
    <div className="p-2">
      <h3>Cloudflare Worker binding</h3>
      <p>
        <code>BINDING_EXAMPLE_MESSAGE</code>: {binding.message}
      </p>
    </div>
  )
}
