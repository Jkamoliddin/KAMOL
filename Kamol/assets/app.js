// // Math.floor(Math.random()*3)


// var arr, arr_events = [],
//     win_block, winner, again, winning, game;

// var comp_sym = "o";
// var user_sym = "x";

// onload = function() {
//     game = document.getElementById("game");
//     arr = game.getElementsByClassName("inner");
//     win_block = document.getElementById("win_block");
//     win_text = win_block.getElementsByClassName("winner")[0];
//     again = win_block.getElementsByClassName("again")[0];
//     winning = game.getElementsByClassName("winning")[0];

//     again.onclick = function() {
//         winning.style.display = "none";
//         win_block.style.display = "none";
//         clearTable();
//         randomMove();
//     };

//     for (var i = 0; i < arr.length; i++) {
//         arr[i].onclick = function() {
//             drawSym(this);
//         };

//         /* тут хотел использовать addEven.. и потом убрать его, когда определился победитель */
//     }
//     randomMove();

// };

// function randomMove() {
//     var rnd = getRandomInt(2);
//     console.log(rnd);
//     if (rnd == 1) {
//         autoDrawing();
//     }
//     return true;
// }

// function drawSym(item, sym = user_sym) {
//     // console.log(item);
//     if (item.hasChildNodes()) return false;
//     item.innerHTML = sym;

//     var winner = checkWinner();

//     if (sym == user_sym && !winner)
//         autoDrawing();


//     if (winner == user_sym) {
//         win_text.innerHTML = "Вы выиграли!";
//         win_text.style.color = "green";
//         winning.style.backgroundColor = "rgba(0,200,0, 0.5)";
//     } else if (winner == comp_sym) {
//         win_text.innerHTML = "Выиграл компьютер! Попоробуйте еще раз!";
//         win_text.style.color = "red";
//         winning.style.backgroundColor = "rgba(200,0,0, 0.5)";
//     }
//     if (winner) {
//         winning.style.display = "block";
//         win_block.style.display = "block";
//     }
//     return true;
// }

// function checkWinner() {
//     var winner = "";
//     var j = 0;


//     var xy_1_1 = arr[0].innerHTML;
//     var xy_1_2 = arr[4].innerHTML;
//     var xy_1_3 = arr[8].innerHTML;

//     var xy_2_1 = arr[2].innerHTML;
//     var xy_2_2 = arr[4].innerHTML;
//     var xy_2_3 = arr[6].innerHTML;

//     if ((xy_1_1 && xy_1_2 && xy_1_3) || (xy_2_1 && xy_2_2 && xy_2_3)) {

//         if (xy_1_1 == user_sym && xy_1_2 == user_sym && xy_1_3 == user_sym) {
//             winner = user_sym;
//         } else if (xy_1_1 == comp_sym && xy_1_2 == comp_sym && xy_1_3 == comp_sym) {
//             winner = comp_sym;
//         }


//         if (xy_2_1 == user_sym && xy_2_2 == user_sym && xy_2_3 == user_sym) {
//             winner = user_sym;
//         } else if (xy_2_1 == comp_sym && xy_2_2 == comp_sym && xy_2_3 == comp_sym) {
//             winner = comp_sym;
//         }
//     }




//     if (!winner) {
//         for (var i = 0; i < 3; i++) {

//             // alert(i);

//             var a1 = arr[i].innerHTML;
//             var a2 = arr[i + 3].innerHTML;
//             var a3 = arr[i + 6].innerHTML;

//             var b1 = arr[i].innerHTML;
//             var b2 = arr[i + 1].innerHTML;
//             var b3 = arr[i + 2].innerHTML;


//             // console.log("b1 = '" + (b1) + "' b2 = '" + (b2) + "' b3 = '" + (b3) +"'");

//             if (a1 == user_sym && a2 == user_sym && a3 == user_sym) {
//                 winner = user_sym;
//                 break;
//             } else if (a1 == comp_sym && a2 == comp_sym && a3 == comp_sym) {
//                 winner = comp_sym;
//                 break;
//             }


//             if (i != 0) j = 3 * i;

//             b1 = arr[j].innerHTML;
//             b2 = arr[j + 1].innerHTML;
//             b3 = arr[j + 2].innerHTML;

//             if (b1 == user_sym && b2 == user_sym && b3 == user_sym) {
//                 winner = user_sym;
//                 break;
//             } else if (b1 == comp_sym && b2 == comp_sym && b3 == comp_sym) {
//                 winner = comp_sym;
//                 break;
//             }
//             if (winner)
//                 break;
//         }
//     }

//     return winner;
// }

// function autoDrawing() {

//     if (!ckeckFreeSpace()) {

//         win_text.innerHTML = "Выиграла ничья! ";
//         win_text.style.color = "blue";
//         winning.style.display = "block";
//         winning.style.backgroundColor = "rgba(0,0,200, 0.5)";
//         win_block.style.display = "block";

//         return false;
//     }
//     var el, rnd;

//     do {
//         rnd = getRandomInt(arr.length);
//         el = arr[rnd];
//         // console.log(rnd);
//     } while (!drawSym(el, comp_sym));

//     if (!ckeckFreeSpace()) {
//         autoDrawing();
//     }
// }

// function clearTable() {
//     for (var i = 0; i < arr.length; i++) {
//         arr[i].innerHTML = "";
//     }
// }

// function ckeckFreeSpace() {
//     var res = false;

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i].hasChildNodes()) {
//             res = false;
//         } else {
//             res = true;
//             break;
//         }
//     }

//     return res;
// }

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }







// function addHandler(el, ev, func) {
//     try {
//         el.addEventListener(ev, func, false);
//     } catch (e) {
//         el.attachEvent("on" + ev, func);
//     }
// }


// function removerEvent(el, ev, func) {
//     try {
//         el.removeEventListener(ev, func, false);

//     } catch (x) {
//         el.detachEvent("on" + ev, func);

//     }
// }
// var DrawGame = false;//ничья

// var gTexts=[];
// gTexts['win1']='Победил игрок '; gTexts['win2']=' !';
// gTexts['playing']='Игра продолжается...';
// gTexts['start']='Начало игры! Ваш ход...';

// var gField=[]; // игровое поле 

// function createField(w,h){ // Задаёт размер игрового поля. 
// gField=new Array(w); // создание нового массива. 
// for (i=0;i<w;i++) gField[i]=new Array(h); // теперь переделаем массив в матрицу. 

// var hT="<table cellpadding='0' cellspacing='0' border='2'>"; // заголовок тега таблицы.
// for (j=0;j<h;j++) {
// hT+="<tr>"; // создание новой линии 
// for (i=0;i<w;i++) { // вставка ячеек в линию 
// hT+="<td>";
// hT+="<img id='c"+i+"_"+j+"' src='c_null.png' alt=' ' onclick='onCellClk("+i+","+j+")'>";
// hT+="</td>";
// }
// hT+="</tr>"; // конец линии 
// }
// document.getElementById('game').innerHTML = hT+"</table>"; // вставка таблицы на страницу. 
// document.getElementById('gameinfo').innerText=gTexts['start']; // отобразить сообщение 
// }
// function setCell(x,y,t) { // Поставить крестик или нолик 
// gField[x][y]=t; // Запомнить t в массиве 
// var imgsrc='c_null.png'; // изображение по умолчанию 
// if (t=='X') imgsrc='images/player.jpg'; // картинка для крестика 
// if (t=='O') imgsrc='images/ai.jpg'; // картинка для нолика 
// var oName="c"+x+"_"+y; // составление имени картинки 
// document.getElementById(oName).src = imgsrc; // замена изображения 
// if (t!=null) document.getElementById(oName).alt = t; // если картинки выключены, то игра будет в текстовом режиме :) 
// }

// function isWin(){ // Проверка победы. 
// // проверка зон 3 на 3... 
// for ( stX=0 ; stX<=gField.length-3 ; stX++) for ( stY=0 ; stY<=gField[0].length-3 ; stY++) // Если размер поля больше трёх. 
//  {
// var lC=gField[stX][stY]; // проверка линии 
// if (lC!=null) for ( i=0 ; i<3 ; i++ ) if ( gField[i+stX][i+stY] != lC ) lC=null; // если проверяемая клетка не содержит lC, то сбросить значение lC 
// if (lC!=null) return lC; // если победа обнаружена. 
// lC=gField[2+stX][stY];
// if (lC!=null) for ( i=0 ; i<3 ; i++ ) if ( gField[2-i+stX][i+stY] != lC ) lC=null;
// if (lC!=null) return lC;

// for ( i=0 ; i<3 ; i++ ) { // проверка по вертикали 
// lC=gField[stX+i][stY];
// if (lC!=null) for ( j=0 ; j<3 ; j++ ) if ( gField[i+stX][j+stY] != lC ) lC=null;
// if (lC!=null) return lC;
// }
// for ( j=0 ; j<3 ; j++ ) { // проверка по горизонтали 
// lC=gField[stX][stY+j];
// if (lC!=null) for ( i=0 ; i<3 ; i++ ) if ( gField[i+stX][j+stY] != lC ) lC=null;
// if (lC!=null) return lC;
// }
//  }
// var FieldsIsNotFill = false;
// var ContinueExecuting = true;
// for(stX = 0; stX < gField.length; stX++){
//     for(stY = 0; stY < gField[0].length; stY++){
//         if((gField[stX][stY] == undefined)||(gField[stX][stY] == null)){
//             FieldsIsNotFill = true;
//             ContinueExecuting = false;
//         break;}//if
//         }//for(strY)
//     if(!ContinueExecuting) break;       
//     }//for(stX)
// if(!FieldsIsNotFill) {DrawGame = true; 
//   return "D";} 
// return false; //если никто не победил 
// }


// function CompGame(){ // компьютерная логика 
// var tx=null,ty=null,tp=0; // tp - приоритет выбранной целевой клетки. 
// var stX=0,stY=0;
// for ( stX=0 ; stX<gField.length ; stX++) for ( stY=0 ; stY<gField[0].length ; stY++) // для каждой клетки 
// {
// var lC=gField[stX][stY];
// if ( (lC!='X')&&(lC!='O')) { // только для пустых клеток 
// gField[stX][stY]='X';
// if ( isWin()=='X' ) { // пробуем победить 
// tx=stX;ty=stY;
// tp=3;
// } else if (tp<3) {
// gField[stX][stY]='O';
// if ( isWin()=='O' ) { // или помешать победить игроку. 
// tx=stX;ty=stY;
// tp=2;
// }else if (tp<2){ // или... 
// var mini=-1,maxi=1,minj=-1,maxj=1;
// if (stX>=gField.length-1) maxi=0; if (stY>=gField[0].length-1) maxj=0;
// if (stX<1) mini=0; if (stY<1) minj=0;
// // найти ближайший нолик... 
// for (i=mini;i<=maxi;i++) for (j=minj;j<=maxj;j++) if ( (i!=0) && (j!=0) ) { // если есть рядом своя занятая клетка - поближе к своим 
// if (gField[stX+i][stY+j]=='O') {
// tx=stX;ty=stY;
// tp=1;
// }
// }
// if (tp<1) { // или хотя бы на свободную клетку поставить. 
// tx=stX;ty=stY;
// }
// }
// }
// gField[stX][stY]=lC;
// }
//  }
//  if ( (tx!=null)&&(ty!=null) ) { // если целевая клетка выбранна 
// setCell(tx,ty, 'O'); // поставим нолик в клетку. 
//  }
// }

// function onCellClk(x,y) { // Действия при клике по клетке 
// if (gField[x][y]==null) { // если клетка пустая 
// var win = isWin(); // проверка на победу. 
// if ( !win ) setCell(x,y, 'X');
// win = isWin(); // проверка на победу 
// if ( !win ) {
// CompGame(); // запуск компьютерного игрока 
// win = isWin(); // проверка на победу 
// }
// if (!win) {
// gameinfo.innerText = gTexts['playing'] // отображение сообщения 
// } else if(win == "D"){
// alert("Ничья!!!");
// gameinfo.innerText = "Ничья!!!";}
// else{ 
// var mes=gTexts['win1'] + win + gTexts['win2'];
// alert(mes); // отображение сообщения о победе 
// gameinfo.innerText = mes;
// }
// }
// }