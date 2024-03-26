const register = async (name, email, password) => {
    try {
      const response = await fetch('https://be.cvgo.my.id/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during register:', error);
      throw error;
    }
  };
  
  export { register };
  