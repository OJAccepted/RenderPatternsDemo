import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/app';
import OtherApp from './components/otherApp';

export async function ssr({ streaming, ...props }) {
	if (streaming) {
		return ReactDOMServer.renderToNodeStream(<App {...props} />);
	}
	else {
		return ReactDOMServer.renderToString(<App {...props} />);
	}
}

export async function otherSSR({ streaming, ...props }) {
	if (streaming) {
		return ReactDOMServer.renderToNodeStream(<OtherApp {...props} />);
	}
	else {
		return ReactDOMServer.renderToString(<OtherApp {...props} />);
	}
}

export default {
	ssr,
	otherSSR,
}