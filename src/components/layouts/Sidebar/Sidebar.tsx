
import Menu from "@/components/common/Menu/Menu"
import { Gamepad2 } from "lucide-react"



function Sidebar() {
    return (
        <div className='w-full max-w-72 border-r px-2 py-4 '>
            <h1 className="font-bold text-2xl flex gap-2 items-center justify-center mb-4"> <Gamepad2 size={30} />Game Club</h1>
            <Menu />
        </div>
    )
}

export default Sidebar