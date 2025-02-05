import React from "react";
import Stream from "./stream";
import Header from "./header";

const Suspense =
	typeof window === "undefined" ? (p) => p.children : React.Suspense;

export default function App() {
	return (
		<div>
			<Header />
			<Suspense fallback={<div>loading</div>}>
				<Stream />
			</Suspense>
		</div>
	);
}
