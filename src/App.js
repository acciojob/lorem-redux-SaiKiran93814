import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLorem } from './features/loremSlice';

const App = () => {
  const dispatch = useDispatch();
  const { title, body, loading } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      <h1>Intro Text</h1> {/* For Cypress test */}
      {loading ? (
        <h4>Loading...</h4> /* For Cypress test */
      ) : (
        <div>
          <h2>{title}</h2>
          <ul>
            <li>{body}</li> {/* For Cypress test */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
