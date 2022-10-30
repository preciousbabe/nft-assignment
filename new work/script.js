
const options = {
  method: 'GET',
  headers: {'Content-Type': 'application/json', Authorization: '6798c907-f27a-4f54-abc9-df9ce355505d'}
};

fetch('https://api.nftport.xyz/v0/nfts?chain=ethereum', options)
  .then(response => response.json())
  .then(response => showNfts(response))
  .catch(err => console.error(err));

const IMG_PATH1 = 'https://live---metadata-5covpqijaa-uc.a.run.app/images/6889';
const IMG_PATH2 = 'https://live---metadata-5covpqijaa-uc.a.run.app/images/1486';
const IMG_PATH3 = 'https://live---metadata-5covpqijaa-uc.a.run.app/images/1581';
const IMG_PATH4 = 'https://live---metadata-5covpqijaa-uc.a.run.app/images/1895';
const IMG_PATH5 = 'https://live---metadata-5covpqijaa-uc.a.run.app/images/1886';
const IMG_PATH6 = 'https://live---metadata-5covpqijaa-uc.a.run.app/images/929';
const IMG_PATH7 = 'https://live---metadata-5covpqijaa-uc.a.run.app/images/2';
const IMG_PATH8 = 'https://live---metadata-5covpqijaa-uc.a.run.app/images/5757';
const IMG_PATH9 = 'https://live---metadata-5covpqijaa-uc.a.run.app/images/5';
const IMG_PATH10 = 'https://live---metadata-5covpqijaa-uc.a.run.app/images/986';
const IMG_PATH11 = 'https://live---metadata-5covpqijaa-uc.a.run.app/images/465';
const IMG_PATH12 = 'https://live---metadata-5covpqijaa-uc.a.run.app/images/458';

const main = document.getElementById('main')

function showNfts (Nft){
        main.innerHTML = ""
        const NftEl = document.createElement('div')
        NftEl.innerHTML = `
        <img src="${IMG_PATH1}" alt="" class ="Nft">
        <img src="${IMG_PATH2}" alt="" class = "Nft">
        <img src="${IMG_PATH3}" alt="" class = "Nft">
        <img src="${IMG_PATH4}" alt="" class = "Nft">
        <img src="${IMG_PATH5}" alt="" class = "Nft">
        <img src="${IMG_PATH6}" alt="" class = "Nft">
        <img src="${IMG_PATH7}" alt="" class = "Nft">
        <img src="${IMG_PATH8}" alt="" class = "Nft">
        <img src="${IMG_PATH9}" alt="" class = "Nft">
        <img src="${IMG_PATH10}" alt="" class = "Nft">
        <img src="${IMG_PATH11}" alt="" class = "Nft">
        <img src="${IMG_PATH12}" alt="" class = "Nft">
        `
        main.appendChild (NftEl)
}

const demo = NftEl.querySelector('.Nft');

demo.addEventListener('click', ()=>{

})