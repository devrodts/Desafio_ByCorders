import { useState } from 'react';
import { uploadTransactions } from '../../../utils/upload-transactions';
import styles from './upload.module.css';

const UploadPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'text/plain') {
      setFile(selectedFile);
      setMessage('');
    } else {
      setMessage('Por favor, selecione um arquivo .txt válido');
      setFile(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage('Selecione um arquivo para fazer upload');
      return;
    }

    setLoading(true);
    try {
      const result = await uploadTransactions(file);
      setMessage(result.message);
      if (result.success) {
        setFile(null);
        if (e.target instanceof HTMLFormElement) {
          e.target.reset();
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <h2>Upload de Arquivo CNAB</h2>
      <form onSubmit={handleSubmit} className={styles.uploadForm}>
        <input
          className={styles.uploadInput}
          type="file"
          accept=".txt"
          onChange={handleFileChange}
          disabled={loading}
        />
        <button type="submit" disabled={!file || loading}>
          {loading ? 'Processando...' : 'Enviar'}
        </button>
      </form>
      {message && (
        <p className={`${styles.message} ${message.includes('Erro') ? styles.error : styles.success}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default UploadPage;