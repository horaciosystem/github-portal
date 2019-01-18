import { styled, Box } from "reakit"
import { theme } from "styled-tools"

const MainColumn = styled(Box)`
  max-width: ${theme("pageWidth")};
  margin: ${theme("spacing.normal")} auto;
  padding-left: ${theme("spacing.normal")};
  padding-right: ${theme("spacing.normal")};
`

export default MainColumn
