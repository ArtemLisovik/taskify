import RootLayout from 'layouts/RootLayout/RootLayout'
import { Filters, TaskList } from 'containers'

export const BoardPage = () => {
  return (
    <RootLayout>
      <Filters />
      <TaskList />
    </RootLayout>
  )
}
