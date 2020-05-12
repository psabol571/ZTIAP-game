///////////////////////////////////////////////.......MY IMAGE...///////////////////////////////////////////////////
class MyImage extends Widget
{
    constructor(x, y , source)
    {
        let avatar=new Image();
        avatar.src=source;

        super(x, y, avatar.naturalWidth, avatar.naturalHeight);
        this.avatar=avatar; 
        this.width=this.avatar.width;
        this.height=this.avatar.height;
    }
    ondraw(ctx) 
    {
        ctx.drawImage(this.avatar, 0, 0);
    }
}

///////////////////////////////////////////////////////////////....MyText........./////////////////////////////////
class MyText extends Widget
{
  constructor(text,x,y,width,height,size,fillStyle,allign)
  {
    super(x,y,width,height);
    this.text=text;
    this.size=size;
    this.fillStyle=fillStyle;
    this.allign=allign;
  }
  ondraw(ctx)
  {
    ctx.font=""+this.size+"px Arial";
    ctx.fillStyle=this.fillStyle;
    ctx.textAlign=this.allign;
    if(this.allign=="center")
      ctx.fillText(this.text, this.width / 2, this.height / 2);
    else
      ctx.fillText(this.text, this.x, this.y);

  }
}

///////////////////////////////////////////////...............BUTTON................/////////////////////////////
class Button extends Widget 
{
    constructor(text, x, y, width, height, source) 
    {

        super(x, y, width, height); 
        this.avatar=new Image();
        this.avatar.src=source;
        this.text = text;
        this.pressed = false;
        this.sound=true;
        this.offs=5;
        
    }
  
    ondraw(ctx) {
      ctx.drawImage(this.avatar, 0, 0);
      ctx.font = "25px Arial";
      ctx.fillStyle = "brown"
      ctx.textAlign = 'center';
      ctx.fillText(this.text, this.width / 2, this.height / 2);
      if(!this.sound)
      {
        ctx.save();
        ctx.lineWidth=3;
        ctx.beginPath();
        ctx.moveTo(0+this.offs, 0+this.offs);
        ctx.lineTo(this.width-this.offs,this.height-this.offs);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.width-this.offs,0+this.offs);
        ctx.lineTo(0+this.offs,this.height-this.offs);
        ctx.stroke();
        ctx.restore();
      }
    }
  
    onclick(event) {
      this.pressed = !this.pressed;
      this.action();
    }

    action() {;}
}

///////////////////////////////////////----TEXTFIELD----///////////////////////////////////
class Textfield extends Widget 
{
  constructor(x, y, w, h) 
  {
    super(x, y, w, h);

    this.bg=new Image();
    this.bg.src="../graphics/UI/textfield.png";

  }

  ondraw(ctx) {
    ctx.save();
    ctx.drawImage(this.bg,0,0);

    ctx.font = "35px Arial";
    ctx.fillStyle = "white";
    if (this.focus) 
    {
      ctx.fillStyle="grey";
      ctx.fillText(app.nick + "_", 100, 60);
    }

    else
      ctx.fillText(app.nick, 100, 60);
    ctx.restore();
  }

  
  onkey(event) 
  {
    var key = event.which
    switch (key) {
      case 8: app.nick = app.nick.substring(0, app.nick.length - 1); break;
      case 13: this.action(); break;
      default: app.nick += String.fromCharCode(key); break;
    }
    //console.log(event);
  }

  action() {this.focus=false;}
}