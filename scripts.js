window.addEventListener('load', function(){

// let offsetX;
// let offsetY;
// playA.addEventListener('dragstart', function (event) {
//     offsetX = event.offsetX;
//     offsetY = event.offsetY;
// })


//     playA.style.bottom = (event.pageX - event.offsetX)+ 'px';
//     playA.style.right = (event.pageY - event.offsetY) + 'px';
// });

// document.body.addEventListener('dragover', function(event) {
//     event.preventDefault();
// });
// document.body.addEventListener('drop', function (event) {
//     this.appendChild(playA);
// });

    let playA = document.createElement('div');
        playA.classList.add('play');
        playA.setAttribute('id', 'player');
        playA.setAttribute('draggable', 'true');
        document.body.appendChild(playA);
        playA.innerHTML = 'A';

    playA.addEventListener('dragend', function (event) {
    playA.style.top = event.pageX+ 'px';
    playA.style.left = event.pageY + 'px';
    });

    let playB = document.createElement('div');
        playB.classList.add('play');
        playB.setAttribute('id', 'player');
        playB.setAttribute('draggable', 'true');
        document.body.appendChild(playB);
        playB.innerHTML = 'B';
    playB.addEventListener('dragend', function (event) {
    playB.style.top = event.pageX + 'px';
    playB.style.left = event.pageY + 'px';
    });   
    
    let playC = document.createElement('div');
        playC.classList.add('play');
        playC.setAttribute('draggable', 'true');
        playC.setAttribute('id', 'player');
        document.body.appendChild(playC);
        playC.innerHTML = 'C';
    playC.addEventListener('dragend', function (event) {
    playC.style.top = event.pageX + 'px';
    playC.style.left = event.pageY + 'px';
    });




    let container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container); 
        

        let leftconer = document.createElement('div');
            leftconer.classList.add('leftconer');
            document.querySelector('.container').appendChild(leftconer);

        let rightconer = document.createElement('div');
            rightconer.classList.add('rightconer');
            document.querySelector('.container').appendChild(rightconer);

        let downconer = document.createElement('div');
            downconer.classList.add('downconer');
            document.querySelector('.container').appendChild(downconer);

        let categoryes = document.createElement('div');
            categoryes.classList.add('categoryes');
            document.querySelector('.container').appendChild(categoryes);

                let button1 = document.createElement('div');
                    button1.classList.add('button');
                    document.querySelector('.categoryes').appendChild(button1);
                    img1 = document.createElement("img");
                    img1.classList.add('img');
                    img1.src = "/img/start.jpg";
                    button1.appendChild(img1);

                let button2 = document.createElement('div');
                    button2.classList.add('button');
                    document.querySelector('.categoryes').appendChild(button2);
                    img2 = document.createElement("img");
                    img2.classList.add('img');
                    img2.src = "/img/money.jpg";
                    button2.appendChild(img2);  

                let button3 = document.createElement('div');
                    button3.classList.add('button');
                    document.querySelector('.categoryes').appendChild(button3);
                    img3 = document.createElement("img");
                    img3.classList.add('img');
                    img3.src = "/img/bonk.jpg";
                    button3.appendChild(img3);
                    

                let button4 = document.createElement('div');
                    button4.classList.add('button');
                    document.querySelector('.categoryes').appendChild(button4);
                    img4 = document.createElement("img");
                    img4.classList.add('img');
                    img4.src = "/img/priz.jpg";
                    button4.appendChild(img4);
                

                let button5 = document.createElement('div');
                    button5.classList.add('button');
                    document.querySelector('.categoryes').appendChild(button5);
                    img5 = document.createElement("img");
                    img5.classList.add('img');
                    img5.src = "/img/idea.jpg";
                    button5.appendChild(img5);
                    

                let button6 = document.createElement('div');
                    button6.classList.add('button');
                    document.querySelector('.categoryes').appendChild(button6);
                    img6 = document.createElement("img");
                    img6.classList.add('img');
                    img6.src = "/img/pay.jpg";
                    button6.appendChild(img6);
                
                let button7 = document.createElement('div');
                    button7.classList.add('button');
                    document.querySelector('.categoryes').appendChild(button7);
                    img7 = document.createElement("img");
                    img7.classList.add('img');
                    img7.src = "/img/money.jpg";
                    button7.appendChild(img7);
                
                let button8 = document.createElement('div');
                    button8.classList.add('button');
                    document.querySelector('.categoryes').appendChild(button8);
                    img8 = document.createElement("img");
                    img8.classList.add('img');
                    img8.src = "/img/down.jpg";
                    button8.appendChild(img8);

                let button9 = document.createElement('div');
                    button9.classList.add('button');
                    document.querySelector('.categoryes').appendChild(button9);
                    img9 = document.createElement("img");
                    img9.classList.add('img');
                    img9.src = "/img/lacky.jpg";
                    button9.appendChild(img9);

                let button10 = document.createElement('div');
                    button10.classList.add('button');
                    document.querySelector('.leftconer').appendChild(button10);
                    img10 = document.createElement("img");
                    img10.classList.add('img');
                    img10.src = "/img/lacky.jpg";
                    button10.appendChild(img10);

                let button11 = document.createElement('div');
                    button11.classList.add('button');
                    document.querySelector('.leftconer').appendChild(button11);
                    img11 = document.createElement("img");
                    img11.classList.add('img');
                    img11.src = "/img/money.jpg";
                    button11.appendChild(img11);  

                let button12 = document.createElement('div');
                    button12.classList.add('button');
                    document.querySelector('.leftconer').appendChild(button12);
                    img12 = document.createElement("img");
                    img12.classList.add('img');
                    img12.src = "/img/idea.jpg";
                    button12.appendChild(img12);
                    

                let button13 = document.createElement('div');
                    button13.classList.add('button');
                    document.querySelector('.leftconer').appendChild(button13);
                    img13 = document.createElement("img");
                    img13.classList.add('img');
                    img13.src = "/img/pay.jpg";
                    button13.appendChild(img13);
                

                let button14 = document.createElement('div');
                    button14.classList.add('button');
                    document.querySelector('.leftconer').appendChild(button14);
                    img14 = document.createElement("img");
                    img14.classList.add('img');
                    img14.src = "/img/money.jpg";
                    button14.appendChild(img14);
                    
                let button15 = document.createElement('div');
                    button15.classList.add('button');
                    document.querySelector('.leftconer').appendChild(button15);
                    img15 = document.createElement("img");
                    img15.classList.add('img');
                    img15.src = "/img/bonk.jpg";
                    button15.appendChild(img15);
                
                let button16 = document.createElement('div');
                    button16.classList.add('button');
                    document.querySelector('.leftconer').appendChild(button16);
                    img16 = document.createElement("img");
                    img16.classList.add('img');
                    img16.src = "/img/lacky.jpg";
                    button16.appendChild(img16);
                
                let button17 = document.createElement('div');
                    button17.classList.add('button');
                    document.querySelector('.rightconer').appendChild(button17);
                    img17 = document.createElement("img");
                    img17.classList.add('img');
                    img17.src = "/img/idea.jpg";
                    button17.appendChild(img17);

                let button18 = document.createElement('div');
                    button18.classList.add('button');
                    document.querySelector('.rightconer').appendChild(button18);
                    img18 = document.createElement("img");
                    img18.classList.add('img');
                    img18.src = "/img/money.jpg";
                    button18.appendChild(img18);
                
                let button19 = document.createElement('div');
                    button19.classList.add('button');
                    document.querySelector('.rightconer').appendChild(button19);
                    img19 = document.createElement("img");
                    img19.classList.add('img');
                    img19.src = "/img/bonk.jpg";
                    button19.appendChild(img19);

                let button20 = document.createElement('div');
                    button20.classList.add('button');
                    document.querySelector('.rightconer').appendChild(button20);
                    img20 = document.createElement("img");
                    img20.classList.add('img');
                    img20.src = "/img/down.jpg";
                    button20.appendChild(img20);
                
                let button21 = document.createElement('div');
                    button21.classList.add('button');
                    document.querySelector('.rightconer').appendChild(button21);
                    img21 = document.createElement("img");
                    img21.classList.add('img');
                    img21.src = "/img/idea.jpg";
                    button21.appendChild(img21);

                let button22 = document.createElement('div');
                    button22.classList.add('button');
                    document.querySelector('.rightconer').appendChild(button22);
                    img22 = document.createElement("img");
                    img22.classList.add('img');
                    img22.src = "/img/pay.jpg";
                    button22.appendChild(img22);
                
                let button23 = document.createElement('div');
                    button23.classList.add('button');
                    document.querySelector('.rightconer').appendChild(button23);
                    img23 = document.createElement("img");
                    img23.classList.add('img');
                    img23.src = "/img/money.jpg";
                    button23.appendChild(img23);
                    
                let button24 = document.createElement('div');
                    button24.classList.add('button');
                    document.querySelector('.downconer').appendChild(button24);
                    img24 = document.createElement("img");
                    img24.classList.add('img');
                    img24.src = "/img/idea.jpg";
                    button24.appendChild(img24);
                
                let button25 = document.createElement('div');
                    button25.classList.add('button');
                    document.querySelector('.downconer').appendChild(button25);
                    img25 = document.createElement("img");
                    img25.classList.add('img');
                    img25.src = "/img/bonk.jpg";
                    button25.appendChild(img25);

                let button26 = document.createElement('div');
                    button26.classList.add('button');
                    document.querySelector('.downconer').appendChild(button26);
                    img26 = document.createElement("img");
                    img26.classList.add('img');
                    img26.src = "/img/money.jpg";
                    button26.appendChild(img26);

                let button27 = document.createElement('div');
                    button27.classList.add('button');
                    document.querySelector('.downconer').appendChild(button27);
                    img27 = document.createElement("img");
                    img27.classList.add('img');
                    img27.src = "/img/down.jpg";
                    button27.appendChild(img27);

                let button28 = document.createElement('div');
                    button28.classList.add('button');
                    document.querySelector('.downconer').appendChild(button28);
                    img28 = document.createElement("img");
                    img28.classList.add('img');
                    img28.src = "/img/idea.jpg";
                    button28.appendChild(img28);
            
                let button29 = document.createElement('div');
                    button29.classList.add('button');
                    document.querySelector('.downconer').appendChild(button29);
                    img29 = document.createElement("img");
                    img29.classList.add('img');
                    img29.src = "/img/lacky.jpg";
                    button29.appendChild(img29);

                let button30 = document.createElement('div');
                    button30.classList.add('button');
                    document.querySelector('.downconer').appendChild(button30);
                    img30 = document.createElement("img");
                    img30.classList.add('img');
                    img30.src = "/img/priz.jpg";
                    button30.appendChild(img30);

                    let random = document.createElement('div');
                        random.classList.add('random');
                        document.querySelector('.container').appendChild(random);
                    let buttrandom = document.createElement('button');
                        buttrandom.classList.add('buttonR');
                        document.querySelector('.random').appendChild(buttrandom);
                        buttrandom.innerHTML = "тык";
                           
                        buttrandom.addEventListener('click', function() {
                            let box = document.createElement('box');
                            box.classList.add('box');
                            document.querySelector('.random').appendChild(box);
                                                        
                                function getRandomInRange(min, max) {
                                return Math.floor(Math.random() * (max - min + 1)) + min;
                            }   
                            
                            let result = getRandomInRange(1, 6);
                            box.innerHTML = result; 

                            setTimeout(() => {
                                box.remove();
                            }, 500);
                                                  
                        });

                });


   