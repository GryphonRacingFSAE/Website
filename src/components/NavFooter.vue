<template>
    <div class="footerWrapper">
        <div class="mainFooter">
            <!-- insert social media images here with links: -->
            <div class="socialMediaLogos">
                <h2>Follow us</h2>
                <br />
                <ul>
                    <li>
                        <img />
                    </li>
                    <li>
                        <img />
                    </li>
                    <li>
                        <img />
                    </li>
                    <li>
                        <img />
                    </li>
                </ul>
            </div>

            <div class="teamLogo">
                <NuxtLink to="/"><img src="../../public/media/GryphonBanner.svg" /></NuxtLink>
            </div>

            <div class="contactInformation">
                <h2>Contact us at:</h2>
                50 Stone Road East, Guelph, N1G2W1<br />
                (519) 824-4120 ext 52698<br />
                <a href="mailto:ugracing@uoguelph.ca@example.com" class="contact_email">ugracing@uoguelph.ca</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.footerWrapper {
    width: 100%;
    padding-top: 5vh;
    padding-bottom: 10vh;
    margin: 0 auto;
    background-color: var(gryphon-black);
    text-align: center;
}
.mainFooter {
    display: flex;
    padding-left: 8vw;
    padding-right: 20vw;
}

.mainFooter div {
    padding-top: 1vh;
    padding-left: 4vw;
    padding-right: 4vw;
}
.teamLogo {
    margin-top: 3vh;
}

.socialMediaLogos {
    height: 50px;
    width: 18vw;
}
.socialMediaLogos ul {
    list-style-type: none;
    display: flex;
    position: relative;
    padding-left: 0;
    width: 20vw;
}
.socialMediaLogos li {
    margin-right: 5vh;
}
.socialMediaLogos img {
    background-color: aqua;
    height: 50px;
    width: 50px;
}
.contact_email {
    text-decoration: none;
    color: var(--gryphon-white);
}

.contactInformation {
    text-align: left;
    line-height: 170%;
}
</style>
