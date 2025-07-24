import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLorem } from './features/loremSlice';

const App = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Intro Text</h1>  {/* Matches test */}
      {loading ? (
        <h4>Loading...</h4>  
      ) : (
        <div className="grid">
          {data.map((item, index) => (
            <div key={index} className="card">
              <h4>{item.title}</h4>  {/* Matches test */}
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
