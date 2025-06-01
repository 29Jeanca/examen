import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const AnswerCard = ({ text, correct = true, explanation = "",option}) => {
  const icon = correct ? (
    <CheckCircleIcon color="success" sx={{ mr: 1 }} />
  ) : (
    <CancelIcon color="error" sx={{ mr: 1 }} />
  );

  const bgColor = correct ? "rgba(76, 175, 80, 0.2)" : "rgba(244, 67, 54, 0.2)";
  const borderColor = correct ? "success.main" : "error.main";

  return (
    <Accordion
      sx={{
        backgroundColor: bgColor,
        borderLeft: 4,
        borderColor,
        mb: 1,
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box display="flex" alignItems="center">
          {icon}
          <Typography>{text} - </Typography>
          <Typography>
              - {option && `Opción seleccionada: ${option}`}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          {explanation || "Sin explicación disponible."}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AnswerCard;
