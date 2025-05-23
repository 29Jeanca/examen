// const API_URL_LOCAL = "http://localhost:8000/";
const API_URL = "https://examen-production-3f7a.up.railway.app/";

const createLoginUser = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await response.json();

    return {
      ok: response.ok,
      status: response.status,
      data: resData,
    };
  } catch (error) {
    console.error("Error en createLoginUser:", error);
    return {
      ok: false,
      status: 500,
      data: { error: "Error de red o del servidor." },
    };
  }
};

export { createLoginUser };

const uploadProfilePicture = async(imagen,preset)=>{
    const formData = new FormData();
    formData.append('file',imagen);
    formData.append('upload_preset',preset);
    try{
        const response = await fetch('https://api.cloudinary.com/v1_1/ddw0qbl5o/upload',{
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data;
    }catch(error){
        console.error('Error:',error);
    }
}
export {uploadProfilePicture}

const getData = async(endpoint,id="") => {
    try{
      const response = await fetch(`${API_URL}${endpoint}/${id}`,)
      const data = await response.json()
      console.log('Data:',data)
      return {
        ok: response.ok,
        status: response.status,
        data: data
      }
    }catch(error){
      console.error('Error:',error)
      return {
        ok: false,
        status: 500,
        data: {error: 'Error de red o del servidor.'}
      }
    }
}
export {getData}