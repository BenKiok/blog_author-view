function Login(props) {
  const fetchLoginToken = (event, func) => {
    event.preventDefault();
    const loginData = JSON.stringify({
      username: event.target[0].value,
      password: event.target[1].value
    });
    
    fetch('http://localhost:4000/api/user/login', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: loginData
    })
    .then(res => res.json())
    .then(data => func(data.token))
    .catch(err => {
      alert('Username or password is incorrect.')
      event.target[0].value = '';
      event.target[1].value = '';
    });
  }

  return (
    <div className='login'>
      <h1>Login</h1>
      <form onSubmit={e => fetchLoginToken(e, props.handleLogin)}>
        <label>Username
          <input type='text' name='username' placeholder='JohnDoe123' required/>
        </label>
        <label>Password
          <input type='password' name='password' placeholder='password456' required/>
        </label>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;