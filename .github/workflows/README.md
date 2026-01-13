# GitHub Actions Workflows

## create-v2-release.yml

This workflow creates and publishes the v2.0.0 release to the repository.

### Purpose
Automates the process of:
1. Creating the v2.0.0 git tag on the appropriate commit
2. Pushing the tag to GitHub  
3. Creating the GitHub release with prepared release notes

### How to Use
1. Ensure this workflow file is on the master branch
2. Go to Actions tab: https://github.com/johnsonav1992/johnson-portfolio-site-v2/actions
3. Select "Create v2.0.0 Release" workflow
4. Click "Run workflow" dropdown
5. Click the green "Run workflow" button

### What It Does
- **Target**: Commit `5805e3afd3d4a32d752c4cf3f110880b97535106` on master branch
- **Tag**: v2.0.0
- **Release Title**: v2.0.0 - Framework Migration to Next.js and Scott Dupre Site Integration
- **Release Content**: Framework migration and Scott Dupre site integration notes

### Requirements
- Workflow must be on the master/main branch to be triggerable
- Repository requires `contents: write` permission (already configured in workflow)
- Uses GITHUB_TOKEN automatically provided by Actions

### Notes
- Workflow can be run manually via `workflow_dispatch` trigger
- If tag already exists, it will not be recreated
- Release will be published as a non-draft, non-prerelease version
