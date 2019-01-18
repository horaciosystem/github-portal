import React from "react"
import { styled, Heading, Box, Card, Avatar, Flex } from "reakit"
// import { Link as ReactRouterLink } from "react-router-dom"
import { theme, palette } from "styled-tools"
import appTheme from "theme"

const CardLabel = styled(Box)`
  color: ${palette("text75")};
  margin-right: 8px;
  font-weight: ${theme("fontWeight.semibold")};
`

const CardText = styled(Box)`
  font-weight: ${theme("fontWeight.bold")};
  color: ${palette("text")};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

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
            <CardLabel>ID</CardLabel>
            <CardText>{id}</CardText>
          </Flex>
          <Flex alignItems="center">
            <CardLabel>Login</CardLabel>
            <CardText>{login}</CardText>
          </Flex>
        </Flex>
        {/* <ReactRouterLink to={`/survivors/${id}/edit`}>View details</ReactRouterLink> */}
      </Flex>
    </StyledCard>
  )
}

export default UserCard
