import {Loader} from 'ui';
import {useInitializing} from 'hooks'
import {Routing} from 'routes/Routes'
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const loader = useInitializing()

return (
  <AnimatePresence mode='wait'>
    {loader ?  <Loader /> : <Routing/>}
  </AnimatePresence>
);
}

export default App;

