import TextInput from "../../../components/atoms/TextInput/TextInput"
import { useState } from "react"
import styles from './register.module.css'
import asideImage from '/aside.jpg'
import { registerUser } from "../../../../services"
import { useNavigate } from "react-router-dom"

const RegisterPage = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    })

    const [errors, setErrors] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    })

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {

            const response = await registerUser(formData)
            if(!response.ok){
                setErrors({ ...errors, email: response.message || 'Erro ao registrar usuário' })
            }

            console.log(response)
            navigate('auth/login')
        } catch (error) {
            console.error('Erro ao registrar usuário:', error)
        }
    }
    
  return (
    <div className={styles.container}>
         <div className={styles.asideDiv} style={{backgroundImage: `url(${asideImage})`}}>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Register</h1>
            <section className={styles.section}>
                <TextInput label="Username" name="username" type="text" placeholder="Username" value={formData.username} onChange={handleChange} error={errors.username} />

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
            <button 
                        className={styles.button} 
            type="submit">Register
            </button>
        </form>
    </div>
  )
}

export default RegisterPage