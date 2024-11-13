(function(){
    'use strict';
    console.log('reading js');

    changePage();
    function changePage(){
        const bgHome = document.getElementById('bgHome');
        const aboutPage = document.getElementById('aboutPage');
        const projectPage = document.getElementById('projectPage');
        const homeBttn = document.getElementById('homeBttn');
        const abtBttn = document.getElementById('abtBttn');
        const projBttn = document.getElementById('projBttn');

        abtBttn.addEventListener('click', function(){
            
            bgHome.className = 'hidden';
            projectPage.className = 'hidden';
            aboutPage.className = 'showing';
        });

        homeBttn.addEventListener('click', function(){
            bgHome.className = 'showing';
            projectPage.className = 'hidden';
            aboutPage.className = 'hidden';
        });

        projBttn.addEventListener('click', function(){
            bgHome.className = 'hidden';
            projectPage.className = 'showing';
            aboutPage.className = 'hidden';
        });
    }
})();