Set up GitHub OAuth:

1. Create a GitHub OAuth application:
  - Go to GitHub Settings > Developer Settings > OAuth Apps > New OAuth App
  - Set the homepage URL to your GitHub Pages URL (e.g., https://fountaincitykc.github.io)
  - Set the authorization callback URL to fountaincitykc.github.io/api/auth
2. After creating the OAuth app, you'll get a Client ID and Client Secret. You'll need to add these to your repository's secrets:
  - Go to your repository settings
  - Navigate to Secrets and Variables > Actions
  - Add two new secrets:
    - GITHUB_CLIENT_ID: Your OAuth app's Client ID
    - GITHUB_CLIENT_SECRET: Your OAuth app's Client Secret
3. Make sure your GitHub Pages site is enabled and configured to build from the correct branch.

Set up Netlify:

1. Create a new site on Netlify and connect it to your GitHub repository
2. In Netlify's site settings:
  - Set the build command to empty
  - Set the publish directory to static/admin
  - Enable Identity and Git Gateway services
