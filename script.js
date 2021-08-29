const app = () => {
    
    const SETTINGS = {
        API_KEY: "4c6292ea668f4393b736943e01845af2",
        PAGE: 1,
        NEWS_ARTICLES: [],
        LOADING: true,
        SEARCH_QUERY: "general",
        CATEGORY: "general",
        urlEndpoint() {
            return `https://newsapi.org/v2/everything?q=${this.SEARCH_QUERY}&page=${this.PAGE}&apiKey=${this.API_KEY}`;
        },
    };


    function updateOfflineData(key, value) {

        localStorage.setItem(key, JSON.stringify(value))
    }

    const fetchOfflineData = (data) => {
        return localStorage.getItem(data);
    }

    //initialize application settings
    const init = async () => {
        console.log("Starting NewsSpace...");

        // Check if browser support local storage
        if(window.localStorage) {
            let articles = fetchOfflineData('articles');
            if (articles) {
                loadNewsArticles(JSON.parse(articles))
                return 
            }

            const URL_ENDPOINT = SETTINGS.urlEndpoint();
            const data = await fetchNewsArticles(URL_ENDPOINT);
            articles = data.articles;
            updateOfflineData('articles', articles)
            loadNewsArticles(articles);
            initializeEventListeners();
        }

    };

    //creates an element and returns it
    const createElement = (element) => {
        return document.createElement(element);
    };

    //query element by id, class, or tag and returns it
    const query = (element) => {
        return document.querySelector(element);
    };

    //query all elements with class or tag and returns it
    const queryAll = (element) => {
        return document.querySelectorAll(element);
    };

    //fetch news articles from the API
    const fetchNewsArticles = async (url) => {
        const response = await fetch(url);
        const articles = await response.json();
        return articles;
    };

    //get articles Array
    const getArticlesArray = (articles) => {
        articles.then((data) => {
            SETTINGS.NEWS_ARTICLES = data.articles;
            console.log(data);
            loadNewsArticles(SETTINGS.NEWS_ARTICLES);
        });
    };

    //generates 'div','h1','img','p','a' elements
    const generateHTMLElements = (elements) => {
        return {
            containerDiv: createElement("div"),
            imageDiv: createElement("div"),
            textDiv: createElement("div"),
            titleDiv: createElement("div"),
            shareDiv: createElement("div"),
            h2: createElement("h2"),
            urlImg: createElement("img"),
            shareImg: createElement("img"),
            p: createElement("p"),
            a: createElement("a"),
            span: createElement("span"),
        };
    };

    //display articles on the page
    const loadNewsArticles = (articles) => {
        const view = query(".card-container");
        const button = query("#load-more");
        articles
            .filter((article) => article.urlToImage !== null)
            .map(({ title, description, url, urlToImage, source }) => {
                const {
                    containerDiv,
                    imageDiv,
                    titleDiv,
                    textDiv,
                    shareDiv,
                    h2,
                    urlImg,
                    shareImg,
                    p,
                    span,
                    a,
                } = generateHTMLElements();
                h2.textContent = title;
                p.textContent = description;
                span.textContent = source.name;
                urlImg.src = urlToImage;
                urlImg.alt = title;
                a.href = url;
                a.target = "_blank";
                shareImg.src = "./assets/img/share.png";
                shareImg.addEventListener("click", shareNewsLink);
                shareImg.classList.add("share");
                urlImg.classList.add("img");
                span.classList.add("card-span");
                imageDiv.classList.add("card-image");
                titleDiv.classList.add("card-title");
                shareDiv.classList.add("flex");
                p.classList.add("card-text");
                containerDiv.classList.add("card");
                textDiv.classList.add("flex-col");
                a.appendChild(h2);
                textDiv.appendChild(shareDiv);
                textDiv.appendChild(titleDiv);
                titleDiv.appendChild(a);
                imageDiv.appendChild(urlImg);
                shareDiv.appendChild(span);
                shareDiv.appendChild(shareImg);
                containerDiv.appendChild(imageDiv);
                containerDiv.appendChild(textDiv);
                containerDiv.appendChild(p);

                view.appendChild(containerDiv);
            });
        SETTINGS.LOADING = false;
        button.classList.add("display-block");
    };

    //load more news articles
    const loadMoreArticles = async() => {
        console.log("Loading more articles...");
        SETTINGS.LOADING = true;
        SETTINGS.PAGE++;
        const URL_ENDPOINT = SETTINGS.urlEndpoint();
        console.log(`$load more ${URL_ENDPOINT}`);
        const data = await fetchNewsArticles(URL_ENDPOINT);
        const articles = data.articles;
        SETTINGS.NEWS_ARTICLES.push(...articles);
        loadNewsArticles(SETTINGS.NEWS_ARTICLES.slice((SETTINGS.PAGE - 1) * 20));
        SETTINGS.LOADING = false;
        console.log(SETTINGS.NEWS_ARTICLES);
    };

    //load news articles by category
    const newsArticlesByCategory = (e) => {
        SETTINGS.PAGE = 1;
        SETTINGS.CATEGORY = e.target.value;
        const URL_ENDPOINT = SETTINGS.urlEndpoint();
        const articles = fetchNewsArticles(URL_ENDPOINT);
        getArticlesArray(articles);
    };

    //search news articles by user-defined query
    const queryNewsArticles = (e) => {
        SETTINGS.PAGE = 1;
        SETTINGS.SEARCH_QUERY = e.target.value;
        const URL_ENDPOINT = SETTINGS.urlEndpoint();
        const articles = fetchNewsArticles(URL_ENDPOINT);
        getArticlesArray(articles);
    };

    const shareNewsLink = async (e) => {
        if (navigator.share) {
            console.log(e.target);
            const parentNode = e.target.parentNode;
            const a = parentNode.children[0];
            const title = a.textContent;
            const text =
                "Hi! Check out this interesting news article from NewsSpace.";
            const SHARE_DATA = {
                title,
                text,
                url: a.href,
            };
            console.log(SHARE_DATA);
            try {
                await navigator.share(SHARE_DATA);
            } catch (err) {
                alert("error sharing link " + err);
            }
        } else {
            alert("Your browser does not support link sharing.");
        }
    };

    //initialize event listeners
    const initializeEventListeners = () => {
        console.log("Initializing event listeners...");
        query("#load-more").addEventListener("click", loadMoreArticles);
        // query('#list').addEventListener('click', newsArticlesByCategory);
        // query('#search').addEventListener('click', queryNewsArticles);
    };
    return init;


};
const init = app();
init();
