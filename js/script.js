var divButton = document.getElementById('divButton');
    var corpo = document.body;
    var darkMode = false;
    const togglecontent = document.querySelectorAll('.content');
    const toggleHeadercontent = document.querySelectorAll('.header');

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
            divButton.innerText = 'Light Mode';
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
            divButton.innerText = 'Dark Mode';
        }
    }