#!/bin/bash

set -e

# Apply database migrations
echo "Applying database migrations..."
python manage.py makemigrations
python manage.py migrate

# Load initial data into the database
echo "Loading initial data into the database..."
python manage.py loaddata init.json


# Start the development server
python manage.py runserver 0.0.0.0:8000
echo "Starting the development server..."
exec "$@"
