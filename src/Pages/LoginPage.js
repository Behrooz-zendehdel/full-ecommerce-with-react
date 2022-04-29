import Layout from "../Layout/Layout";
import './cartPage.css'
import { Formik } from 'formik';

const LoginPage = () => {
    return ( 
        <Layout >
           <h2>login Pages</h2>
           <form  className="formLogin">
           
                <label>name</label>
                <input type='text'/>
            
                <label>email</label>
                <input type='eamil'   />
                <label>Phone Number</label>
                <input type='tel'   />
                <label>password</label>
                <input type='password'   />
                <label>passwordConfrim</label>
                <input type='password'   />
                <button>Login</button>
             
           </form>
           
        </Layout>
     );
}
 
export default LoginPage;