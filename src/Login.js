function Login() {
  return (
    <div className='login'>
      <h1>Login</h1>
      <form>
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