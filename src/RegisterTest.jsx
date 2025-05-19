import React, { useState } from 'react';

const RegisterTest = () => {
  const [email, setEmail] = useState('test@example.com');
  const [response, setResponse] = useState(null);

  const handleRegister = async () => {
    try {
      const res = await fetch('https://fromafrica-backend.onrender.com/api/v1/initiateRegistration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email }),
        credentials: 'include' // only needed if backend uses cookies
      });

      const text = await res.text(); // Get raw text first
      console.log('Status:', res.status);
      console.log('Raw Response:', text);

      if (res.headers.get('content-type')?.includes('application/json')) {
        const data = JSON.parse(text);
        setResponse(data);
      } else {
        setResponse({ message: 'Non-JSON response', raw: text });
      }
    } catch (error) {
      console.error('Request failed:', error);
      setResponse({ error: error.message });
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Regist</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        style={{ padding: '0.5rem', width: '300px' }}
      />
      <button onClick={handleRegister} style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
        Register
      </button>

      {response && (
        <pre style={{ marginTop: '1rem', backgroundColor: '#f0f0f0', padding: '1rem' }}>
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default RegisterTest;