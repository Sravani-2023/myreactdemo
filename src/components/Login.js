import AuthContext from "../context/AuthContext";

const Login = () => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <div>
            <h1>Login</h1>
            <form
              onSubmit={() => {
                ctx.setLoggedIn(true);
              }}
            >
              <input placeholder={"UserName"}></input>
              <input placeholder={"Password"}></input>
              <button type="submit">Login</button>
            </form>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Login;
