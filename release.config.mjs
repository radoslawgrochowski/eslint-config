/**
 * @type {Partial<import('semantic-release').GlobalConfig>}
 */
export default {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      { message: 'chore(release): ${nextRelease.version} [skip ci]' },
    ],
  ],
}
