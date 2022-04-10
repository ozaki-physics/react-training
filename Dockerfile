FROM node:17.7.1-slim

ENV REPOSITORY=react-training
ENV dir=share_dir

RUN mkdir ${dir}
WORKDIR /${dir}
RUN npx create-react-app@5.0.0 ${REPOSITORY} --template typescript

# CMD ["npm" "start"]
