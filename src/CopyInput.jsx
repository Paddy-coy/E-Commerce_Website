import { useState } from "react"
import { IoCopyOutline } from "react-icons/io5";
import PopupContent from "./PopupContent";

const CopyInput = () => {
    const [inputValue, setInputValue] = useState('')
    const [copiedText, setCopiedText] = useState(false)

    const handletext = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopiedText(true)
            setTimeout(() => {
             setCopiedText(false)
            }, 2000)
        })
    }

    return <section>
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="rounded-2xl  border-2 border-green-600 m-10"/>
          <IoCopyOutline onClick={handletext} className="inline cursor-pointer"/>

<PopupContent isCopied = {copiedText}/>

         </section>
}

export default CopyInput;