let row=[310,360,410,460];
let rowG=[280,350,405];

function generateEnemies()
{
    switch(app.stage)
    {
        case 1: return setInterval(level1,1000);
        case 2: return setInterval(level2,1000);
        case 3: return setInterval(level3,1000);
    }
    //vrat to, ze kazdu sekundu zavolas generovanie    
}

function ork_sw(count)
{
    for(i=0;i<count;i++)
    {
        app.add(new ork_sword(row[Math.floor(Math.random()*4)]));
        app.enemiesCount++;
    }  
}
function ork_ax(count)
{
    for(i=0;i<count;i++)
    {
        app.add(new ork_axe(row[Math.floor(Math.random()*4)]));
        app.enemiesCount++;
    }  
}
function trol_mc(count)
{
    for(i=0;i<count;i++)
    {
        app.add(new troll_mace(rowG[Math.floor(Math.random()*3)]));
        app.enemiesCount++;
    }  
}
function trol_sh(count)
{
    for(i=0;i<count;i++)
    {
        app.add(new troll_sham(row[Math.floor(Math.random()*4)]));
        app.enemiesCount++;
    }  
}

function level1()
{
    let reltime= app.totalstagetime - app.stagetime;

    switch(reltime)
    {
        case 2: ork_sw(1); break;
        case 4: ork_sw(2); break;
        case 5: ork_sw(1); break;
        case 6: ork_sw(3); break;

        case 25: ork_sw(2); break;
        case 30: ork_sw(1); break;
        case 31: ork_sw(1); break;
        case 32: ork_sw(1); break;
        case 33: ork_sw(1); break;
        case 34: ork_sw(1); break;

        case 47: ork_ax(1); break;
        case 49: ork_sw(1); break;
        case 52: ork_sw(1); break;
    }

    console.log(reltime);
}
function level2()
{
    let reltime= app.totalstagetime - app.stagetime;

    switch(reltime)
    {
        case 2: ork_sw(1);trol_sh(1); break;
        case 4: ork_sw(2); break;
        case 5: ork_ax(1); break;
        case 6: ork_sw(3);ork_ax(2); break;
        case 7: trol_sh(1); break;

        case 25: ork_sw(2); break;
        case 30: ork_ax(1); break;
        case 31: ork_sw(1); break;
        case 32: ork_sw(1); break;
        case 33: ork_sw(1); break;
        case 34: ork_sw(1); break;

        case 47: ork_ax(1); break;
        case 49: ork_sw(1); break;
        case 51: ork_ax(2); break;
        case 52: ork_sw(1); break;
        case 53: trol_sh(2); break;
        case 60: trol_sh(2); break;

        case 80: ork_ax(2);ork_sw(3); break;
        case 81: trol_sh(1); break;
        case 82: trol_sh(1); ork_sw(1); break;
        case 83: ork_sw(2); break;
        case 85: trol_sh(1); break;
        case 86: ork_ax(1); break;
        case 88: ork_sw(1); trol_sh(1); break;

        case 115: trol_mc(1); ork_sw(2); ork_ax(1); break;
        case 117: ork_sw(2); trol_sh(1); break;
        case 119: ork_sw(1); ork_ax(1); break;
    }

    console.log(reltime);
}

function level3()
{
    let reltime= app.totalstagetime - app.stagetime;

    switch(reltime)
    {
        case 2: ork_sw(1); trol_mc(1);break;
        case 4: ork_sw(2); ork_ax(1); break;
        case 5: ork_ax(1); trol_sh(1);break;
        case 6: ork_sw(3); ork_ax(2); break;
        case 7: trol_sh(1); ork_sw(2);break;
        case 9: trol_sh(2); ork_ax(2);break;

        case 15: trol_mc(1); ork_sw(1); ork_ax(1); break;
        case 16: ork_sw(2); trol_sh(1); break;
        case 17: trol_sh(1); ork_ax(1); break;
        case 18: ork_ax(2); break;

        case 25: ork_sw(2); trol_sh(1); break;
        case 30: ork_ax(2); trol_sh(1); break;
        case 31: ork_sw(3); trol_sh(1); break;
        case 32: ork_sw(3); trol_sh(1); break;
        case 33: ork_sw(3); trol_sh(1); break;
        case 34: ork_sw(4); trol_sh(1); break;

        case 41: trol_mc(1); break;

        case 47: ork_ax(1); break;
        case 49: ork_sw(1); trol_sh(1); break;
        case 51: ork_ax(2); trol_sh(1); break;
        case 52: ork_sw(1); trol_sh(1); break;
        case 53: trol_sh(2); break;
        case 60: trol_sh(2); ork_sw(2); break;

        case 80: ork_ax(2); ork_sw(3); break;
        case 81: trol_sh(3); ork_ax(1); break;
        case 82: trol_sh(1); ork_sw(1); break;
        case 83: ork_sw(2); ork_ax(2); break;
        case 85: trol_sh(1); ork_sw(2); break;
        case 86: ork_ax(1); trol_sh(2); break;
        case 88: ork_sw(1); trol_sh(1); break;

        case 115: trol_mc(1); ork_sw(2); ork_ax(1); break;
        case 117: ork_sw(2); trol_sh(1); break;
        case 119: trol_mc(1); ork_sw(1); ork_ax(1); break;

        case 136: ork_sw(7); break;
        case 137: ork_sw(7); break;
        case 138: ork_sw(7); break;
        case 143: ork_ax(5); break;
        case 144: ork_ax(5); break;
        case 145: ork_ax(5); break;
        case 155: trol_sh(7); break;
        case 156: trol_sh(7); break;
        case 157: trol_sh(7); break;

        case 160: trol_mc(1); ork_sw(5); ork_ax(5); break;

        case 178: ork_sw(1); break;
    }

    console.log(reltime);
}