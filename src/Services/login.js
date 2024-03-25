const login = async (username, password) => {
    try {
      const response = await fetch('https://be.cvgo.my.id/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };
  
  export { login };
  