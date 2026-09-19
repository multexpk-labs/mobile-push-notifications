#!/usr/bin/env bash
set -u

echo "=== PUSH NOTIFICATION ENVIRONMENT ==="
php -v 2>/dev/null | head -n 1 || true
node --version 2>/dev/null || true
python3 --version 2>/dev/null || true
echo "Use synthetic credentials and test projects for development."
