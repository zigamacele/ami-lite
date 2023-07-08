import { Provider as ProviderURQL } from 'urql'
import { client } from './graphql/client'
import Navigation from './layouts/Navigation'
import AppRoutes from './routes/AppRoutes'

const App: React.FC = () => {
  return (
    <ProviderURQL value={client}>
      <Navigation />
      <AppRoutes />
    </ProviderURQL>
  )
}

export default App
