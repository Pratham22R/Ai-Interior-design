import React from 'react'
import Header from './_components/Header'

function DashboardLayout({children}) {
  return (
    <div>
        <Header />
        <div className="pt-10 px-10 md:px-15 lg:px-40 xl:px-60 2xl:px-80">
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout