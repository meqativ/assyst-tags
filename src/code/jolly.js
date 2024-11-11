{set:avatar|{if:{js:/<@!?(\d+)>/.test("{tryarg:0}")}|=|true|{avatar:{tryarg:0}}|{avatar:{userid}}}}{js:
    args = args.join(" ").split(" ")
    let lastattachment = `{lastattachment}`;
    let avatarURL = `{get:avatar}`{ignore:
    function discordue(input) {
        const em = input.match(/<(a?):\w+:(\d+)>/);
        if (em) {
            return `https://cdn.discordapp.com/emojis/${em[2]}.png?size=256&quality=lossless`
        }
    }
    let parsed = discordue(args[0]) | avatarURL
    const imageURL = message?.attachments?.[0] ? message.attachments.[0].url : parsed
    (async()=>{  
        let image = await fetch(imageURL).then(x => x.arrayBuffer()).then(ImageScript.decode); 
        if(image.width > image.height) image.crop((image.width - image.height)/2, 0, image.height, image.height); 
        else if(image.height > image.width) image.crop(0, (image.height- image.width)/2, image.width, image.width);   
        let bg1 = await fetch("https://meqativ.github.io/assyst-tags/src/assets/oulays/jolly.png").then(x => x.arrayBuffer()).then(ImageScript.decode);   
        let snow = await fetch("https://meqativ.github.io/assyst-tags/src/assets/oulays/snowfall.gif").then(x => x.arrayBuffer()).then(ImageScript.decode);  
        
        image.composite(bg1.fit(image.width, image.height), 0,0);  
        if (args.join(" ").includes("--animated")) {
            const outFrames = Array.from({length:snow.length}).map(()=>outFrameZero.clone());   
            outFrames.map((f,i)=>{   
            const snowOverlay = snow[i];   
            f.composite(snowOverlay.fit(f.width, f.height), 0, 0)   
            outFrames[i] = ImageScript.Frame.from(f)   
            })
        } else image.composite(bg2.fit(image.width, image.height), 0,0);  
    
        return image.encode()   
    })();
    }
}