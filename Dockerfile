FROM databoxsystems/databox-node-arm64v8-base:0.0.3

ADD ./package.json package.json
RUN npm install --production
ADD . .

LABEL databox.type="app"

EXPOSE 8080

CMD ["node","./server.js"]