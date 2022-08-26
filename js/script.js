    var divButton = document.getElementById('divButton');
    var langButton = document.getElementById('langButton');
    var corpo = document.body;
    var darkMode = false;
    var isEn = true;
    
    const togglecontent = document.querySelectorAll('.content');
    const toggleHeadercontent = document.querySelectorAll('.header');

    const toggleLangEn = document.querySelectorAll('.english');
    const toggleLangPt = document.querySelectorAll('.portuguese');

    divButton.innerText = "Dark Mode";

    langButton.onclick = function()
    {
        if(isEn === true)
        {
            toggleLangPt.forEach(content => {
                content.style.display = "initial";
            });
    
            toggleLangEn.forEach(content => {
                content.style.display = "none";
            });
            isEn = false;
            if(darkMode === false)
            {
                divButton.innerText = "Modo Escuro";
            }
            if(darkMode === true)
            {
                divButton.innerText = "Modo Claro";
            }
        }
        else if(isEn === false)
        {
            toggleLangPt.forEach(content => {
                content.style.display = "none";
            });
    
            toggleLangEn.forEach(content => {
                content.style.display = "initial";
            });
            isEn = true;
            if(darkMode === false)
            {
                divButton.innerText = "Dark Mode";
            }
            if(darkMode === true)
            {
                divButton.innerText = "Light Mode";
            }
        }
    }

    divButton.onclick = function()
    {
        if(darkMode == false)
        {
            corpo.style.backgroundColor = 'black';

            togglecontent.forEach(content => {
                content.style.color = 'white';
            });

            toggleHeadercontent.forEach(content => {
                content.style.backgroundColor = 'white';
                content.style.color = 'black';
            });

            darkMode = true;
            if(isEn === true)
            {
                divButton.innerText = "Light Mode";
            }
            if(isEn === false)
            {
                divButton.innerText = "Modo Claro";
            }
        }

        else if(darkMode == true)
        {
            corpo.style.backgroundColor = 'transparent';
            
            togglecontent.forEach(content => {
                content.style.color = 'black';
            });

            toggleHeadercontent.forEach(content => {
                content.style.backgroundColor = 'black';
                content.style.color = 'white';
            });

            darkMode = false;
            if(isEn === true)
            {
                divButton.innerText = "Dark Mode";
            }
            if(isEn === false)
            {
                divButton.innerText = "Modo Escuro";
            }
        }
    }