# Instructions to Publish v2.0.0 Release

## Release Information
- **Version**: v2.0.0
- **Target Commit**: 5805e3afd3d4a32d752c4cf3f110880b97535106 (master branch)
- **Release Title**: v2.0.0 - Framework Migration to Next.js and Scott Dupre Site Integration
- **Release Date**: 2026-01-13

## Release Notes
```markdown
## v2.0.0 - Framework Migration to Next.js and Scott Dupre Site Integration

### Key Updates
- Migrated the portfolio to the Next.js framework for improved performance and scalability.
- Integrated the Scott Dupre site into the portfolio.
- General bug fixes and performance optimizations.

### Release Date
2026-01-13
```

## How to Publish the Release

### Option 1: Using GitHub CLI (gh)
```bash
# First, push the tag to GitHub
git push origin v2.0.0

# Then create the release
gh release create v2.0.0 \
  --repo johnsonav1992/johnson-portfolio-site-v2 \
  --title "v2.0.0 - Framework Migration to Next.js and Scott Dupre Site Integration" \
  --notes "## v2.0.0 - Framework Migration to Next.js and Scott Dupre Site Integration

### Key Updates
- Migrated the portfolio to the Next.js framework for improved performance and scalability.
- Integrated the Scott Dupre site into the portfolio.
- General bug fixes and performance optimizations.

### Release Date
2026-01-13" \
  --target 5805e3afd3d4a32d752c4cf3f110880b97535106
```

### Option 2: Using GitHub Web UI
1. Push the tag: `git push origin v2.0.0`
2. Go to https://github.com/johnsonav1992/johnson-portfolio-site-v2/releases/new
3. Select tag: `v2.0.0`
4. Set target: `master` branch (commit 5805e3a)
5. Release title: `v2.0.0 - Framework Migration to Next.js and Scott Dupre Site Integration`
6. Copy the release notes from above into the description
7. Click "Publish release"

### Option 3: Using GitHub API
```bash
curl -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer YOUR_GITHUB_TOKEN" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/johnsonav1992/johnson-portfolio-site-v2/releases \
  -d '{
    "tag_name": "v2.0.0",
    "target_commitish": "5805e3afd3d4a32d752c4cf3f110880b97535106",
    "name": "v2.0.0 - Framework Migration to Next.js and Scott Dupre Site Integration",
    "body": "## v2.0.0 - Framework Migration to Next.js and Scott Dupre Site Integration\n\n### Key Updates\n- Migrated the portfolio to the Next.js framework for improved performance and scalability.\n- Integrated the Scott Dupre site into the portfolio.\n- General bug fixes and performance optimizations.\n\n### Release Date\n2026-01-13",
    "draft": false,
    "prerelease": false
  }'
```

## Status
- [x] Release notes prepared in RELEASE_NOTES.md
- [x] Release notes prepared in release-notes/v2.0.0.md
- [x] Git tag v2.0.0 created locally on commit 5805e3a
- [ ] Git tag pushed to GitHub
- [ ] GitHub release published

## Note
The git tag has been created locally but requires authentication to push to GitHub. The GitHub release creation also requires appropriate permissions which are not available in the current environment.
