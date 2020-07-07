import React from 'react';
import { connect } from 'react-redux';

function CategorySelectOptions({ categories }) {
  return (
    <>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </>
  );
}

const mapStatetoProps = (state) => ({
  categories: state.log.categories,
});

export default connect(mapStatetoProps)(CategorySelectOptions);
