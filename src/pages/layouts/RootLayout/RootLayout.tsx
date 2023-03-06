import React from 'react'
import { Header } from 'widgets/Header/ui/Header'
import './RootLayout'

const RootLayout = ({children}: { children: React.ReactNode }) => {
  return (
    <div className="wrapper">
            <div className="main__container">

                <Header />

                <main className="main">
                    <div className="container flex__container">
                        <div className="container__content content">
                            
                        {children}

                        </div>
                        {/* <div className="container__calendar calendar">
                            calendar
                        </div> */}
                    </div>
                </main>
            </div>
        </div>
  )
}

export default RootLayout