# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


## Branching Strategy

This repository follows a structured branching strategy to ensure efficient collaboration and maintain a clean version history. Please adhere to the following guidelines when working on this project:

### Main Branch

- The main branch is the production-ready branch and should always remain stable.
- Direct commits or unreviewed changes must not be pushed to the main branch.

### Feature Branches

For all new features or issues, create a branch following the naming convention:

```
features/<your-name>/<issue-number>
```

- Replace `<your-name>` with your GitHub username or your name.
- Replace `<issue-number>` with the issue number or a short description related to the feature.

Example:
If your name is JohnDoe and you are working on issue number 123, your branch name should be:

```
features/JohnDoe/123
```

### Workflow

The workflow outlines how to handle the process of creating, modifying, reviewing, and merging feature branches. Follow these steps to maintain an organized and efficient development cycle:

1. **Create a New Branch:**
   - Start from the latest main branch.
   - Use the naming convention as outlined above.

   ```bash
   git checkout main
   git pull origin main
   git checkout -b features/JohnDoe/123
   ```

2. **Commit Changes:**
   - Ensure that your commits are clear and concise. Each commit should reflect a logical unit of work (e.g., adding a feature, fixing a bug).
   - Follow a consistent commit message style, such as:
     - `[Feature] Add functionality for X`
     - `[Fix] Resolve issue Y`
     - `[Refactor] Update code for Z`
   - Avoid making large or unrelated commits in a single branch.

3. **Push to Remote:**
   - After committing your changes locally, push your feature branch to the remote repository.

   ```bash
   git push origin features/JohnDoe/123
   ```

4. **Create a Pull Request (PR):**
   - After pushing your feature branch to GitHub, create a Pull Request (PR) to merge your changes into the main branch.
   - Provide a detailed description of the changes in the PR, including context, the issue you're addressing, and the solution.

5. **Code Review:**
   - Your changes will be reviewed by peers or maintainers. During this phase:
     - Address any feedback and make adjustments as needed.
     - Re-request reviews if additional changes are made.
     - If necessary, update your branch with the latest changes from main to avoid conflicts before merging:

     ```bash
     git fetch origin
     git merge origin/main
     ```

6. **Merge:**
   - Once your PR is approved and any necessary reviews have been completed, merge the PR into the main branch.
   - The PR should be merged by a maintainer after reviewing.
   - Always delete the feature branch after merging to keep the repository clean:

   ```bash
   git branch -d features/JohnDoe/123
   ```

### Important Notes:

- **Sync regularly with main:** Always keep your feature branch in sync with the latest changes from the main branch to minimize merge conflicts.

  ```bash
  git fetch origin
  git merge origin/main
  ```

- **Avoid long-lived feature branches:** Feature branches should be short-lived to minimize the potential for merge conflicts. Try to merge them as soon as your feature or fix is completed.
- **Branch deletion:** Once the feature branch is merged, delete it to avoid cluttering the repository with unused branches.

By following this branching strategy and workflow, we can maintain a clean and organized development process that ensures efficient collaboration and a stable production environment.
