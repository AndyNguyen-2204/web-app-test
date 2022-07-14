import axios from "axios"
import { useDispatch } from "react-redux"
import { dataerr, fetchdata } from "../Redux/Reducers/data";
const dispatch = useDispatch
export async function fetchAPI() {
    try {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    } catch (error) {
        dispatch(dataerr(error))
    }

}