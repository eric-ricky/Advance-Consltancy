
const hero = document.querySelector('.hero');
const showServices = document.querySelector('.show-services');
const t1 = new TimelineMax();

t1.fromTo(
    hero,
    1.2,
    {height: "0"},
    {height: "100vh", ease: Power2.easeInOut}
)
.fromTo(
    showServices,
    1,
    {display: "none"},
    {display: "block", ease: Power2.easeInOut}
)