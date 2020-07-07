import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techActions';
function TechSelectOptions({ getTechs, tech: { techs, loading }, category }) {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);
  return (
    !loading &&
    techs !== null &&
    category !== '' &&
    techs.map((t) =>
      t.allSkills.map((skill) => {
        if (skill === category) {
          return (
            <option key={t._id} value={`${t.firstName} ${t.lastName}`}>
              {t.firstName} {t.lastName}
            </option>
          );
        }
      })
    )
  );
}
const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
