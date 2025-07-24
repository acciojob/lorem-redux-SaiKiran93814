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
      <h1>Intro Text</h1> {/* Must match test 1 */}
      {loading ? (
        <h4>Loading...</h4>  {/* Must match test 2 */}
      ) : (
        <ul>
          <li>
            <p className="title">{title}</p>  {/* Must match test 3 */}
            <p>{body}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default App;
