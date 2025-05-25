import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { postData } from "../../services/fetch";
const ModalSendResponses = ({ isOpen, onClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [userResponses, setUserResponses] = useState({});

const sendResponses = async () => {
  const raw = localStorage.getItem("questions");
  if (!raw) return alert("No hay respuestas para enviar");

  const responsesRaw = JSON.parse(raw);
  setUserResponses(responsesRaw);

  const responsesArray = Object.values(responsesRaw);

  for (const response of responsesArray) {
    const data = {
      user: localStorage.getItem("id_user"),
      question: response.id,
      options: [response.optionId],
      test: localStorage.getItem("id_test"),
    };
    console.log("Enviando:", data);
    const result = await postData("tests/answers/", data);
    if (!result.ok) {
      alert(`Error al enviar la respuesta a la pregunta ${response.id}`);
      return;
    }
  }

  alert("Todas las respuestas fueron enviadas correctamente");
  onClose();
};


  return (
    <>
      <Modal
        open={isOpen}
        onClose={onclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Quieres confirmar el envío de las respuestas?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Las respuestas se enviaran y podrás ver el resultado en la página de
            resultados.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Button variant="contained" color="error" onClick={onClose}>
              Cancelar
            </Button>
            <Button variant="contained" color="primary" onClick={sendResponses}>
              Confirmar
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
export default ModalSendResponses;
