import React from "react";

import Meta from "../components/Meta";
import Iam from '../components/Iam';
import Social from '../components/Social';
import Footer from '../components/Footer';

const IndexPage = () => (
	<React.Fragment>
		<Meta />
		<main>
			<div className="container" style={{ marginTop: 50 }}>
				<Iam />
				<Social />
			</div>
			<Footer />
		</main>
		<style jsx global>{`
			* {
				font-family: Menlo,'Courier New',Courier,monospace;
				color: #fff;
			}

			html, body, #__next, main {
				display: flex;
				flex: 1;
				min-height: 100%;
			}
			
			body {
				background: black;
			}
			
			main {
				flex-direction: column;
				justify-content: space-around;
			}

			.container {
				padding: 0 50px;
			}

			p, a {
				display: inline-block;
			}

			a {
				color: #fff;
			}

			a:hover {
        color: #50e3c2;
        text-decoration: underline;
      }

			p {
				line-height: 32px;
				color: #fff;
				margin: 0;
			}
		`}</style>
	</React.Fragment>
);

export default IndexPage;
