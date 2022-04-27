import { useState } from "react";
import { TopBar } from "./topbar";
import { Sidebar } from "./sidebar";

export function LayoutDashboard ({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    return(
        <div className="d-flex flex-grow-1">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}/>
            <main className="flex-grow-1">
                <TopBar onOpen={() => setIsSidebarOpen(true)}/>
                {children}
            </main>
        </div>
    )
}