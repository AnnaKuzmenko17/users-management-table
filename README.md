# User Management Table

This is a simple React application for rendering and managing user data in a table, with filtering options via a search input and radio group. It uses Vite for development and build processes and includes TypeScript, ESLint, and Prettier integration for a clean development experience.

## Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/getting-started/install)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-management-table.git
   cd user-management-table
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Scripts

The project includes the following npm scripts:

- **`npm run dev`**: Starts the development server using Vite.
- **`npm run build`**: Builds the project for production.
- **`npm run lint`**: Lints the code using ESLint and TypeScript.
- **`npm run preview`**: Previews the production build locally.
- **`npm run deploy`**: Deploys the production build to GitHub Pages.

## Usage

### Development

To start the development server and watch for code changes:

```bash
npm run dev
```

### Building for Production

To create a production build:

```bash
npm run build
```

### Deploying

To deploy the production build to GitHub Pages:

```bash
npm run deploy
```

## Project Structure

- **React**: The core framework for building the UI.
- **Vite**: Used for fast development builds.
- **TypeScript**: For type safety and improved code quality.
- **Axios**: For handling API requests.
- **Redux Toolkit**: For managing application state.
- **ESLint & Prettier**: For linting and code formatting.
- **gh-pages**: For easy deployment to GitHub Pages.

### Key Components

- **Table Component**: Displays the user data.
- **Filter Panel**: Includes a search input and a radio group for filtering.
  
## Linting & Formatting

To run the linter:

```bash
npm run lint
```

Make sure that your code follows the ESLint and Prettier rules configured in the project.

## License

This project is licensed under the MIT License.
