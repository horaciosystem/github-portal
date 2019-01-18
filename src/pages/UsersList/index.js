import React, { useState } from "react"
import { Grid, Flex, Box, Heading, Button } from "reakit"
import { Link as ReactRouterLink } from "react-router-dom"
import useFetch from "lib/useFetch"
import MainColumn from "common/MainColumn"
import UserCard from "./UserCard"
import appTheme from "theme"

function UsersList() {
  let [url, setUrl] = useState("//api.github.com/users")
  let { error, loading, data } = useFetch({ url, key: "users" })

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!data && loading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return null
  }

  let [last] = data.slice(-1)
  let loadMore = () => setUrl(`https://api.github.com/users?since=${last.id}`)
  return (
    <MainColumn>
      <Heading fontSize={36}>Github Users</Heading>
      <>
        <Box marginBottom={appTheme.spacing.normal}>
          <Grid
            columns="repeat( auto-fit, minmax(300px, 1fr) )"
            autoRows="auto"
            gap="10px"
          >
            {data.map(user => {
              return <UserCard key={user.id} user={user} />
            })}
          </Grid>
        </Box>
        <Flex justifyContent="center">
          <Button onClick={loadMore}>
            {loading ? "Loading..." : "Load more"}
          </Button>
        </Flex>
      </>
    </MainColumn>
  )
}

export default UsersList
