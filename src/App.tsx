import { Provider as ProviderURQL } from 'urql'
import { client } from './graphql/client'
import AppRoutes from './routes/AppRoutes'

const App: React.FC = () => {
  return (
    <ProviderURQL value={client}>
      <AppRoutes />
    </ProviderURQL>
  )
}

export default App
