## CI/CD Pipeline Setup with GitHub Actions

This repository uses GitHub Actions to automate the Continuous Integration (CI) process. Below are the steps to set up the CI workflow.

### Steps to Set Up CI with GitHub Actions

1. **Create the GitHub Actions Workflow Directory**

   In your repository, create a directory structure for GitHub Actions workflows:

   ```bash
   mkdir -p .github/workflows
   ```

2. **Create the CI Workflow File**

   Inside the `.github/workflows` directory, create a YAML file named `ci.yml`.

   ```bash
   touch .github/workflows/ci.yml
   ```

3. **Define the Workflow**

   Add the following content to the `ci.yml` file:

   ```yaml
   name: CI for Security Tracker

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
       - name: Checkout code
         uses: actions/checkout@v2

       - name: Set up Node.js
         uses: actions/setup-node@v2
         with:
           node-version: 'lts/*'

       - name: Install dependencies
         run: npm install

       - name: Run app.js
         run: node app.js
   ```

4. **Stage, Commit, and Push Changes**

   Stage, commit, and push your changes to the `main` branch:

   ```bash
   git add .github/workflows/ci.yml
   git commit -m "Add CI workflow with latest Node.js LTS"
   git push origin main
   ```

5. **Verify the Workflow**

   - Go to your repository on GitHub.
   - Click on the `Actions` tab to see the workflow running.

### Workflow Explanation

- **name**: The name of the workflow.
- **on**: Specifies the events that trigger the workflow. It runs on pushes and pull requests to the `main` branch.
- **jobs**: Defines the jobs to be run.
- **runs-on**: Specifies the type of machine to run the job on (e.g., `ubuntu-latest`).
- **steps**: The series of steps to be executed in the job:
  - **Checkout code**: Uses `actions/checkout@v2` to check out your repository's code.
  - **Set up Node.js**: Uses `actions/setup-node@v2` to set up a Node.js environment with the latest LTS version.
  - **Install dependencies**: Runs `npm install` to install npm dependencies.
  - **Run app.js**: Runs your `app.js` file with the `node app.js` command.

### Additional Information

- For more details on GitHub Actions, refer to the [GitHub Actions Documentation](https://docs.github.com/en/actions).
- If you encounter any issues, ensure your YAML syntax is correct and check the GitHub Actions tab for detailed logs and errors.

By following these steps, you will set up a GitHub Actions workflow that uses the latest LTS version of Node.js, installs necessary npm modules, and runs your `app.js` file on each push or pull request to the `main` branch.


- [linkedin](https://www.linkedin.com/in/arshad-akl//)
- [GitHub](https://github.com/arshadakl)