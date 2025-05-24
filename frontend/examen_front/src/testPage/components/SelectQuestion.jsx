import { Box, Typography, RadioGroup, FormControlLabel, Radio, Paper } from '@mui/material';
import '../styles/SelectQuestion.css'
const SelectQuestion = ({ questionText, options, questionIndex, onSelectOption, selectedOption }) => {
  return (
    <Paper elevation={2} sx={{ padding: 3, marginBottom: 4, borderRadius: 3 }} className="question-card">
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        {questionIndex !== undefined && `Pregunta ${questionIndex + 1}: `}
        {questionText}
      </Typography>

      <RadioGroup
        value={selectedOption}
        onChange={(e) => onSelectOption(e.target.value)}
      >
        {options.map((option) => (
         <FormControlLabel
  key={option.id}
  value={option.id.toString()} 
  control={<Radio />}
  label={option.text}
/>

        ))}
      </RadioGroup>
    </Paper>
  );
};

export default SelectQuestion;
