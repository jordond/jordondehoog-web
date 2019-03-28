import Octokit from '@octokit/rest'

const client = new Octokit()

export interface Commit {
  sha: string
  author: {
    email: string
    name: string
  }
  message: string
  url: string
}

export interface LatestCommits {
  repo: string
  branch: string
  headSHA: string
  commits: Commit[]
}

export interface UserLatestCommitOptions {
  ignore?: string[]
}

export interface GitService {
  getUserLatestCommits: (
    username: string,
    options: UserLatestCommitOptions
  ) => Promise<LatestCommits[]>
}

export class GithubGitService implements GitService {
  public async getUserLatestCommits(
    username: string,
    options: UserLatestCommitOptions = {}
  ): Promise<LatestCommits[]> {
    const result = await client.activity.listEventsForUser({ username })
    const data = result.data as ListEventsForUserResponse[]

    return data
      .filter(it => it.type === 'PushEvent')
      .filter(
        res =>
          !(options.ignore || []).includes(
            res.repo.name.replace(`${username}/`, '')
          )
      )
      .map(({ repo, payload }) => ({
        repo: repo.name,
        branch: payload.ref,
        headSHA: payload.head,
        commits: payload.commits,
      }))
  }
}

interface ListEventsForUserResponse {
  type: string
  repo: {
    name: string
    url: string
  }
  payload: {
    ref: string
    head: string
    commits: Commit[]
  }
}
