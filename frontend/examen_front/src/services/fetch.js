const API_URL_LOCAL = "http://localhost:8000/";
// const API_URL = "https://examen-backend-production.up.railway.app/";

const createLoginUser = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_URL_LOCAL}${endpoint}`, {
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

const postData = async (endpoint, data) => {
  try {
    const response = await fetch(`${API_URL_LOCAL}${endpoint}`, {
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
    console.error("Error en postData:", error);
    return {
      ok: false,
      status: 500,
      data: { error: "Error de red o del servidor." },
    };
  }
}

export { postData };

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
      const response = await fetch(`${API_URL_LOCAL}${endpoint}/${id}`,)
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

const getUserAnswersByTest = async(userId, testId) => {
  const peticion = await fetch(`http://localhost:8000/tests/answers/by-user-test/?user_id=${userId}&test_id=${testId}`);
  if (!peticion.ok) {
    throw new Error("Error al obtener las respuestas del usuario");
  }
  const data = await peticion.json();
  return data;
}
export { getUserAnswersByTest };

const getAnswersByTest = async(testId) => {
  const peticion = await fetch(`http://localhost:8000/tests/options/?test=${testId}`);
  if (!peticion.ok) {
    console.log(peticion);
    throw new Error("Error al obtener las respuestas del test");
    
  }
  const data = await peticion.json();
  return data;
}
export { getAnswersByTest };