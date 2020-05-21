"use strict";
/* code for smooth scroll */
function add_listener_to_the_element(itr, amount_of_scroll)
{
    itr.addEventListener('click', function (event)
    {
        event.preventDefault();/* to prevent the default behaviour, i.e. sudden scrolling by default */
        let position_of_element_from_top = document.getElementById(itr.innerText.toLowerCase()).getBoundingClientRect().y;
        var id = setInterval(function ()
        {
            window.scrollBy(0, amount_of_scroll);/* here the second entry is the amount by which i want to scroll */
            if (window.pageYOffset >= position_of_element_from_top) {
                clearInterval(id);
                return;
            }
        }, 1)/* this is the time after which it will scroll */
    })
}
var list = document.getElementsByClassName("horizontal-list")[0].getElementsByTagName('li');
for (let itr of list) {
    if (itr.innerText == "Home") {
        continue;
    }
    else if (itr.innerText == "About") {
        add_listener_to_the_element(itr, 10);
    }
    else if (itr.innerText == "Skills") {
        add_listener_to_the_element(itr, 20);
    }
    else if (itr.innerText == "Experience") {
        add_listener_to_the_element(itr, 20);
    }
    else if (itr.innerText == "Education") {
        add_listener_to_the_element(itr, 20);
    }
    else if (itr.innerText == "Portfolio") {
        add_listener_to_the_element(itr, 25);
    }
    else if (itr.innerText == "Contact") {
        add_listener_to_the_element(itr, 40);
    }
}




var skills_y_coordinate = document.getElementById('about').getBoundingClientRect().y;
let id_global=setInterval(function ()
{
    if (window.pageYOffset >= skills_y_coordinate) {
        clearInterval(id_global);
        let list_of_bars = document.querySelectorAll('.skill-progress>div');
        for (let bar of list_of_bars) {
            let count = 0;
            let id = setInterval(function ()
            {
                bar.style.width = (count++).toString() + "%";
                if (count > parseInt(bar.dataset.skillPercent)) {
                    clearInterval(id);
                    return;
                }
            }, 15)
        }
    }
}, 10)