import RootLayout from 'pages/layouts/RootLayout/RootLayout'
import { Filters } from 'widgets/Filters/ui/Filters'
import { TaskList } from 'widgets/TaskList/ui/TaskList'

const BoardPage = () => {
  return (
      <RootLayout>
        <Filters 
          title='Lets realise your plans together!' 
          eventName='task'
          filterButtonsName={['active', 'completed', 'failed']}/>
        <TaskList />
    </RootLayout>    
  )
}

export default BoardPage