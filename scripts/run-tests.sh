#!/bin/sh
# Simple helper script to run the project's tests.
# It checks for required CLI tools and tries to install
# them using npm if they are missing.
set -e

require() {
    if ! command -v "$1" >/dev/null; then
        return 1
    fi
}

# Ensure Node.js is available
if ! command -v npm >/dev/null; then
    echo "Error: npm is not installed. Install Node.js to continue." >&2
    exit 1
fi

# Install dependencies if node_modules does not exist
if [ ! -d node_modules ]; then
    echo "Installing npm dependencies..."
    npm install
fi

# Check for roblox related tools
missing=0
if ! require rbxtsc; then
    echo "rbxtsc not found. Installing roblox-ts globally..."
    npm install -g roblox-ts || missing=1
fi
if ! require rojo; then
    echo "Rojo CLI not found. Installing rojo-cli globally..."
    npm install -g rojo-cli || missing=1
fi
if ! require lemur; then
    echo "Lemur CLI not found. Installing lemur globally..."
    npm install -g lemur || missing=1
fi

if [ "$missing" -eq 1 ]; then
    echo "One or more tools failed to install. Please check the output above." >&2
fi

# Run the actual test command
npm test
