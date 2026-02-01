# Lightweight Python image
FROM python:3.11-slim

WORKDIR /app

# Install dependencies
# COPY requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

# Expose port
EXPOSE 8000

# Command to run the application (Placeholder)
CMD ["python", "-m", "http.server", "8000"]
