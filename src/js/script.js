const enRougeSuiteAClick = document.querySelector('#en-rouge-suite-a-click');
enRougeSuiteAClick.addEventListener('click', (evt)=>{
    enRougeSuiteAClick.style.color="red";
})

const aMettreEnRouge = document.querySelector('#a-mettre-en-rouge');
aMettreEnRouge.style.color="red";

const CollH2 = document.querySelectorAll('h2');
CollH2.forEach((h2)=>{
    h2.addEventListener('click', (evt)=>{
        h2.style.color="red";
    });
});