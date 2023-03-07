import PropTypes from 'prop-types';
import { FilterStyled } from "./FilterStyled";

export const Filter = ({ value, getFilteredFriend }) => {
  return (
      <FilterStyled>
    <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={value}
          onChange={getFilteredFriend}
        />
      </label>
    </FilterStyled>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  getFilteredFriend: PropTypes.func.isRequired,
}