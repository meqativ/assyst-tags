{set:parsed|{js:"{tryarg:0}".match(/<@!?(\d+)>/)?.[1]}}{set:avatar|{if:{get:parsed}|=|undefined|{avatar:{tryarg:0}}|{avatar:{get:parsed}}}}{js:
    args = args.join(" ").split(" ")
    let lastattachment = `{lastattachment}`;
    let avatarURL = `{get:avatar}`;{ignore:
    let em; em = (em=args[0].match(/<(a?):\w+:(\d+)>/), em ? `https://cdn.discordapp.com/emojis/${em[2]}.png?size=256&quality=lossless` : undefined)
    let imageURL = message?.attachments?.[0] ? message.attachments[0].url : em;
    imageURL ??= avatarURL;
    (async()=>{ 
        let image = await fetch(imageURL).then(x => x.arrayBuffer()).then(ImageScript.decode); 
        if(image.width > image.height) image.crop((image.width - image.height)/2, 0, image.height, image.height); 
        else if(image.height > image.width) image.crop(0, (image.height- image.width)/2, image.width, image.width);   
        let bg1 = await fetch("https://meqativ.github.io/assyst-tags/src/assets/oulays/jolly.png").then(x => x.arrayBuffer()).then(ImageScript.decode);   
        let snow = await fetch("https://meqativ.github.io/assyst-tags/src/assets/oulays/snowfall.gif").then(x => x.arrayBuffer()).then(ImageScript.decode);  
        
        image.composite(bg1.fit(image.width, image.height), 0,0);
        if (args.join(" ").includes("--animated-snow")) {
            const outFrames = Array.from({length:snow.length}).map(()=>image.clone());   
            outFrames.map((f,i)=>{   
            const snowOverlay = snow[i];   
            f.composite(snowOverlay.fit(f.width, f.height), 0, 0)   
            outFrames[i] = ImageScript.Frame.from(f)   
            })
            return new ImageScript.GIF(outFrames).encode()
        } else {
            ctx.textOutput = `You can use "--animated-snow" or just "-snow"(outputs as png)`
            if (args.join(" ").includes("--snow")) image.composite(snow[0].fit(image.width, image.height), 0,0)
            return image.encode()
        }
    })();
    }
}