import { TextInputProps } from "./interfaces/text-input.interface";
import styles from './TextInput.module.css'

const TextInput = ({ label, name, type, placeholder, value, onChange, error, touched }: TextInputProps) => {

    return(
        <div className={styles.inputContainer}>
            <label className={styles.label} htmlFor={name}>{label}</label>
            <input 
                className={styles.input}
                name={name} 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
            />
            {error && touched && <p>{error}</p>}
        </div>
    )
}


export default TextInput