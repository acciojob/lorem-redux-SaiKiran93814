import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLorem } from './features/loremSlice';
import './App.css'; // Optional for styling

const App = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>A short Naration of Lorem Ipsum</h1>
      <p style={{ textAlign: 'center' }}>
        Below Contains A title and Body gotten from a random API, Please take your time to Review
      </p>

      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <div className="grid">
          {data.map((item, index) => (
            <div key={index} className="card">
              <p><strong>Title</strong> {item.title}</p>
              <p><strong>Body</strong> {item.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
