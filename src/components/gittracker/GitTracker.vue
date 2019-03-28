<template>
  <div class="tracker">
    <button @click="getLatestCommits">Get commits</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { GithubGitService } from './git-service'

@Component
export default class GitTracker extends Vue {
  @Prop() private username!: string

  getLatestCommits() {
    const test = new GithubGitService().getUserLatestCommits(this.username, {
      ignore: ['idea-settings'],
    })

    test.then(result => {
      console.log(`Response: ${result.length}`)
      result
        .filter(x => !x.branch.includes('gh-pages'))
        .forEach(x =>
          console.log(`${x.repo}:${x.branch}:${x.headSHA.substring(0, 6)}`)
        )
    })
  }
}
</script>

<style scoped lang="scss">
</style>
