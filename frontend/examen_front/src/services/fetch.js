const API_URL_LOCAL = "http://127.0.0.1:8000/";
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
