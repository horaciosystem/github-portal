import React from "react"
import { Flex, Image, Heading, Card, Link } from "reakit"
import MainColumn from "common/MainColumn"
import AsyncHandler from "common/AsyncHandler"
import useFetch from "lib/useFetch"
import RepositoriesTable from "./RepositoriesTable"
import Label from "common/Label"
import InfoText from "common/InfoText"

const STORE_KEY = "USER"

const stateUpdater = data => prevState => {
  return { ...prevState, [STORE_KEY]: data }
}

function UserDetails({ match: { params } }) {
  let url = `https://api.github.com/users/${params.login}`
  let user = useFetch({ url, key: STORE_KEY, stateUpdater })

  return (
    <MainColumn>
      <Heading fontSize={36}>User Details</Heading>
      <AsyncHandler fetcher={user}>
        {({ data: { avatar_url, id, html_url, created_at, repos_url } }) => (
          <Flex flexDirection="column">
            <Card.Fit
              as={Image}
              src={avatar_url}
              alt="User avatar"
              width={200}
              height={200}
            />
            <Flex>
              <Label>ID</Label>
              <InfoText>{id}</InfoText>
            </Flex>
            <Flex>
              <Label>Login</Label>
              <InfoText>{params.login}</InfoText>
            </Flex>
            <Flex>
              <Label>Create at</Label>
              <InfoText>{formatDate(new Date(created_at))}</InfoText>
            </Flex>
            <Flex>
              <Link href={html_url} rel="noopener noreferrer" target="_blank">
                Github profile
              </Link>
            </Flex>
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
