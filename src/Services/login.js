const login = async (email, password) => {
    try {
      const response = await fetch('https://be.cvgo.my.id/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      
      if (response.status === 200) {
        localStorage.setItem('token', 'Bearer ' + data.token);
        window.location.href = '/user/dashboard';
      } else {
        console.log("idk "+ response.status)
      }
      return data;

    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };
  
  export { login };
  