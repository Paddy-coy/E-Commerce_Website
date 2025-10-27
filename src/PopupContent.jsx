import {createPortal} from "react-dom"

const PopupContent = ({isCopied}) => {
 return  createPortal(
    <section>
        {isCopied && (
            <h1 className="absolute bottom-3 bg-green-600 text-white rounded-3xl p-2">
                Copied To Clipboard
            </h1>
        )}
    </section>,
    document.getElementById("PopupContent")
 )
}

export default PopupContent;