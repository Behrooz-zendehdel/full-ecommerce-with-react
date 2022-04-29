import {  useFormik } from "formik";
import Input from "../../common/Input";


const initialValues ={
    name:'',
    email:'',
    phoneNumber:'',
    password:'',


}


const SignupForm = ({name,email,phoneNumber}) => {

    const formik=useFormik({
        initialValues,validationSchema,onSubmit,validateOnMount:true,
    })


    
    return ( 
        <div>   
            <form onSubmit={formik.handleSubmit}>
                <Input formik={formik} name={name} label='Name' />
                <Input formik={formik} name={email} label='Email' />
                <Input formik={formik} name={phoneNumber} label='phone Number' />
                <Input formik={formik} name={name} label='Name' />
            </form>
        </div>

     );
}
 
export default SignupForm;