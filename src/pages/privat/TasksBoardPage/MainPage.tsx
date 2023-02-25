import { Header } from "widgets/Header/ui/Header"
import { Filters } from "widgets/Filters/ui/Filters"
import { TaskList } from "widgets/TaskList/ui/TaskList"

export const MainPage = () => {

    return (
        <div className="wrapper">
            <div className="main__container">

                <Header />

                <main className="main">
                    <div className="container flex__container">
                        <div className="container__content content">

                            <Filters />
                            <TaskList />

                        </div>
                        <div className="container__calendar calendar">
                            calendar
                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}