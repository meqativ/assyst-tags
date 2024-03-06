{js:
const avatar = "{avatar:{js:(ctx.target=(message?.referenced_message?.author \|\|
		message?.mentions?.[0] \|\| // broken in assyst v1, fixed in assyst rewrite i hope
		message.author),ctx.target)?.id}}";
{ignore:(async()=>{
    const clownTarget = ctx.target; // (it's set in the js block inside avatar variable)
    const getDefaultAvatarIndex = (user) => user.discriminator === "0" ? Math.abs((user.id << 22) % 6) : user.discriminator % 5;
	const now = new Date();
    
	const tweet = await fetch(`https://raw.githubusercontent.com/meqativ/assyst-tags/main/assets/oulays/clowntweet.png`)
		.then((res) => res.arrayBuffer())
		.then(ImageScript.decode)
        .catch(e=>{throw `Failed to load/download background image\n${e?.stack??e}`});
        
	const robotoBold = await fetch(`https://raw.githubusercontent.com/meqativ/assyst-tags/main/assets/fonts/Roboto/Roboto-Bold.ttf`)
        .then((res) => res.arrayBuffer())
        .then((a) => new Uint8Array(a))
        .catch(e=>{throw `Failed to load/download font "Roboto-Bold"\n${e?.stack??e}`});
	const robotoLight = await fetch(`https://raw.githubusercontent.com/meqativ/assyst-tags/main/assets/fonts/Roboto/Roboto-Light.ttf`)
        .then((res) => res.arrayBuffer())
        .then((a) => new Uint8Array(a))
        .catch(e=>{throw `Failed to load/download font "Roboto-Light"\n${e?.stack??e}`});

	const layout = new ImageScript.TextLayout({
		maxHeight: 100,
		horizontalAlign: "top",
	});
	let clownName = await ImageScript.Image.renderText(
		robotoBold,
		26,
		clownTarget.username,
		0xffffffee,
		layout
	);
	let clownInfo = await ImageScript.Image.renderText(
		robotoLight,
		26,
		` • ${now.getDay()} ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][now.getMonth()]} ${now.getFullYear() % 100}`,
		0x777d84ee,
		layout
	);

	let clownAvatar = await fetch(`https://cdn.discordapp.com/avatars/${clownTarget.id}/${clownTarget.avatar}.png?size=128`)
	    .then((x) => x.arrayBuffer())
		.then(ImageScript.decode)
		.catch((e) => 
		    fetch(`https://cdn.discordapp.com/embed/avatars/${getDefaultAvatarIndex(clownTarget)}.png`)
	            .then((r) => r.arrayBuffer())
	            .then(ImageScript.decode)
	    );
	clownAvatar.cropCircle()
	clownAvatar.contain(93, 93); // resizes the image to fit in 93x93

	tweet.composite(clownName, 130, 823, 0);
	tweet.composite(clownInfo, 130 + clownName.width, 823, 0);
	tweet.composite(clownAvatar, 20, 829);
	return tweet.encode(9);
})();}}
