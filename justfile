# Default command: List all available recipes
default:
    @just --list

# Start the development server in the background
dev:
    npx astro dev --background

# Stop the background development server
stop:
    npx astro dev stop

# Check the status of the background development server
status:
    npx astro dev status

# View logs from the background development server
logs:
    npx astro dev logs

# Build the static site for production
build:
    npm run build

# Preview the built production site locally
preview: build
    npm run preview

# Test the site (currently verifies the build compiles successfully)
test: build
    @echo "Build succeeded. (Note: Add a testing framework like Vitest or Playwright for advanced testing)."
