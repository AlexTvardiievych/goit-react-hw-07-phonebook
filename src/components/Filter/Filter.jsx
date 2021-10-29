import React from "react";
import { connect } from "react-redux";
import { filterContact } from "../../redux/actions/contacts";
import PropTypes from "prop-types";
import Title from "../Utils/Title/Title";
import Input from "../Utils/Input/Input";

function Filter({ value, onChange }) {
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

const mapStateToProps = (state) => ({
  value: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
