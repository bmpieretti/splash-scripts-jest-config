module.exports = {
  hooks: {
    'post-checkout': 'if [[ $HUSKY_GIT_PARAMS =~ 1$ ]]; then npm ci; fi',
    'post-merge': 'npm i',
    'post-rebase': 'npm i',
    'pre-commit': 'npm i && git add package-lock.json && npm run build:readme && git add readme.md',
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
  }
}