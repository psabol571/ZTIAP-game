class Sound
{

    constructor(source){
        this.sound = document.createElement("audio");
        document.body.appendChild(this.sound);
        this.sound.src = source;
        //this.sound.style.display = "none";
        
        this.playing=false;
    }

    play()
    {
        this.playing=true;
        let promise = this.sound.play();
        if (promise !== undefined) 
        {
            promise.then(_ => {;}).catch(error => {;});
        }
    }
    pause()
    {
        this.playing=false;
        this.sound.pause();
    }
    stop()
    {
        this.playing=false;
        this.sound.pause();
        this.sound.currentTime =0;
    }
}