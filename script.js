const app = () => {
    const SETTINGS = {
        API_KEY: "4c6292ea668f4393b736943e01845af2",
        SEARCH_QUERY: "general",
        PAGE: 1,
        NEWS_ARTICLES: [],
        LOADING: true,
        urlEndpoint() { return `https://newsapi.org/v2/everything?q=${this.SEARCH_QUERY}&page=${this.PAGE}&apiKey=${this.API_KEY}` },
    };

    //initialize application settings
    const init = () => {
        console.log("Starting NewsSpace...");
        const URL_ENDPOINT = SETTINGS.urlEndpoint()
        const articles = fetchNewsArticles(URL_ENDPOINT);
        articles.then(data => {
            SETTINGS.NEWS_ARTICLES = data.articles;
            loadNewsArticles(SETTINGS.NEWS_ARTICLES);
            initializeEventListeners();
        });

    };

    //creates an element and returns it
    const createElement = (element) => {
        return document.createElement(element);
    };
    //query element
    const query = (element) => {
        return document.querySelector(element);
    };

    //fetch news articles from the API
    const fetchNewsArticles = async (url) => {
        const response = await fetch(url);
        const articles = await response.json();
        return articles;
    };

    //generate 'div','h1','img','p','a' elements
    const generateHTMLElements = (elements) => {
        return {
            div: createElement('div'),
            h1: createElement('h1'),
            img: createElement('img'),
            p: createElement('p'),
            a: createElement('a'),
            span: createElement('span'),
        };
    };

    //display articles on the page
    const loadNewsArticles = (articles) => {
        const main = query('#main');
        const button = query('#load-more');
        articles.map(({ title, description, url, urlToImage, publishedAt }) => {
            const { div, h1, img, p, span, a } = generateHTMLElements();
            h1.textContent = title;
            p.textContent = description;
            span.textContent = publishedAt;
            img.src = urlToImage;
            img.alt = title;
            img.width = 300;
            a.href = url;
            a.target = "_blank";
            a.appendChild(h1);
            div.appendChild(a);
            div.appendChild(img);
            div.appendChild(p);
            div.appendChild(span);
            main.appendChild(div);
        });
        SETTINGS.LOADING = false;
        button.classList.add("display-block")
    };
    //load more news articles
    const loadMoreArticles = () => {
        console.log("loading more articles")
        SETTINGS.PAGE++;
        const URL_ENDPOINT = SETTINGS.urlEndpoint()
        const articles = fetchNewsArticles(URL_ENDPOINT);
        console.log(SETTINGS.NEWS_ARTICLES);
        articles.then(data => {
            SETTINGS.NEWS_ARTICLES.push(...data.articles);
            console.log(SETTINGS.NEWS_ARTICLES)
            loadNewsArticles(SETTINGS.NEWS_ARTICLES.slice(SETTINGS.PAGE - 1 * 20));
        });
    }

    //initialize event listeners
    const initializeEventListeners = () => {
        console.log("Initializing event listeners...");
        query('#load-more').addEventListener('click', loadMoreArticles);
    }
    return init;
};
const init = app();
init();



