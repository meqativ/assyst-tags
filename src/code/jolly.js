{js:
    args = args.join(" ").split(" ")
    let image = `{tag:img|{args}}`;
    {ignore:
        (async()=>{  
            let im = await fetch(image).then(x => x.arrayBuffer()).then(ImageScript.decode); 
            if(im.width > im.height) im.crop((im.width - im.height)/2, 0, im.height, im.height); 
            else if(im.height > im.width) im.crop(0, (im.height- im.width)/2, im.width, im.width);   
            let bg1 = await fetch("https://meqativ.github.io/assyst-tags/src/assets/oulays/jolly.png").then(x => x.arrayBuffer()).then(ImageScript.decode);   
            let bg2 = await fetch("https://meqativ.github.io/assyst-tags/src/assets/oulays/snowflakes.png").then(x => x.arrayBuffer()).then(ImageScript.decode);  
            
            im.composite(bg1.fit(im.width, im.height), 0,0);  
            if (args.join(" ").includes("--snowflakes")) im.composite(bg2.fit(im.width, im.height), 0,0);  
        
            return im.encode()   
        })();
    }
}