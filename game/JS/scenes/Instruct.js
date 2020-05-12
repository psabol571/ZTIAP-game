function makeInstruct()
{
    let background=new MyImage(0,0,"../graphics/background/BACKGROUND.png");
    let menu=new MyImage(25,43,"../graphics/UI/menu.png");
    let header=new MyText("Instructions",0,0,800,300,55,"#3f2a14","center");
    let text=[];
    text[0]=new MyText("Aim ",150,180,240,100,25,"brown","center");
    text[1]=new MyText("ArrowUp, ArrowDown",350,180,240,100,25,"brown","center");
    text[2]=new MyText("Shoot ",150,250,240,100,25,"brown","center");
    text[3]=new MyText("Space",350,250,240,100,25,"brown","center");
    text[4]=new MyText("Heal",150,320,240,100,25,"brown","center");
    text[5]=new MyText("H",350,320,240,100,25,"brown","center");

    let backButton=new Button("",10,10,48,48,"../graphics/UI/back.png");
    backButton.action=function () 
    {app.sceneChange(sceneFirstMenu);}

    

    sceneInstruct.add(background);
    sceneInstruct.add(menu);
    sceneInstruct.add(header);
    sceneInstruct.add(backButton);
    
    for(let i in text)
    sceneInstruct.add(text[i]);
}