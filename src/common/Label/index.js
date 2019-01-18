import { styled, Box } from "reakit"
import { theme, palette } from "styled-tools"

const Label = styled(Box)`
  color: ${palette("text75")};
  margin-right: 8px;
  font-weight: ${theme("fontWeight.semibold")};
`

export default Label
