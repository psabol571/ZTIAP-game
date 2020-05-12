class Node 
{
    constructor() 
    {
      this.nodes = [];
    }

    add(node) 
    {
      this.nodes.push(node);
    }
  
    remove(node) 
    {
      let index = this.nodes.indexOf(node);
      delete this.nodes[index];
    }
    
    notify(  ) 
    {
      let event = arguments[0];
      let args = Array.prototype.slice.call(arguments, 1);

      
      for (let i=0;i<this.nodes.length;i++) 
      {
          let node = this.nodes[i];
          if (node && typeof(node[event]) == "function")
              node[event].apply(node, args);
      }
    }

    sceneChange(source)
    {
      if(source instanceof Node)
      {
        this.nodes=source.nodes;
      }
    }
    
}

/////////////////////////////////////////////////////////////////....WIDGET......////////////////////////////

class Widget extends Node 
{
    constructor(x, y, width, height) {
      super();
  
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.visible = true;
      this.focus = false;
    }

    draw(ctx) 
    {
      if (this.visible)
      {
        ctx.save();
        ctx.translate(this.x, this.y);
        this.ondraw(ctx);
        this.notify("draw", ctx);
        ctx.restore();
      }
    }
    ondraw(ctx) {;}

    click(point) 
    {
      if (this.visible)
      {
        let localPoint = {
            x: point.x - this.x,
            y: point.y - this.y,
        }
    
        if (0 < localPoint.x && localPoint.x < this.width &&
            0 < localPoint.y && localPoint.y < this.height) 
        {
            this.focus = true;
            this.onclick(localPoint);
        } 
        else this.focus = false;
    
        this.notify("click", localPoint);
      }
    }
  
    onclick(point) {;}
  

    key(key) 
    {
      if (this.visible)
      {
        if (this.focus) 
            this.onkey(key);

        this.notify("key", key);
      }    
    }

    onkey(key) 
    {
      //console.log(key.keyCode);
    }

    move(){;}
}