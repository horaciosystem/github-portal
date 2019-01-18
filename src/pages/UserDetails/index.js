import React from "react"
import { styled, Flex, Image, Heading, Card, Link } from "reakit"
import { theme } from "styled-tools"
import MainColumn from "common/MainColumn"
import AsyncHandler from "common/AsyncHandler"
import Label from "common/Label"
import InfoText from "common/InfoText"
import useFetch from "lib/useFetch"
import RepositoriesTable from "./RepositoriesTable"

export const FieldRow = styled(Flex)`
  margin-bottom: ${theme("spacing.normal")};
`

const STORE_KEY = "USER"

const stateUpdater = data => prevState => {
  return { ...prevState, [STORE_KEY]: data }
}

function UserDetails({ match: { params } }) {
  let url = `//api.github.com/users/${params.login}`
  let user = useFetch({ url, key: STORE_KEY, stateUpdater })

  return (
    <MainColumn>
      <Heading fontSize={36}>User Details</Heading>
      <AsyncHandler fetcher={user}>
        {({ data: { avatar_url, id, html_url, created_at, repos_url } }) => (
          <Flex flexDirection="column">
            <FieldRow>
              <Card.Fit
                as={Image}
                src={avatar_url}
                alt="User avatar"
                width={200}
                height={200}
              />
            </FieldRow>
            <FieldRow>
              <Label>ID</Label>
              <InfoText>{id}</InfoText>
            </FieldRow>
            <FieldRow>
              <Label>Login</Label>
              <InfoText>{params.login}</InfoText>
            </FieldRow>
            <FieldRow>
              <Label>Create at</Label>
              <InfoText>{formatDate(new Date(created_at))}</InfoText>
            </FieldRow>
            <FieldRow>
              <Link href={html_url} rel="noopener noreferrer" target="_blank">
                Github profile
              </Link>
            </FieldRow>
            <RepositoriesTable url={repos_url} />
          </Flex>
        )}
      </AsyncHandler>
    </MainColumn>
  )
}

function formatDate(date) {
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export default UserDetails
