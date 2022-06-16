import { useSelector } from "react-redux";
import { formInputStatus } from "../store/slices/form/formSlice";
import { searchResultStatus } from "../store/slices/search/searchResultSlice";
import Item from "./Item";

export default function List() {
    const list = useSelector(searchResultStatus);
    const input = useSelector(formInputStatus);

    return (
        <ul className="list-group">
            {input.length > 0 && list.map(item => <Item key={ item.id } name={ item.name }></Item>)}
        </ul>
    )
}