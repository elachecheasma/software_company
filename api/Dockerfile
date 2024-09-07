FROM python:3.11-slim

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    libpq-dev \
    gcc \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && pip install --upgrade pip

# Install Python dependencies
COPY requirements.txt /app/
COPY modules/ai-project-manager/requirements.txt /app/modules/ai-project-manager/requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . /app/

# Create a non-root user and set permissions
RUN groupadd -g 1000 user && useradd -u 1000 -g user -m user && chown -R user:user /app

# Switch to the non-root user
USER user

# Set the entrypoint
ENTRYPOINT ["./scripts/entrypoint.sh"]