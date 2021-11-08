let orgLang = true;
let lang = 'uz';
function changeLang(){
    orgLang = !orgLang;
    if(orgLang)lang = 'uz'; else lang = 'ru'
    dict.forEach(i => {
        words = document.querySelectorAll('.lang');
        words.forEach(el => {
            if(lang == 'ru' && el.innerHTML == i['uz']){
                el.innerHTML = i['ru']
            }
            if(lang == 'uz' && el.innerHTML == i['ru']){
                el.innerHTML = i['uz']
            }
        });
    });
}