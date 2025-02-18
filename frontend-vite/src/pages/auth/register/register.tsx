import TextInput from "../../../components/atoms/TextInput/TextInput"
import { useState } from "react"
import styles from './register.module.css'
import asideImage from '/aside.jpg'

const register = () => {


    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
    })

    const [errors, setErrors] = useState({
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
    })
    
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    
  return (
    <div className={styles.container}>
         <div className={styles.asideDiv} style={{backgroundImage: `url(${asideImage})`}}>
        </div>
        <form className={styles.form}>
            <h1>Register</h1>
            <section className={styles.section}>
                <TextInput label="Name" name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} error={errors.name} />

                <TextInput 
                    label="Email" 
                    name="email" 
                    type="email" 
                    placeholder="Email" 
                    value={formData.email} 
                onChange={handleChange} 
                error={errors.email} />

                <TextInput 
                    label="Password" 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleChange}
                    error={errors.password}
                />

                <TextInput 
                    label="Confirm Password" 
                    name="confirmPassword" 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={formData.confirmPassword} 
                    onChange={handleChange}
                    error={errors.confirmPassword}
                />  
            </section>
            <button className={styles.button} type="submit">Register</button>
        </form>
    </div>
  )
}

export default register