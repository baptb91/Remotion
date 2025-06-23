FROM node:22-bookworm-slim

# Installe les dépendances Chrome
RUN apt-get update && apt-get install -y \
  libnss3 \
  libdbus-1-3 \
  libatk1.0-0 \
  libgbm-dev \
  libasound2 \
  libxrandr2 \
  libxkbcommon-dev \
  libxfixes3 \
  libxcomposite1 \
  libxdamage1 \
  libatk-bridge2.0-0 \
  libpango-1.0-0 \
  libcairo2 \
  libcups2

# Copie les fichiers du projet
WORKDIR /app
COPY . .

# Installe les dépendances Node
RUN npm install

# Installe Chrome pour Remotion
RUN npx remotion browser ensure

# Lance Remotion Studio
CMD ["npx", "remotion", "studio"]
