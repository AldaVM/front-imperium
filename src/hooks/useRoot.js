import { useContext } from "react"
import RootContext from "../contexts/rootContext"

const useRoot = () => useContext(RootContext);

export default useRoot