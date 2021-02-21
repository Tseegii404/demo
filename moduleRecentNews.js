//https://api.jsonbin.io/b/601e5cdd06934b65f52f2417
//Suuliin uyiin medeeg ooriin uusgesen json bairlasan server deerees dynamic-aar avah

// News object uusgeh
export let News = {
    //Object uusgeed uusgesen objectoo butsaah
    News: function(_imgURL, _title, _date, _description) {
        this.imgURL = _imgURL;
        this.title = _title;
        this.date = _date;
        this.description = _description;
        return this;
    },
    CreateHTML : function() {
        let returnHTML="";
        return returnHTML += `
        <div class="Medeekart">
            <img class="MedeeniiZurag" src="${this.imgURL}" alt="MedeeniiZurag">
            <div class="MedeeniiBody">
            <h4 class="MedeeniiTitle">${this.title}</h4>
            <img src="clock1.svg" , alt="tsag" />
            <p class="MedeeniiOgnoo">${this.date}</p>
            <p class="MedeeniiTovchTailbar">${this.description}</p>
            </div>
        </div>
    `
    }
}

//Object uusgehguigeer json helbereer butsaah
export function getNews(url, callMeBack) {
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        callMeBack(data.news);
    })
}

//Object uusgene
export function getPosts(url, callMeBack) {
    fetch(url)
    .then(response=>response.json())
    .then(data => {
        // Neg element bur ni news gsn objectiig ilerhiileg array
        let posts = [];
        data.news.map(
            (post) => {
                posts.push(
                    new Post(post.imgURL, post.title, post.date, post.description)
                )
            }
        )
        callMeBack(posts);
    })
}

export class Post {
    constructor(_imgURL, _title, _date, _description) {
        this.imgURL = _imgURL;
        this.title = _title;
        this.date = _date;
        this.description = _description;
    }

    Create() {
        return `
            <div class="Medeekart">
                <img class="MedeeniiZurag" src="${this.imgURL}" alt="MedeeniiZurag">
                <div class="MedeeniiBody">
                    <h4 class="MedeeniiTitle">${this.title}</h4>
                    <p class="MedeeniiOgnoo">${this.date}</p>
                    <p class="MedeeniiTovchTailbar">${this.description}</p>
                </div>
            </div>
        `
    }
}
