<!DOCTYPE html>
<html lang="en">

<head>
	<title>~tgp5235</title>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="preconnect" href="https://fonts.bunny.net">

	<?php include('components/Globals.php') ?>

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
	</style>
</head>

<body>
	<?php include('components/TopNav.php') ?>

	<main>
		<aside>
			<img src="thumb.webp" alt="picture of my shadow taking a picture of my shadow" width="200" height="250">
		</aside>
		<header id="top">
			<h1>Tristie Pedulli /(o_o)/</h1>
			<small style="opacity: 0.7">she/her</small>
			<p>Hey and welcome to my epic web site at <a href="//people.rit.edu">people.rit.edu</a>.</p>
		</header>
		<hr>
		<section aria-labelledby="about">
			<h2 id="about">About</h2>
			<p>
				I am in the RIT class of 2029, majoring in web and mobile computing. Besides being greatly interested in
				web development, I like to partake in singing, graphic designing, acting, biking, and sometimes
				bouldering. I am using this website to strengthen my writing ability via loads of yapping.
			</p>
		</section>
		<section aria-labelledby="programming">
			<h2 id="programming">Programming</h2>
			<p>
				I am a full stack web developer who started backend but has been moving more frontend over time. I like
				to make websites for fun using whatever technologies I feel like using at the time. I use vanilla HTML,
				JS and CSS for small things such as this website, however most of the time I use the tech mentioned
				below.
			</p>
			<ul>
				<li>
					<strong>Sveltekit</strong>
					is my web framework of choice. I find that Svelte is both incredibly intuitive but also just as
					rewarding. The release of Svelte 5 added back some of the complexity that was previously hidden, but
					the team was able to justify it well and after using it I can confidently say that I like the
					direction they are taking it. There are currently two proposals going on, async Svelte and Remote
					functions, that have made me ecstatic.
				</li>
				<li>
					<strong>TailwindCSS</strong>
					is what I use for styling my websites. The utility class ideology of Tailwind flies
					directly in the face of the popular "separation of concerns" design philosophy, and that's what I
					like about it. By breaking this pattern it created a new way to think. That aside, Tailwind is a
					great medium for quickly turning ideas into reality.
				</li>
				<li>
					<strong>Bun</strong>
					is the JavaScript server runtime that I primarily use. I use it because it is Node.js but is better
					and has cuter branding.
				</li>
				<li>
					<strong>Elysia</strong>
					is an HTTP router I like. Imagine if Express.js was the best thing ever, but the deceptiveness of
					the learning curve was powerful enough to make any programmer trade in their god complex for
					imposter syndrome. As someone who went from Express to Elysia, the curve hit hard. The syntax for
					Elysia is very similar to Express, however the things that are different are different enough to
					require a restructuring of your mental model of your project to understand. Do not make the mistake
					of trying to force it to act like Express, as a common side effect is madness. The ecosystem for
					Elysia is small, and the documentation for certain things can be a pain to find at times, but once
					you figure it all out it's the best possible experience which is why I love Elysia.
				</li>
				<li>
					<strong>Postgres and Drizzle</strong>
					are what I use for my database and database ORM respectively. I avoid databases like the plague but
					these make them semi manageable sometimes.
					UPDATE 2026: Drizzle updated <a href="https://orm.drizzle.team/docs/relations-v2" target="_blank"
						rel="noopener noreferrer">how relations are defined</a> and made it infinitely more fun, plus
					I'm learning a bit of SQL so databases are no longer a terminal fear for me.
				</li>
			</ul>
			<p>
				Feel free to strike up a conversation with me about web technologies anytime. I am curious of the
				viewpoints of others and how they may differ and/or align with mine.
			</p>
		</section>
		<!-- <section aria-labelledby="making">
			<h2 id="making">What I'm making</h2>
			<p>
				I am currently working on many projects, here is a centralized list of them and their branching side
				projects so you can see what I am doing, but also so I remember everything I am doing.
			</p>
			<ul>
				<li>
					<strong>Heavy Core</strong>
					is the name of the Minecraft server management software I am developing. With inspiration from
					Lodestone, I am working towards making a frontend / backend service to manage several minecraft
					servers with the premise being that the filesystem is the database in a sense, so you own your own
					data and can run the servers normally without needing to use it. (Similar to how Obsidian works)
				</li>
				<li>
					<strong>The SSE's Mentor Schedule</strong> is what I am tasked in creating for the Society of
					Software Engineers. The codebase is written using Next.js, which I have never used technically, but
					I am fairly efficient at self teaching myself code, as well as the fact that many
					frameworks have parallel concepts, so I picked it up easily. I see the appeal of multi-component
					files and server/client separation, however I do miss the elegance of Svelte sometimes.
				</li>
				<li>
					<strong>Discord Email Verification</strong> for the SSE. This project is one I recently joined as a
					helper after I made a prototype to prove my point on why we should use SSO over OTP. If you know you
					know. I may polish my prototype and offer to use it as the base of the planned bot, if I get around
					to it.
				</li>
				<li>
					<strong>RITris</strong> is a collection of projects I have planned and have started which is a
					central hub of quality of life tools I am developing for use by fellow RIT students. Each tool is
					going to be located on ritris.com once enough of them are polished, but for now you can read a few
					of my tools I am making for it.
					<ul>
						<li>
							<strong>Directris</strong> is a directory of links and other things that can be
							customized. I made one of these in high school and got suspended for it so I have a high bar
							to reach for this iteration. Despite seeming easy, making this future proof and moddable
							will be a feat as of itself.
						</li>
						<li>
							<strong>Budgetris</strong> is a tool I started after finding an unintended feature in the
							TigerSpend website that allows me to get access to a person's full financial history (with
							their collaboration, of course). With this data we can analyze it to make some cool graphs
							and statistics. This page mainly needs a better UI as well as more stats.
						</li>
						<li>
							<strong>What's Playing?</strong> is the name of a concept online client for checking the
							RockBot queues of places on campus. This is not yet in development but is planned.
						</li>
					</ul>
				</li>
			</ul>
			<p>
				I put this section between design and development because many of these projects are at the crossroads
				of those two skills.
			</p>
		</section> -->
		<section aria-labelledby="design">
			<h2 id="design">Design</h2>
			<p>
				I have openly admitted in the past that if I wasn't a programmer I'd probably be a designer due to my
				acute attention to detail. Being a perfectionist can be a blessing and a curse but when it comes to
				designing multimedia it definitely has its uses. In the future I'll put a few examples of things I have
				designed for sites. My design tool is TailwindCSS (referenced earlier) because of how streamlined the
				iteration process is.
			</p>
			<br>
			<p>
				For me, code design is very important. I spend a long time formatting my code to look
				exactly how I want it to look, which can be super particular at times, despite no one else ever looking
				at my code. I have also written my fair share of horrendous looking code but we do not need to talk
				about that. If you look at the HTML source for this website you'll see it's super semantic and well
				organized for no reason and that's what I'm all about. The VSCode default formatter and spellcheck
				extension are my best friends.
			</p>
		</section>
		<section aria-labelledby="music">
			<h2 id="music">Music</h2>
			<p>The music section consists of both my music taste as well as my musical process as I am a musician.</p>
			<article>
				<h3>My Music Taste</h3>
				<p>Below are some genres I like to listen to.</p>
				<ul style="gap: 0.25em">
					<li>indie rock/pop</li>
					<li>classic rock</li>
					<li>semi-heavy rock</li>
					<li>little bit of folk</li>
					<li>chill electronic</li>
					<li>alternative</li>
				</ul>
				<p>
					If you have any overlap in genres please give album recs. To be honest, please give album recs even
					if we listen to entirely different music.
				</p>
			</article>
			<article>
				<h3>Music Making Process</h3>
				<p>
					I have a few music making processes depending on what kind of music I am making. I primarily make a
					whole bunch of a capella "demos" using a deprecated app on my phone. These range in quality but none
					are meant to be interpreted verbatim, more so interpreted as the key concepts I like to call the
					"bones" of the music. I will maybe attach some demos here at some point.
				</p>
			</article>
		</section>
		<section aria-labelledby="notice">
			<h2 id="notice">Notices</h2>
			<p>
				No generative "AI" was used in the making of this website. Most of the content on this website was
				written in a few hours of procrastination of more important work. I am adding this disclaimer because of
				the previous reasoning but also to remind myself to write more in depth about my stance on it because
				the debate is not black and white when contextualized. As a preview of my stance I will say that most
				use cases are stupid. I consider myself neither pro nor anti AI.
			</p>
			<br>
			<p>
				Another thing I should note is my goal to make this page easy to understand and follow, to compensate
				for my poor vocal explanation skills. If you think something could be better articulated, please do not
				be afraid to reach out to me so I can work on it. I apologize for the number of commas included in my
				writing.
			</p>
			<br>
			<p>
				Lastly, I strive for an accessible internet, so if you have any input on how I can improve accessibility
				of my work, please do share.
			</p>
		</section>
		<section aria-labelledby="contact">
			<h2 id="contact">Contact</h2>
			<p>
				If you would like to contact me about anything feel free to shoot me an email at my address which is the
				letter t at mail.rit.edu. Or just talk to me in person if you know what I look like.
			</p>
		</section>
		<footer>
			<address style="opacity: 0.7; text-align: center;">
				Made by Tristie Pedulli
				<p>
					The source for this website can be found <a href="https://github.com/pedulli/people">on GitHub.</a>
				</p>
				<small>
					last updated <?php echo date('M d, Y @ g:ia', filemtime(__FILE__)) ?> est
				</small>
			</address>
		</footer>
	</main>
</body>

</html>