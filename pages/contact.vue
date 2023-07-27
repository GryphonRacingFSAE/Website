<template>
    <div class="contactWrap">
        <img class="backgroundImage_Contact" src=""/>
        <div class="shopInformation">
            <div>
                <h1>Gryphon Racing</h1>
                <p>
                    University of Guelph<br>
                    Vechile Services Building<br>
                    50 Stone Rd E, Guelph, ON N1G 2W1
                </p>
                <br>
                <p>Join our team as members, <br> sponsers or advisors</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21842.523643301887!2d-80.23692987083086!3d43.530101771774326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9b28ceea7401%3A0xa48ca79ad3a559a6!2sGRYPHON%20RACING!5e0!3m2!1sen!2sca!4v1690415587608!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        </div>
        <div class="emailUs_button">
            <button class="emailUs_button">
                <a href = "mailto:ugracing@uoguelph.ca@example.com" class="contact_email">Email Us</a>
            </button>
        </div>
    </div>
</template>

<style>
.backgroundImage_Contact{
    width: 100%;
    height: 60vh;
    position: relative;
}

.shopInformation{
    position: relative;
    text-align: left;
    padding-left: 20vw;
    line-height: 250%;
    display: flex;
    padding-top: 15vh; 
    padding-bottom: 15vh; 
    widows: 100%;
    background-color: var(--gryphon-white  );
    color: var(--gryphon-red);
}
.shopInformation div{
    padding-right: 5vw;
}
.shopInformation p{
    font-size: 2em;
}
.shopInformation h1{
    font-size: 4em;
}
.emailUs_button{
    height:20vh;
    width: 100vw;
    position: relative;
    text-align: center;
    background-color: var(--gryphon-white  );
}

.emailUs_button a{
    color: var(--gryphon-white);
    text-decoration: none;
    font-size: 2em;
}

.emailUs_button button {
  --c:  var(--gryphon-yellow); /* the color*/
  height:10vh;
  width: 20vw;
  box-shadow: 0 0 0 .1em inset var(--c); 
  --_g: linear-gradient(var(--c) 0 0) no-repeat;
  background: 
    var(--_g) calc(var(--_p,0%) - 100%) 0%,
    var(--_g) calc(200% - var(--_p,0%)) 0%,
    var(--_g) calc(var(--_p,0%) - 100%) 100%,
    var(--_g) calc(200% - var(--_p,0%)) 100%;
  background-size: 50.5% calc(var(--_p,0%)/2 + .5%);
  outline-offset: .1em;
  transition: background-size .4s, background-position 0s .4s;
  background-color: var(--gryphon-red);
}
.emailUs_button button:hover {
  --_p: 100%;
  transition: background-position .4s, background-size 0s;
}
.emailUs_button button:active {
  box-shadow: 0 0 9e9q inset #0009; 
  background-color: var(--c);
  color: var(--gryphon-red);
}

</style>
