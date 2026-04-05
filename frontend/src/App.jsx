import { useEffect, useState } from 'react';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadMessages() {
      try {
        const response = await fetch('/api/messages');

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setMessages(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadMessages();
  }, []);

  return (
    <main className="container">
      <h1>CS 351 Starter Project</h1>
      <p>Frontend calls the backend and displays the returned records below.</p>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr key={`${message}-${index}`}>
                <td>{index + 1}</td>
                <td>{message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
