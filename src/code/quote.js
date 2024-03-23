{js:
const getBuff = (path, yop) => fetch(yop ? "http://87.244.131.254:4200/" + path : path).then(res=>res.arrayBuffer());
const avatarUrl = "{avatar:{js:(ctx.target=(message?.referenced_message \|\| message),ctx.target)?.author?.id}}";
{ignore:(async()=>{
    args = args.join(" ").split(" ")
    const target = ctx.target; // (it's set in the js block that is inside the avatar variable)
    const getDefaultAvatarIndex = (user) => user.discriminator === "0" ? Math.abs((user.id << 22) % 6) : user.discriminator % 5;

    const robotoLight = await getBuff("assets/fonts/Roboto/Roboto-Light.ttf", true)
        .then(buff => new Uint8Array(buff))
        .catch(e=>{throw `Failed to load/download font "Roboto-Light"\n${e?.stack??e}`});
       
    const layout = new ImageScript.TextLayout({
        maxHeight: 458,
        maxWidth: 528,
        wrapStyle: "word",
        wrapHardBreaks: false,
        horizontalAlign: "middle"
    });   
       
    const back = new ImageScript.Image(1280,720).fill(0x000000FF);   
       
    const front = await getBuff("assets/oulays/quote/116_sin_titulo.png", true)
        .then(ImageScript.decode)
        .catch(e=>{throw `Failed to load/download overlay image\n${e?.stack??e}`});
    front.resize(1280, 720);

    const avatar = await getBuff(avatarUrl+"?size=512")
	    .then(ImageScript.decode)
	    .catch((e) => 
	        getBuff(`http://cdn.discordapp.com/embed/avatars/${getDefaultAvatarIndex(target.author) || 0}.png`)
                .then(ImageScript.decode)
                .catch(е=>{throw `Failed to load/download background image ${JSON.stringify([e?.stack??e, е?.stack??е],0,2)}`})
        );

    let content = target.id == message.id ? args.filter(arg => !arg.startsWith("--")).join(" ") : target.content;

    avatar.resize(720, 720);
    avatar.lightness(0.7);  
    front.lightness(0.8); 
    avatar.saturation(0);   
    back.composite(avatar,-80,0);  
    back.composite(front, 0,0);  
       
    let nameRender = await ImageScript.Image.renderText(robotoLight, 35, "- " + target.author.username, 0x999999FF);   

    back.composite(nameRender, front.width/1.35-nameRender.width/1.35, front.height/1.2);   
       
    let contentRender = await ImageScript.Image.renderText(robotoLight, 40-(parseInt(content.length)/(parseInt(content.length)/5)), `"${content.slice(0,258)}"`, 0xFFFFFFFF, layout);   
    back.composite(contentRender, front.width/1.7-nameRender.width/1.6, (front.height/6)-39);   
       
    return back.encode();
})()}}
