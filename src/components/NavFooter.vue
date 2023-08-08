<template>
    <div class="footer">
        <div class="banner">
            <RouterLink to="/"><img src="/media/banner.svg" /></RouterLink>
        </div>

        <div class="contact_info">
            <h2>Contact us at:</h2>
            50 Stone Road East, Guelph, N1G2W1<br />
            (519) 824-4120 ext 52698<br />
            <a href="mailto:ugracing@uoguelph.ca" class="contact_email">ugracing@uoguelph.ca</a>
        </div>

        <div class="media_logos">
            <a href="https://www.linkedin.com/company/gryphon-racing">
                <img src="/social_media/linkedin.webp" />
            </a>
            <a href="https://www.instagram.com/gryphonracing">
                <img src="/social_media/instagram.webp" />
            </a>
            <a href="https://discord.gg/jTW8CYar2H">
                <img src="/social_media/discord.png" />
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
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    padding: 50px 0px;
}

.media_logos img {
    height: 50px;
    width: 50px;
    margin: 10px;
}

.contact_email {
    text-decoration: none;
    color: var(--gryphon-dark-white);
}

.contact_info {
    text-align: left;
    line-height: 170%;
}

.banner {
    width: 30vw;
    height: 10vh;
    margin: 10px;
}

@media screen and (max-width: 600px) {
    .footer {
        flex-direction: column;
        align-items: center;
    }

    .footer > * {
        margin: 10px 0px;
    }

    .contact_info {
        text-align: center;
    }

    .banner {
        width: 80vw;
        margin-bottom: 40px;
    }
}
</style>
