FROM node:17.7.1-slim

ENV REPOSITORY=react-training

RUN npx create-react-app@5.0.0 ${REPOSITORY}

# WORKDIR /${REPOSITORY}

# CMD ["npm" "start"]
