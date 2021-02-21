import {News, getNews, getPosts} from './moduleRecentNews.js';

const postURL = "https://api.jsonbin.io/b/601e5cdd06934b65f52f2417";

getNews(postURL, 
    (newList)=>{
        let returnHTML=""; 
        // newList.forEach(
        //     element => {
        //         returnHTML += News.News(element.imgURL, element.title, element.date, element.description).Create.HTML();
        //     }
        // );
        newList.reduce(
            (returnHTML, element) => {
                returnHTML + News.News(element.imgURL, element.title, element.date, element.description).Create.HTML()
            }
        );
        document.getElementById("posts").innerHTML = returnHTML;
    }
)

getPosts(postURL,
    (posts)=>{
        // posts.forEach(
        //     (post)=> {
        //         document.getElementById("posts").innerHTML += post.Create();
        //     }
        // )
        posts.map(
            (post) => {
                document.getElementById("posts").innerHTML += post.Create();
            }
        );
    }
)