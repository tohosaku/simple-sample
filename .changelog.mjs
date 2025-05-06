import createPreset from 'conventional-changelog-conventionalcommits';

export default async function (config) {
  return createPreset({
    ...config,
    types: [
      { type: 'feat', section: 'Features' },
      { type: 'fix', section: 'Bug Fixes' },
      { type: 'chore', section: 'Miscellaneous Chores' },
      { type: 'docs', section: 'Others' },
      { type: 'style', section: 'Others' },
      { type: 'refactor', section: 'Others' },
      { type: 'perf', section: 'Others' },
      { type: 'test', section: 'Others' },
      { type: 'ci', section: 'Continuous Integration' },
      { type: 'build', section: 'Build System' },
    ],
  });
}
