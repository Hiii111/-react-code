import React, { useTransition } from 'react';

export default function UseTransition() {
  const [pending, setTransition] = useTransition();

  const handleButton = () => {
    setTransition(async () => {
      await new Promise((res) => setTimeout(res, 5000));
    });
  };

  return (
    <div>
      <h1>How To Use useTransition Hook</h1>

      {pending && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}>
          <img
            src="https://media.tenor.com/kWFpqjRHjJEAAAAM/delete-this-message.gif"
            style={{ width: '80px' }}
            alt="Loading..."
          />
        </div>
      )}

      <button disabled={pending} onClick={handleButton}>
        {pending ? 'Click...' : 'Click'}
      </button>
    </div>
  );
}

