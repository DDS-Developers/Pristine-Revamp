// Components
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

// Dependencies
import Head from "next/head";
import React from "react";

function Master({ children }) {
	return (
		<React.Fragment>
			<Head>
				<title>Pristine 8.6+ | Air minum pH tinggi</title>
				<meta
					name="description"
					content="Pristine 8.6+ | Air minum pH tinggi"
				/>
				<link rel="icon" href="/assets/images/favicon.png" />
			</Head>
			<Navbar />
			<div className="container">{children}</div>
			<Footer />
		</React.Fragment>
	);
}

export default Master;
