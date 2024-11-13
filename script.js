(function(){
    'use strict';
    console.log('reading js');

    changeBackground();
    projectPageStart();

    function projectPageStart(){
        const webHover = document.getElementById('webHover');
        const gameHover = document.getElementById('gameHover');
        const webPage = document.getElementById('webPage');
        const gamePage = document.getElementById('gamePage');
        const webProjects = document.getElementById('webProjects');
        const gameProjects = document.getElementById('gameProjects');
        const projectStart = document.getElementById('projectStart');

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

        webPage.addEventListener('click', function (){
            webProjects.className = 'showing';
            projectStart.className = 'hidden';
        });

        gamePage.addEventListener('click', function(){
            gameProjects.className = 'showing';
            projectStart.className = 'hidden';
        });
    }

    function changeBackground(){
        const homeBttn = document.getElementById('homeBttn');
        const projBttn = document.getElementById('projBttn');
        const abtBttn = document.getElementById('abtBttn');
        const bottomNav = document.getElementById('bottom-nav');
        const bgHome = document.getElementById('bgHome');
        const bgAbout = document.getElementById('bgAbout');
        const projectPage = document.getElementById('projectPage');
        const webProjects = document.getElementById('webProjects');
        const gameProjects = document.getElementById('gameProjects');
        const projectStart = document.getElementById('projectStart');
        
        abtBttn.addEventListener('click', function(event){
            event.preventDefault();
            bgHome.className = 'hidden';
            bgAbout.className = 'showing';
            bottomNav.className = 'hidden';
            projectPage.className = 'hidden';
        });

        projBttn.addEventListener('click', function(){
            bgHome.className = 'hidden';
            bgAbout.className = 'hidden';
            bottomNav.className = 'hidden';
            projectPage.className = 'showing';
            webProjects.className = 'hidden';
            gameProjects.className = 'hidden';
            projectStart.className = 'showing';
        });

        homeBttn.addEventListener('click', function(event){
            event.preventDefault();
            bgHome.className = 'showing';
            bgAbout.className = 'hidden';
            bottomNav.className = 'showing';
            projectPage.className = 'hidden';
        });
    }

})();