function copyToClipboard(){
    document.querySelector("input#addNanoAddress").select()
    document.execCommand("copy")
}

document.getElementById("copy").addEventListener("click", copyToClipboard, false)