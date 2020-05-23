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

var list_of_bars = document.querySelectorAll('.skill-progress>div');
function set_width_to_zero()
{
    for (let bar of list_of_bars) {
        bar.style.width = "0";
    }
}
function in_view(bar)
{
    let element_distance = bar.getBoundingClientRect().top;
    if (element_distance < window.innerHeight) {
        return true;
    }
    return false;
}
function fill_bar(bar, percentage)
{
    let count = 0;
    let id = setInterval(function ()
    {
        bar.style.width = count.toString() + "%";
        if (count++ == percentage) {
            clearInterval(id);
        }
    }, 10)
}
function is_filled(bar)
{
    if (parseInt(bar.style.width) != 0) {
        return true;
    }
    return false;
}
function checker_in_view()
{
    for (let bar of list_of_bars) {
        if (in_view(bar) && !is_filled(bar)) {
            fill_bar(bar, bar.getAttribute("data-skill-percent"));
        }
    }
}
function again_on_top()
{
    let skills = document.getElementById('skills')
    let skills_distance = skills.getBoundingClientRect().top;
    if (skills_distance > window.innerHeight) {
        set_width_to_zero();
    }
}
function listener()
{
    checker_in_view();
    again_on_top()
}

set_width_to_zero();
window.addEventListener('scroll', listener);
/* instead of using setinterval i could also have used addeventlistener('scroll', checkscroll)
 and if the skills section is once visible i can keep a boolean variable to removeeventlistener once the animation is performed
or say, If the skills section is visible once on the screen. */
/* let id_global = setInterval(function ()
{
    let height_of_skills_section = document.getElementById('skills').getBoundingClientRect().y;
    if (height_of_skills_section < window.innerHeight) {
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
}, 10)*/

