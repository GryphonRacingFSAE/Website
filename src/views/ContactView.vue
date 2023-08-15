<template>
    <div class="shop_info">
        <div class="info">
            <h1>Gryphon Racing</h1>
            <p>
                University of Guelph<br />
                Physical Resources Building<br />
                50 Stone Rd E, Guelph, ON N1G 2W1
            </p>
            <p>
                Join our team as members, <br />
                sponsors or advisors
            </p>
        </div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21842.523643301887!2d-80.23692987083086!3d43.530101771774326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b9b28ceea7401%3A0xa48ca79ad3a559a6!2sGRYPHON%20RACING!5e0!3m2!1sen!2sca!4v1690415587608!5m2!1sen!2sca"
            class="map"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
</template>

<style scoped>
.shop_info {
    position: relative;
    justify-content: center;
    line-height: 250%;
    display: flex;
    padding-top: 15vh;
    padding-bottom: 10vh;
    padding-left: 15%;
    padding-right: 15%;
    background-color: var(--gryphon-white);
    color: var(--gryphon-red);
}

.info {
    width: 50%;
}

.map {
    border: 0;
    border-radius: 2em;
    margin-left: 6em;
    width: 50%;
}

.shop_info p {
    font-size: 2em;
}

.shop_info h1 {
    font-size: 4em;
    line-height: 1em;
}

@media screen and (max-width: 1000px) {
    .shop_info {
        flex-direction: column;
        align-items: center;
    }

    .map {
        margin-left: 0;
        width: 80vw;
        height: 80vw;
    }

    .info {
        text-align: center;
        width: 80vw;
    }
}
</style>
