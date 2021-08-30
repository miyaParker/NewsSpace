const app = () => {
  const SETTINGS = {
    // API_KEY: "4c6292ea668f4393b736943e01845af2",
    API_KEY: "4fae98f363504cbbaf34a9a7040c8e96",
    PAGE: 1,
    NEWS_ARTICLES: [],
    LOADING: true,
    SEARCH_QUERY: "general",
    CATEGORY: "general",
    urlEndpoint() {
      return `https://newsapi.org/v2/everything?q=${this.SEARCH_QUERY}&page=${this.PAGE}?&apiKey=${this.API_KEY}`;
    },
      categoryEndpoint(){
        return `https://newsapi.org/v2/top-headlines?country=ng&category=${this.CATEGORY}&apiKey=4fae98f363504cbbaf34a9a7040c8e96`
      },
  };

  //set item to local storage
  const updateOfflineData = (itemList) => {
    itemList.map(({ key, value }) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
  };

  //get item from localStorage
  const fetchOfflineData = (key) => {
    const data = localStorage.getItem(key);
    if (typeof data !== undefined) {
      return JSON.parse(data);
    } else return [];
  };

  //create Navlinks
  const createNavLinks = () => {
    const navlinks = [
      "Business",
      "Politics",
      "Entertainment",
      "Health",
      "Science",
      "Sports",
      "Technology",
    ];
    const ul = query(".navlinks");
    navlinks.map((navlink) => {
      const li = createElement("li");
      li.textContent = navlink;
      li.addEventListener("click", newsArticlesByCategory);
      ul.appendChild(li);
    });
  };

  //initialize application settings
  const init = async () => {
    console.log("Starting NewsSpace...");
    createNavLinks();
    const URL_ENDPOINT = SETTINGS.urlEndpoint();
    initializeEventListeners();
    //Check if browser support local storage
    const articles = fetchOfflineData("articles");
    const page = fetchOfflineData("page");
    const searchQuery = fetchOfflineData("query");
    if (page && searchQuery && typeof articles !== "undefined" & articles.length) {
      SETTINGS.PAGE = page;
      SETTINGS.PAGE = searchQuery;
      loadNewsArticles(articles);
    } else {
      const data = await fetchNewsArticles(URL_ENDPOINT);
      SETTINGS.NEWS_ARTICLES = data.articles;
      updateOfflineData([
        {
          key: "articles",
          value: SETTINGS.NEWS_ARTICLES,
        },
        {
          key: "page",
          value: SETTINGS.PAGE,
        },
        {
          key: "query",
          value: SETTINGS.SEARCH_QUERY,
        },
      ]);
      loadNewsArticles(SETTINGS.NEWS_ARTICLES);
    }
  };

  //creates an element and returns it
  const createElement = (element) => document.createElement(element);

  //query element by id, class, or tag and returns it
  const query = (element) => document.querySelector(element);

  //query all elements with class or tag and returns it
  const queryAll = (element) => document.querySelectorAll(element);

  //fetch news articles from the API
  const fetchNewsArticles = async (url) => {
    const response = await fetch(url);
    const articles = await response.json();
    return articles;
  };

  //generates 'div','h1','img','p','a' elements
  const generateHTMLElements = () => {
    return {
      containerDiv: createElement("div"),
      imageDiv: createElement("div"),
      textDiv: createElement("div"),
      titleDiv: createElement("div"),
      shareDiv: createElement("div"),
      h3: createElement("h"),
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
          h3,
          urlImg,
          shareImg,
          p,
          span,
          a,
        } = generateHTMLElements();
        h3.textContent = title;
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
        a.appendChild(h3);
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
  const loadMoreArticles = async () => {
    console.log("Loading more articles...");
    SETTINGS.LOADING = true;
    SETTINGS.PAGE++;
    const URL_ENDPOINT = SETTINGS.urlEndpoint();
    const data = await fetchNewsArticles(URL_ENDPOINT);
    console.log(URL_ENDPOINT);
    SETTINGS.NEWS_ARTICLES.push(...data.articles);
    updateOfflineData([
      {
        key: "articles",
        value: SETTINGS.NEWS_ARTICLES,
      },
      {
        key: "page",
        value: SETTINGS.PAGE,
      },
    ]);
    //load only new data
    loadNewsArticles(data.articles);
    SETTINGS.LOADING = false;
  };

  //load news articles by category
  const newsArticlesByCategory = async (e) => {
    SETTINGS.CATEGORY = e.target.textContent;
    const URL_ENDPOINT = SETTINGS.categoryEndpoint();
    const data = await fetchNewsArticles(URL_ENDPOINT);
    console.log(data)
    const view = query(".card-container");
    view.innerHTML = "";
    SETTINGS.NEWS_ARTICLES = data.articles;
    console.log(SETTINGS.NEWS_ARTICLES)
    loadNewsArticles(SETTINGS.NEWS_ARTICLES);
    SETTINGS.CATEGORY = "general";
    updateOfflineData([
      {
        key: "articles",
        value: SETTINGS.NEWS_ARTICLES,
      },
      {
        key: "page",
        value: SETTINGS.PAGE,
      },
      {
        key: "query",
        value: "general",
      },
    ]);
  };

  //search news articles by user-defined query
  const queryNewsArticles = async (e) => {
    SETTINGS.PAGE = 1;
    const KEYWORD = e.target.nextElementSibling.value;
    SETTINGS.SEARCH_QUERY = KEYWORD.length ? KEYWORD : "general";
    query("#search-bar").value = "";
    const view = query(".card-container");
    view.innerHTML = "";
    const URL_ENDPOINT = SETTINGS.urlEndpoint();
    const data = await fetchNewsArticles(URL_ENDPOINT);
    SETTINGS.NEWS_ARTICLES = data.articles;
    //update local storage
    loadNewsArticles(SETTINGS.NEWS_ARTICLES);
    updateOfflineData([
      {
        key: "articles",
        value: SETTINGS.NEWS_ARTICLES,
      },
      {
        key: "page",
        value: SETTINGS.PAGE,
      },
      {
        key: "query",
        value: SETTINGS.SEARCH_QUERY,
      },
    ]);
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
        if ("AbortError" in err) {
          return;
        }
      }
    } else {
      alert("Your browser does not support link sharing.");
    }
  };

  //initialize event listeners
  const initializeEventListeners = () => {
    console.log("Initializing event listeners...");
    query("#load-more").addEventListener("click", loadMoreArticles);
    query("#search").addEventListener("click", queryNewsArticles);
  };
  return init;
};
const init = app();
init();
