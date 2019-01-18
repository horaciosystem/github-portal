import React from "react"
import { styled, Card, Avatar, Flex, Link } from "reakit"
import { Link as ReactRouterLink } from "react-router-dom"
import { theme } from "styled-tools"
import Label from "common/Label"
import InfoText from "common/InfoText"
import appTheme from "theme"

const StyledCard = styled(Card)`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
  padding: ${theme("spacing.small")};
`
function UserCard({ user: { id, avatar_url, login } }) {
  return (
    <StyledCard>
      <Flex>
        <Card.Fit
          as={Avatar}
          src={avatar_url}
          alt="Avatar"
          width={100}
          height={100}
          marginRight={appTheme.spacing.normal}
        />
        <Flex flexDirection="column" justifyContent="center">
          <Flex alignItems="center" marginBottom={appTheme.spacing.small}>
            <Label>ID</Label>
            <InfoText>{id}</InfoText>
          </Flex>
          <Flex alignItems="center">
            <Label>Login</Label>
            <InfoText>{login}</InfoText>
          </Flex>
        </Flex>
      </Flex>
      <Link as={ReactRouterLink} to={`/users/${login}/details`}>
        View details
      </Link>
    </StyledCard>
  )
}

export default UserCard
