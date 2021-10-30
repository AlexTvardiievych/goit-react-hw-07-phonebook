import { useDispatch, useSelector } from "react-redux";
import { filter } from "../../redux/Contacts/filterSlice";
import { getFilter } from "../../Selectors/contacts-selectors";
import PropTypes from "prop-types";
import Title from "../Utils/Title/Title";
import Input from "../Utils/Input/Input";

function Filter() {
  const dispatch = useDispatch();
  const value = useSelector((state) => getFilter(state));
  const onChange = (e) => {
    dispatch(filter(e.target.value));
  };

  return (
    <>
      <Title size={18} text="Find Contacts by name" />
      <Input
        placeholder="type to find contacts..."
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};