import { styled, Box } from "reakit"
import { theme, palette } from "styled-tools"

const InfoText = styled(Box)`
  font-weight: ${theme("fontWeight.bold")};
  color: ${palette("text")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export default InfoText
