const API_BASE_URL = "http://localhost:3000";

export const uploadTransactions = async (file: File): Promise<{ message: string; success: boolean }> => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/transactions/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Falha ao fazer upload do arquivo');
    }

    const data = await response.json();
    return {
      message: 'Arquivo processado com sucesso!',
      success: true
    };

  } catch (error) {
    console.error('Erro ao fazer upload:', error);
    return {
      message: 'Erro ao processar arquivo',
      success: false
    };
  }
};