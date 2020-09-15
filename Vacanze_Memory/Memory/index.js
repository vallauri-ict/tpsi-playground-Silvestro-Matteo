"use strict"
let n=36;
let rc=6;
let mat= new Array(rc);
let _riga1=0;
let _riga2=0;
let _riga3=0;
let _riga4=0;
let _riga5=0;
let _riga6=0;
let prim=-1;
let second=-1;
let r=-1;
let s=-1;

window.onload=function () {
    let x=0;
    let y=0;
    let c=1;
    _riga1=document.getElementsByName("riga1");
    _riga2=document.getElementsByName("riga2");
    _riga3=document.getElementsByName("riga3");
    _riga4=document.getElementsByName("riga4");
    _riga5=document.getElementsByName("riga5");
    _riga6=document.getElementsByName("riga6");
    for (let i=0;i<rc;i++){
        mat[i]=new Array(rc);
    }
    for (let i=0;i<rc;i++){
        for (let j=0;j<rc;j++){
            mat[i][j]=0;
        }
    }
    for (let i=0;i<rc*rc;i++){
        do {
            x=generaNumero(0,rc-1);
            y=generaNumero(0,rc-1);
        }while (mat[x][y]!=0)
        mat[x][y]=c;
        if ((i+1)%2==0 && i-1!=(rc*rc)){
            c++;
        }
    }
    for (let i=0;i<rc;i++){
        _riga1[i].value=mat[0][i];
    }
    for (let i=0;i<rc;i++){
        _riga2[i].value=mat[1][i];
    }
    for (let i=0;i<rc;i++){
        _riga3[i].value=mat[2][i];
    }
    for (let i=0;i<rc;i++){
        _riga4[i].value=mat[3][i];
    }
    for (let i=0;i<rc;i++){
        _riga5[i].value=mat[4][i];
    }
    for (let i=0;i<rc;i++){
        _riga6[i].value=mat[5][i];
    }

}


function generaNumero(a,b) {

    let x = Math.floor((b-a+1)*Math.random())+ a; //GENERA RND UN NUMERO CASULE
    return x;                                           //(a-1) per escludere l'estremo maggiore
}

function controlla(a) {

    a-=1;
    let f=6;

    if (a>=0 && a<=5){
        _riga1[a].style.backgroundColor="red";
        if (r==-1){
            r=0;
        }
        else {
            s=0;
        }
    }else {
        if (a>=6 && a<=11){
            a=a-f;
            _riga2[a].style.backgroundColor="red";
            if (r==-1){
                r=1;
            }
            else {
                s=1;
            }
        }
        else
        {
            if (a>=12 && a<=17){
                a=a-f*2;
                _riga3[a].style.backgroundColor="red";
                if (r==-1){
                    r=2;
                }
                else {
                    s=2;
                }
            }
            else
            {
                if (a>=18 && a<=23){
                    a=a-f*3;
                    _riga4[a].style.backgroundColor="red";
                    if (r==-1){
                        r=3;
                    }
                    else {
                        s=3;
                    }
                }
                else{
                    if (a>=24 && a<=29){
                        a=a-f*4;
                        _riga5[a].style.backgroundColor="red";
                        if (r==-1){
                            r=4;
                        }
                        else {
                            s=4;
                        }
                    }
                    else{
                        a=a-f*5;
                        _riga6[a].style.backgroundColor="red";
                        if (r==-1){
                            r=5;
                        }
                        else {
                            s=5;
                        }
                    }
                }
            }
        }
    }
    if (prim==-1){
        prim=a;
    }else {
        second=a;
    }

    if (second!=-1) {
        if (prim != second || r != s) {
            if (mat[r][prim] == mat[s][second]) {
                switch (r) {
                    case 0:
                        _riga1[prim].style.backgroundColor = "blue";
                        _riga1[prim].disabled = true;
                        break;
                    case 1:
                        _riga2[prim].style.backgroundColor = "blue";
                        _riga2[prim].disabled = true;
                        break;
                    case 2:
                        _riga3[prim].style.backgroundColor = "blue";
                        _riga3[prim].disabled = true;
                        break;
                    case 3:
                        _riga4[prim].style.backgroundColor = "blue";
                        _riga4[prim].disabled = true;
                        break;
                    case 4:
                        _riga5[prim].style.backgroundColor = "blue";
                        _riga5[prim].disabled = true;
                        break;
                    case 5:
                        _riga6[prim].style.backgroundColor = "blue";
                        _riga6[prim].disabled = true;
                        break;
                    default:
                        break;
                }
                switch (s) {
                    case 0:
                        _riga1[second].style.backgroundColor = "blue";
                        _riga1[second].disabled = true;
                        break;
                    case 1:
                        _riga2[second].style.backgroundColor = "blue";
                        _riga2[second].disabled = true;
                        break;
                    case 2:
                        _riga3[second].style.backgroundColor = "blue";
                        _riga3[second].disabled = true;
                        break;
                    case 3:
                        _riga4[second].style.backgroundColor = "blue";
                        _riga4[second].disabled = true;
                        break;
                    case 4:
                        _riga5[second].style.backgroundColor = "blue";
                        _riga5[second].disabled = true;
                        break;
                    case 5:
                        _riga6[second].style.backgroundColor = "blue";
                        _riga6[second].disabled = true;
                        break;
                    default:
                        break;
                }
            }


        else {

                    switch (r) {
                        case 0:
                            _riga1[prim].style.backgroundColor = "grey";
                            break;
                        case 1:
                            _riga2[prim].style.backgroundColor = "grey";
                            break;
                        case 2:
                            _riga3[prim].style.backgroundColor = "grey";
                            break;
                        case 3:
                            _riga4[prim].style.backgroundColor = "grey";
                            break;
                        case 4:
                            _riga5[prim].style.backgroundColor = "grey";
                            break;
                        case 5:
                            _riga6[prim].style.backgroundColor = "grey";
                            break;
                        default:
                            break;
                    }
                    switch (s) {
                        case 0:
                            _riga1[second].style.backgroundColor = "grey";
                            break;
                        case 1:
                            _riga2[second].style.backgroundColor = "grey";
                            break;
                        case 2:
                            _riga3[second].style.backgroundColor = "grey";
                            break;
                        case 3:
                            _riga4[second].style.backgroundColor = "grey";
                            break;
                        case 4:
                            _riga5[second].style.backgroundColor = "grey";
                            break;
                        case 5:
                            _riga6[second].style.backgroundColor = "grey";
                            break;
                        default:
                            break;
                    }




            }
            prim = -1;
            second = -1;
            r = -1;
            s = -1;
        }
        else {
            second=-1;
            s=-1;
        }
    }

}
