import { useSelector, useDispatch } from 'react-redux';
import { formInputStatus, formLoadingStatus, setInput } from '../store/slices/form/formSlice';

export default function Form() {
    const input = useSelector(formInputStatus);
    const formLoading = useSelector(formLoadingStatus);

    const dispatch = useDispatch();

    function inputEventHandler(event) {
        event.preventDefault();
        dispatch(setInput(event.currentTarget.value));
    }

    return (
        <>
            <label htmlFor="dataList" className="form-label">Search</label>
            <div className="inputcontainer">
                <input className="form-control" 
                list="datalistOptions" 
                id="dataList" 
                placeholder="Type something to search..."
                value={input}
                onInput={inputEventHandler}
                />
                {formLoading && input.length > 0 && <div className="icon-container"><i className="loader"></i></div>}
            </div>
        </>
    )
}