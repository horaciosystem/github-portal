import React from "react"
import { Block, Table, Link } from "reakit"
import AsyncHandler from "common/AsyncHandler"
import useFetch from "lib/useFetch"

const STORE_KEY = "REPOS"

const stateUpdater = data => prevState => {
  return { ...prevState, [STORE_KEY]: data }
}

function RepositoriesTable({ url }) {
  let repositories = useFetch({ url, key: STORE_KEY, stateUpdater })

  return (
    <AsyncHandler fetcher={repositories}>
      {({ data }) => {
        if (data.length) {
          return (
            <Block>
              <Table>
                <caption>Repositories</caption>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>URL</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(({ id, name, html_url }) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>
                        <Link
                          href={html_url}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {html_url}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Block>
          )
        }

        return <span>No repositories found.</span>
      }}
    </AsyncHandler>
  )
}

export default RepositoriesTable
