<!DOCTYPE html>
<html lang="en">

<head>
	<title>RIT Finder</title>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- No indexing yet -->
	<meta name="robots" content="noindex">

	<?php include('../components/Globals.php') ?>

	<style>
		h1,
		h2,
		h3 {
			font-family: "Tiny5", sans-serif;
			font-weight: 400;
			font-style: normal;
		}

		aside {
			float: right;
			margin-left: 1em;


			img {
				object-fit: cover;
				object-position: 20% 50%;
				border-radius: 0.5em;
				border: solid 0.25em var(--primary-color);
			}

			@media (width < 48rem) {
				float: none;
				margin-left: 0;

				img {
					object-position: center;
					width: 100%;
				}
			}
		}

		ul {
			display: flex;
			flex-direction: column;
			gap: 5px;
			margin-block: 5px;
		}
	</style>

</head>

<body>
	<?php include('../components/TopNav.php') ?>
	<main>
		<header>
			<h1>RIT where can I find...? </h1>
			<p>It is sometimes hard to find certain pages so here is a list of where certain things are.</p>
		</header>
		<section>
			<ul>
				<li>
					<a href="https://mylife.rit.edu" target="_blank" rel="noopener noreferrer">mylife.rit.edu</a>
					<ul>
						<li>
							<strong>Dining</strong>
							<ul>
								<li>Meal Plan Application</li>
								<li>Meal Plan Change</li>
								<li>Meal Plan Exception</li>
							</ul>
						</li>
						<li>
							<strong>Campus Housing</strong>
							<ul>
								<li>Rooming Application</li>
								<li>Rooming Information</li>
								<li>Roommate Agreement</li>
								<li>Room Change Form</li>
								<li>Greek Proxy</li>
								<li>Bed Height</li>
								<li>Residency Verification</li>
								<li>Freshman Rooming Release</li>
							</ul>
						</li>
						<li>
							<strong>Communication</strong>
							<ul>
								<li>DSP Mail Room Package Forwarding</li>
								<li>Text Message Preferences</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					<a href="https://start.rit.edu" target="_blank" rel="noopener noreferrer">start.rit.edu</a>
					<ul>
						<li>
							<strong>Account</strong>
							<ul>
								<li>View University ID (UID)</li>
								<li>Name Preferences</li>
								<li>Email Alias</li>
								<li>Email Forwarding</li>
								<li>Email Published </li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</section>
	</main>
</body>