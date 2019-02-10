export default {
    deviantArt: {
        imageUrl: 'https://orig03.deviantart.net/0c20/f/2015/052/3/4/deviantart_logo_2__green_original___by_siamvocaloid01-d8ix39x.png',
        name: 'DeviantArt',
        font:'Arial',
        color1: '#FA8334',
        color2: '#FA8334',
        click: () => {
            window.location.replace('https://www.deviantart.com/oauth2/authorize?response_type=code&client_id=&redirect_uri=');
        }
    },
    imgur: {
        imageUrl: 'https://www.userlogos.org/files/imgur-i-logo-png.png',
        name: 'Imgur',
        color1: '#FF0042',
        color2: '#FF0042',
        click: () => {
            window.location.replace('https://api.imgur.com/oauth2/authorize?client_id=b5a3df24e04e99b&response_type=token&state=imgur');
        }
    }
}


