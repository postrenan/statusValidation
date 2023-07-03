const prompt = require('prompt-sync')({sigint: true});

const url = prompt('paste a valid url?');


if(!url){
    console.log('your url is invalid');
}

if(url) {
    setInterval(ping, 1000)
}

function ping(){
    fetch(url)
        .then((response) => {
            if(response.status === 200){
                console.log(response.status);
            }
            if(response.status !== 200){
                console.log(response.status);
            }
        })
        .catch((error) => {
            console.error(error);
        });
};