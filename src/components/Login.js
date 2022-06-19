const Login = ({user}) => {
    //handle function onClick
    const loginToApp = () =>{
        //Do    
    }

    return ( 
       
        <>
        <h1>This is Login</h1>
<h3>        {user ? `the user Logged in is : ${user}` : `No user is  Logged in`}
</h3>        
<button onClick={loginToApp}>LOGIN</button>
        </>
     );
}
 
export default Login;