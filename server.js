console.log("starting server")
const compression = require('compression');
const express = require('express');
const path = require('path');
const databox = require("node-databox");
const https = require("https");
const http = require("http");
const bodyParser = require("body-parser");
const WebSocket = require('ws');

const DATABOX_TESTING = !(process.env.DATABOX_VERSION);
const port = DATABOX_TESTING ? 3000 : process.env.port || '8080'
const DATABOX_ZMQ_ENDPOINT = process.env.DATABOX_ZMQ_ENDPOINT || "tcp://127.0.0.1:5555";

let InstagramData;
let FlickrData;

instakvc = databox.NewKeyValueClient(DATABOX_ZMQ_ENDPOINT, false);
flickrkvc = databox.NewKeyValueClient(DATABOX_ZMQ_ENDPOINT, false);

//create store schema for saving key/value config data
FlickrConfig = {
	...databox.NewDataSourceMetadata(),
	Description: 'Flickr driver data',
	ContentType: 'application/json',
	Vendor: 'BBC',
	DataSourceType: 'flickr::photodata',
	DataSourceID: 'FlickrDataStore',
	StoreType: 'kv',
};
	
InstaConfig = {
	...databox.NewDataSourceMetadata(),
	Description: 'Instagram driver data',
	ContentType: 'application/json',
	Vendor: 'Toshbrown',
	DataSourceType: 'instagram::photodata',
	DataSourceID: 'InstagramDatastore',
	StoreType: 'kv',
};

//listen in on the flickr data store, which we have asked permissions for in the manifest
databox.HypercatToSourceDataMetadata(process.env[`DATASOURCE_InstagramDatastore`]).then((data) => {
	InstagramData = data
	return databox.NewKeyValueClient(InstagramData.DataSourceURL, false)
}).then((store) => {
	instakvc = store;
	return store.Read(InstagramData.DataSourceMetadata.DataSourceID)
}).then((emitter) => {
	console.log(emitter)
}).catch((err) => {
	console.warn("Error Observing Instagram Data Store", err);
});

//listen in on the flickr data store, which we have asked permissions for in the manifest
databox.HypercatToSourceDataMetadata(process.env[`DATASOURCE_FlickrDataStore`]).then((data) => {
	FlickrData = data
	return databox.NewKeyValueClient(FlickrData.DataSourceURL, false)
}).then((store) => {
	flickrkvc = store;
	return store.Read(FlickrData.DataSourceMetadata.DataSourceID)
}).then((emitter) => {
	console.log(emitter)
}).catch((err) => {
	console.warn("Error Observing Flickr Data Store", err);
});


const app = express();
const router = express.Router();
router.use(compression());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(express.static(path.join(__dirname, 'build')));

router.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/build/index.html`));
});

router.get('/manage-services/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/build/index.html`));
});

router.get('/gallery/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/build/index.html`));
});

router.post("/loadflickr", async (request, response) => {
	const { key } = request.body;

	console.log("Request to load key:", key);
	try {
		await new Promise((resolve, reject) => {
			console.log("Reading from store");
			flickrkvc.Read(FlickrConfig.DataSourceID, "photosdata")
				.then((result) => {
					console.log(`Successfully read ${key}:`, result);
					response.send({ read: !!result, result });
					resolve();
				})
				.catch((error) => {
					console.log(`Failed read ${key}`, error);
					reject(error);
				});
		});

	}
	catch (error) {
		console.log("Error reading from store", error);
		response.send({ read: false, error });
	}
});

router.post("/loadinsta", async (request, response) => {
	const { key } = request.body;

	console.log("Request to load key:", key);
	try {
		await new Promise((resolve, reject) => {
			console.log("Reading from store");
			instakvc.Read(InstaConfig.DataSourceID, "meta")
				.then((result) => {
					console.log(`Successfully read ${key}:`, result);
					response.send({ read: !!result, result });
					resolve();
				})
				.catch((error) => {
					console.log(`Failed read ${key}`, error);
					reject(error);
				});
		});

	}
	catch (error) {
		console.log("Error reading from store", error);
		response.send({ read: false, error });
	}
});

var baseUiPath="/ui";
function makeUiPath(path){
	return `${baseUiPath}/${path}`;
}

function setupTesting() {
	baseUiPath='/bbc-box-photo-app/ui'
	app.use(baseUiPath, router)
	console.log("[Creating TEST http server]", port);
	return http.createServer(app);
}

function setupLive() {
	app.use(baseUiPath, router)
	console.log("[Creating https server]", port);
	const credentials = databox.getHttpsCredentials();
	return https.createServer(credentials, app);
}

const server = DATABOX_TESTING ? setupTesting() : setupLive();
const wss = new WebSocket.Server({ server, path: makeUiPath("ws") });

wss.on("connection", (_ws) => {
	console.log("connection to WS open");
	GolobalWS = _ws;

	GolobalWS.on("close", (err) => {
		console.log("connection to WS closed", err);
		if (GolobalWS) {
			GolobalWS = null;
		}
	})
});

wss.on("error", (err) => {
	console.log("websocket error", err);
	if (GolobalWS) {
		GolobalWS = null;
	}
});

server.listen(port);