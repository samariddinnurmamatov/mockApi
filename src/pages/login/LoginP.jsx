import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userSchema } from "../../schema/login";
import { toast } from "react-toastify";
import './login.css'
// import * as yup from 'yup';



const LoginP = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: userSchema,
    onSubmit: async values => {
      let isValid = await userSchema.validate(values)
      if (isValid){
        try{
          await axios.post("https://reqres.in/api/login", values);
          formik.resetForm()
          navigate("/categories")
        } catch(err) {
          toast.error(err.response.data.error);
        }
      }
    },
  });
  return (
    <div>
    
      <div className="abody">
          <form action="" onSubmit={formik.handleSubmit}>
        <div className="logn-all">
            <i></i>
              <i></i>
              <i></i>
            <div className="login">
              <h2>Login</h2>
              <div className="inputBx">
                <input style={{marginBottom: "15px"}} name="email"  type="text"  placeholder="Email" onChange={formik.handleChange} value={formik.values.email} />
                {formik.touched.email && formik.errors?.email ? (
                  <span style={{paddingLeft: "10px"}} className="text-danger">{formik.errors.email}</span>
                ) : null}
              </div>
              <div className="inputBx">
                <input style={{marginBottom: "15px"}} name="password" type="password"  placeholder="password" onChange={formik.handleChange} value={formik.values.password}/>
                {formik.touched.password && formik.errors?.password ? (
                  <span style={{paddingLeft: "10px"}} className="text-danger">{formik.errors.password}</span>
                ) : null}
              </div>
              <div className="inputBx">
                <input type="submit" value="Send"/>
              </div>
            </div>
        </div>
          </form>
      </div>
    </div>
  )
}

export default LoginP