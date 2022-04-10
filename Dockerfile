FROM node:17.7.1-slim

ENV APP01=react-training
ENV APP02=react-training-ts
ENV dir=share_dir

RUN mkdir ${dir}
WORKDIR /${dir}
RUN npx create-react-app@5.0.0 ${APP01}
RUN npx create-react-app@5.0.0 ${APP02} --template typescript

# CMD ["npm" "start"]
