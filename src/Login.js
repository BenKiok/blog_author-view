function Login() {
  const fetchLoginToken = async (event, func) => {
    event.preventDefault();
    const loginData = JSON.stringify({
      username: event.target[0].value,
      password: event.target[1].value
    });
    const token = await fetch('http://localhost:4000/api/user/login', 
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: loginData
    })
    .then(res => res.json())
    .catch(err => console.log(err));

    func(token);
  }

  return (
    <div className='login'>
      <h1>Login</h1>
      <form onSubmit={e => fetchLoginToken(e, d => console.log(d))}>
        <label>Username
          <input type='text' name='username' placeholder='JohnDoe123'/>
        </label>
        <label>Password
          <input type='password' name='password' placeholder='password456'/>
        </label>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;