import css from './Filter.module.css';
import { addFilter } from 'redux/filter/slice';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();

  const filterValueRef = useRef();

  const handleSearch = () => {
    const filterValue = filterValueRef.current.value;
    dispatch(addFilter({ value: filterValue }));
  };
  return (
    <div className={css.filterWrapper}>
      <label className={css.label}>
        Find contacts by name
        <input
          ref={filterValueRef}
          className={css.input}
          type="text"
          onChange={handleSearch}
        />
      </label>
    </div>
  );
}
