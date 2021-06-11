function reference(link) {
	const headerContent = `
    <p>Wanna suggest something or want to ask a question? &nbsp;<a href="https://scratch.mit.edu/users/PoIygon/#comments" target="_blank">Ask here!</a></p>
    <p>Wanna talk about this website and give feedback? &nbsp;<a href="https://scratch.mit.edu/discuss/topic/519652/" target="_blank">Ask here!</a></p>
    <p>also this site is &nbsp;<a href="https://github.com/poIygon/PoIygon.github.io" target="_blank">Open sourced</a></p>
    <p id="smaller">This website is made by &nbsp;<a href="https://scratch.mit.edu/users/PoIygon/">PoIygon</a></p>`
	document.getElementById("topnav").innerHTML = headerContent;

	const footerContent = `
	<a href="/pages/Home/"><i class="fa fa-fw fa-home"></i> Home</a>
    <a href="/pages/Blog/"><i class="fa fa-fw fa-address-book"></i> Blog</a>
    <a href="/pages/Contact/"><i class="fa fa-fw fa-envelope-open"></i> Contact</a>
    <a href="https://scratch.mit.edu/users/PoIygon/"><i class="fa fa-fw fa-code"></i> Scratch</a>
    <a href="https://postpercent.rirurin.com/users/PoIygon/"><i class="fa fa-fw fa-snapchat-ghost"></i> PostPercent</a>`
	document.getElementById("footer").innerHTML = footerContent;