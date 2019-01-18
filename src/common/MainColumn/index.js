import { styled, Box } from "reakit"
import { theme } from "styled-tools"

const MainColumn = styled(Box)`
  max-width: ${theme("pageWidth")};
  margin: ${theme("spacing")} auto;
  padding-left: ${theme("spacing")};
  padding-right: ${theme("spacing")};
`

export default MainColumn
