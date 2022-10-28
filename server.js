const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
app = express();

const ejs = require("ejs");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const date = new Date();
const todayDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} `;
console.log(todayDate);

/*****************************/

let dataNewsApi = [];
let qOfUrl = "india";
const url2 = `https://newsapi.org/v2/everything?q=${qOfUrl}&from=${todayDate}&sortBy=publishedAt&apiKey=2e24e562ed7443048200a0ebef92fdd5`;

const options2 = {
    method: "GET",
};

const fetching = () => {
    fetch(url2, options2)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data.articles)
            //console.log("from fetching")
            //console.log(qOfUrl)
            dataNewsApi = [...data.articles];
        })
        .catch((err) => console.error("error:" + err));
}

fetching()
    /*****************************/

//     /******************************/
//     //crickbuzz api

// const url = 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index';

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'fbb5b19ccfmsh977338aa7a90dbbp155526jsn0062c48de7c6',
//         'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
//     }
// };

// fetch(url, options)
//     .then(res => res.json())
//     .then(data => dataCrickapi = [...data.storyList])
//     .catch(err => console.error('error:' + err));

// /******************************/

app.get("/", (req, res) => {
    let qOfUrl = "india";
    const url2 = `https://newsapi.org/v2/everything?q=${qOfUrl}&from=${todayDate}&sortBy=publishedAt&apiKey=2e24e562ed7443048200a0ebef92fdd5`;

    const options2 = {
        method: "GET",
    };


    fetch(url2, options2)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data.articles)
            //console.log("from fetching")
            //console.log(qOfUrl)
            dataNewsApi = [...data.articles];
        })
        .catch((err) => console.error("error:" + err));






    res.render("home", { heading: "HomePage", newsArray: dataNewsApi });
});


app.get("/search", (req, res) => {




    //console.log("from '/'")
    //console.log(url2)



    res.render("search", { heading: "HomePage", newsArray: dataNewsApi });
});

app.post("/search", (req, res) => {
    console.log(req.body.searchInput);
    qOfUrl = req.body.searchInput;


    if (qOfUrl == "") {
        res.redirect("/")
    } else {


        const url2 = `https://newsapi.org/v2/everything?q=${qOfUrl}&from=${todayDate}&sortBy=publishedAt&apiKey=2e24e562ed7443048200a0ebef92fdd5`;

        const options2 = {
            method: "GET",
        };

        fetch(url2, options2)
            .then((res) => res.json())
            .then((data) => {
                //console.log(data)
                dataNewsApi = [...data.articles];
            })
            .catch((err) => console.error("error:" + err));

        console.log(dataNewsApi.length);
        if (dataNewsApi.length == 0) {
            res.render("error", {});
        } else {
            res.redirect(`/search`);


        }
    }
});

app.get("/contact", (req, res) => {
    res.render("contact", {
        title: "conatct page",
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "conatct page",
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});

//2e24e562ed7443048200a0ebef92fdd5

const abc = "abc";