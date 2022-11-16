import css from './filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { setFilter } from  "redux/slicers/filterSlice";

const Filter = () => {
    const dispatch = useDispatch();

    const handleFilter = (e) => {
        dispatch(setFilter(e.target.value.toLowerCase()));
    }
    return (
        <>
            <h3>Find contacts by name</h3>
            <input className={css.input} type='text' onChange={handleFilter} />
        </>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func,
}

export default Filter;