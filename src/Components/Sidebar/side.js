import { useEffect, useState } from "react"
import { Dashboard } from "../../Page/Employee/Dashboard/DashboardManagement"
import { Aside } from "./aside"
import { Header } from "./Header"
import { Mobile } from "./Mobile"

export const Side = () => {

    const [open, setOpen] = useState(true)
    
    useEffect(() => {

    }, [])

    return (
        <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
          {/* Desktop sidebar */}
          <Aside/>
          {/* Desktop sidebar */}
    
          {/* Mobile sidebar */}
          <div class="fixed inset-0 z-10 flex items-end sm:items-center sm:justify-center"></div>
          <Mobile/>
          {/* End Mobile sidebar */}
    
            <div class="flex flex-col flex-1 w-full">
                <Header/>            
                <Dashboard/>
            </div>
        </div>

            
    )
}