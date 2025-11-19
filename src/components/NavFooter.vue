<template>
    <div class="footer">
        <div class="contact_info">
            <h2>Contact us at:</h2>
            50 Stone Road East, Guelph, N1G2W1<br />
            (519) 824-4120 ext 52698<br />
            <a href="mailto:ugracing@uoguelph.ca" class="contact_email">ugracing@uoguelph.ca</a>
            <a class="credit"><br><!--Maintained by Khoa Tran--></a>
        </div>

        <img class="banner" src="/media/banner.svg" alt="Gryphon Racing Banner" />

        <div class="media_logos">
            <a href="https://www.linkedin.com/company/gryphon-racing">
                <img src="/social_media/linkedin.svg" alt="Linkedin" />
            </a>
            <a href="https://www.instagram.com/gryphonracing">
                <img src="/social_media/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://discord.gg/jTW8CYar2H">
                <img src="/social_media/discord.svg" alt="Discord" />
            </a>
            <a href="https://github.com/GryphonRacingFSAE">
                <img src="/social_media/github.svg" alt="GitHub" />
            </a>
        </div>
    </div>
</template>

<style scoped>
.footer {
    width: 100%;
    background-color: var(--gryphon-light-black);
    color: var(--gryphon-dark-white);
    text-align: center;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    padding: 10px 0;
}

.media_logos img {
    height: 50px;
    width: 50px;
    margin: 10px;
    filter: invert(92%);
}

.contact_email {
    text-decoration: none;
    color: var(--gryphon-dark-white);
}

.contact_info {
    text-align: left;
    line-height: 150%;
}

.credit {
    font-size: 0.8rem;
    color: var(--gryphon-gray);
}

.banner {
    width: 30vw;
    max-width: 400px;
    padding: 2vh;
}

@media screen and (max-width: 900px) {
    .footer {
        flex-direction: column;
    }

    .footer > * {
        margin: 5px 0;
    }

    .contact_info {
        text-align: center;
    }

    .banner {
        width: 60vw;
        margin-top: 30px;
        margin-bottom: 30px;
    }
}
</style>
