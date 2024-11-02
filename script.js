(function(){
    'use strict';
    console.log('reading js');

    changeBackground();
    projectPage();

    function projectPage(){
        const webHover = document.getElementById('webHover');
        const gameHover = document.getElementById('gameHover');
        const webPage = document.getElementById('webPage');
        const gamePage = document.getElementById('gamePage');

        webPage.addEventListener('mouseenter', function(){
            webHover.className = 'showing';
            gameHover.className = 'hidden';
        });
        gamePage.addEventListener('mouseenter', function(){
            gameHover.className = 'showing';
            webHover.className = 'hidden';
        });
        webPage.addEventListener('mouseleave', function(){
            gameHover.className = 'hidden';
            webHover.className = 'hidden';
        });
        gamePage.addEventListener('mouseleave', function(){
            gameHover.className = 'hidden';
            webHover.className = 'hidden';
        });
    }

    function changeBackground(){
        const homeBttn = document.getElementById('homeBttn');
        const projBttn = document.getElementById('projBttn');
        const abtBttn = document.getElementById('abtBttn');
        const bottomNav = document.getElementById('bottom-nav');
        const bgHome = document.getElementById('bgHome');
        const bgAbout = document.getElementById('bgAbout');
        const bgProject = document.getElementById('bgProject');
        abtBttn.addEventListener('click', function(event){
            event.preventDefault();
            bgHome.className = 'hidden';
            bgAbout.className = 'showing';
            bottomNav.className = 'hidden';
        });

        projBttn.addEventListener('click', function(){
            bgHome.className = 'hidden';
            bgAbout.className = 'hidden';
            bottomNav.className = 'hidden';
            bgProject.className = 'showing';
        });

        homeBttn.addEventListener('click', function(event){
            event.preventDefault();
            bgHome.className = 'showing';
            bgAbout.className = 'hidden';
            bgProj.className = 'hidden';
            bottomNav.className = 'showing';
        });
    }

})();