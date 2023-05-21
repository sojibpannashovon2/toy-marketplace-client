import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - GameZone-Toy-Shop`
    }, [title])
}

export default useTitle;