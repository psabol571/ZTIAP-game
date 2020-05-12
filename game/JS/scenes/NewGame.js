function makeNewGame()
{
    let background=new MyImage(0,0,"../graphics/background/BACKGROUND.png");
    let menu=new MyImage(25,43,"../graphics/UI/menu.png");
    let text=[];
    text[0]=new MyText("Type in your name",0,0,800,300,35,"#3f2a14","center");
    text[1]=new MyText("Select difficulty",0,250,800,100,35,"#3f2a14","center");
    let textfield=new Textfield(200,170,400,80);  

    let continueButton=new Button("",600,420,48,48,"../graphics/UI/continue.png");
    continueButton.action=function()
    {
        if(app.music[0].playing)
        {
            app.music[0].stop();
            app.music[1].play();

            for(let i in app.sounds)
                app.sounds[i].sound.volume =1;
        }
        app.sceneChange(sceneGame);
        console.log(app.nodes);
        app.startStage();
        // hard code nodes[5] and [4] can break if the order of nodes changes
        if(!app.music[1].playing)
        {
            app.nodes[5].sound=false;
            app.nodes[4].sound=false;
        } 
    }
    let backButton=new Button("",10,10,48,48,"../graphics/UI/back.png");
    backButton.action=function () 
    {app.sceneChange(sceneFirstMenu);}

    //difficulty
    let easy=new Button("Easy",95,310,200,100,"../graphics/UI/field.png");
    let normal=new Button("Normal",305,310,200,100,"../graphics/UI/field.png");
    let hard=new Button("Hard",515,310,200,100,"../graphics/UI/field.png");

    //default
    easy.sound=false;
    normal.sound=true;
    hard.sound=false;
    app.difficultyScale=1;

    easy.action=function ()
    {
        app.difficultyScale=0.6;
        easy.sound=true;
        normal.sound=false;
        hard.sound=false;
    }
    normal.action=function ()
    {
        app.difficultyScale=1;
        easy.sound=false;
        normal.sound=true;
        hard.sound=false;
    }
    hard.action=function ()
    {
        app.difficultyScale=1.5;
        easy.sound=false;
        normal.sound=false;
        hard.sound=true;
    }


    sceneNewGame.add(background);
    sceneNewGame.add(menu);
    sceneNewGame.add(continueButton);
    sceneNewGame.add(backButton);
    
    sceneNewGame.add(easy);
    sceneNewGame.add(normal);
    sceneNewGame.add(hard);

    for(i in text)
        sceneNewGame.add(text[i]);

    sceneNewGame.add(textfield);
}

