function makePause()
{
    let background=new MyImage(0,0,"../graphics/background/BACKGROUND.png");
    let menu=new MyImage(25,43,"../graphics/UI/menu.png");
    let header=new MyText("Pause",0,0,800,300,55,"#3f2a14","center");
    let text=[];
    text[0]=new MyText("Aim ",150,180,240,100,25,"brown","center");
    text[1]=new MyText("ArrowUp, ArrowDown",350,180,240,100,25,"brown","center");
    text[2]=new MyText("Shoot ",150,250,240,100,25,"brown","center");
    text[3]=new MyText("Space",350,250,240,100,25,"brown","center");
    text[4]=new MyText("Heal",150,320,240,100,25,"brown","center");
    text[5]=new MyText("H",350,320,240,100,25,"brown","center");
    

    let QuitGame=new Button("Quit Game",100,380,200,100,"../graphics/UI/field.png");
    QuitGame.action=function()
    {
      leaderboards.updatearray();
      leaderboards.array2storage();
      app.sceneChange(sceneFirstMenu);
      app.quit();
    }
    let resume=new Button("Resume Game",500,380,200,100,"../graphics/UI/field.png");
    resume.action=function()
    {
      app.unpauseStage();
      app.sceneChange(sceneGame);
      if(app.music[0].playing)
      {
        app.music[0].stop();
        app.music[1].play();
      }
    }


    scenePause.add(background);
    scenePause.add(menu);
    scenePause.add(header);
    scenePause.add(QuitGame);
    scenePause.add(resume);
    
    for(let i in text)
    scenePause.add(text[i]);
}