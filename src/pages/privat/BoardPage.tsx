import RootLayout from 'pages/layouts/RootLayout/RootLayout'
import { Filters } from 'widgets/Filters/ui/Filters'
import { TaskList } from 'widgets/TaskList/ui/TaskList'

const BoardPage = () => {
  return (
      <RootLayout>
        <Filters />
        <TaskList />
    </RootLayout>    
  )
}

export default BoardPage