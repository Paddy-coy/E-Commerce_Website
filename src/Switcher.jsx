import { useState } from "react"
import DarkMode from "./DarkMode"
import LightMode from "./LightMode"

const SwitcherMode = () => {
    const [sw, setSwitch] = useState(false)

    return <section>
        {sw ? (
            <DarkMode/>
        ) : (<LightMode/>)}
        <button className="bg-blue-600 text-white p-4 m-10 rounded-lg cursor-pointer w-32" onClick={() => setSwitch(!sw)}>

        </button>
    </section>
}

export default SwitcherMode;