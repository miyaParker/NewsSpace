const app = () => {
  //creates an element and returns it
  const createElement = (element) => document.createElement(element);

  //query element by id, class, or tag and returns it
  const query = (element) => document.querySelector(element);
  const button = query("#load-more");
  const loader = query("#loader");
  const view = query(".card-container");
  const navUl = query(".nav-features");
  const nav = query(".nav");
  const errorMessage = query("#error");
  const search = query("#search");
  const menu = query(".toggle");
  const close = query("#close");
  const SETTINGS = {
    API_KEY: "b6b59c3cb37e46c8956ba2716aecca14",
    PAGE: 1,
    NEWS_ARTICLES: [],
    LOADING: true,
    SEARCH_QUERY: "general",
    CATEGORY: "general",
    urlEndpoint() {
      return `https://newsapi.org/v2/everything?q=${this.SEARCH_QUERY}&page=${this.PAGE}&apiKey=${this.API_KEY}`;
    },
    categoryEndpoint() {
      return `https://newsapi.org/v2/top-headlines?country=ng&category=${this.CATEGORY}&page=${this.PAGE}&apiKey=4fae98f363504cbbaf34a9a7040c8e96`;
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
    if (page && searchQuery && articles.length) {
      SETTINGS.PAGE = page;
      SETTINGS.SEARCH_QUERY = searchQuery;
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
    SETTINGS.LOADING = false;
  };

  //fetch news articles from the API
  const fetchNewsArticles = async (url) => {
    errorMessage.classList.remove("block");
    errorMessage.classList.add("hidden");
    button.classList.remove("block");
    button.classList.add("hidden");
    loader.classList.add("block");
    loader.classList.remove("hidden");
    try {
      const response = await fetch(url);
      const articles = await response.json();
      console.log(articles);
      return articles;
    } catch (error) {
      if (
        error.message.includes("NetworkError") ||
        error.message.includes("Failed to fetch")
      ) {
        errorMessage.classList.remove("hidden");
        errorMessage.classList.add("block");
        loader.classList.remove("block");
        loader.classList.add("hidden");
      }
    }
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
      p: createElement("p"),
      a: createElement("a"),
      sourceSpan: createElement("span"),
      dateSpan: createElement("span"),
    };
  };

  //display articles on the page
  const loadNewsArticles = (articles) => {
    articles.map(
      ({ title, description, url, urlToImage, source, publishedAt }) => {
        const {
          containerDiv,
          imageDiv,
          titleDiv,
          textDiv,
          shareDiv,
          h3,
          urlImg,
          p,
          sourceSpan,
          dateSpan,
          a,
        } = generateHTMLElements();
        h3.textContent = title;
        p.textContent = description;
        sourceSpan.textContent = source.name;
        dateSpan.textContent = publishedAt.slice(0, 10);
        urlImg.src = urlToImage;
        urlImg.alt = title;
        a.href = url;
        a.target = "_blank";
        urlImg.classList.add("img");
        sourceSpan.classList.add("card-span");
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
        shareDiv.appendChild(sourceSpan);
        shareDiv.appendChild(dateSpan);
        containerDiv.appendChild(imageDiv);
        containerDiv.appendChild(textDiv);
        containerDiv.appendChild(p);
        view.appendChild(containerDiv);
      }
    );
    SETTINGS.LOADING = false;
    button.classList.remove("hidden");
    button.classList.add("block");
    loader.classList.remove("block");
    loader.classList.add("hidden");
  };

  //load more news articles
  const loadMoreArticles = async () => {
    console.log("Loading more articles...");
    SETTINGS.LOADING = true;
    SETTINGS.PAGE += 1;
    console.log(SETTINGS.PAGE);
    const URL_ENDPOINT = SETTINGS.urlEndpoint();
    const data = await fetchNewsArticles(URL_ENDPOINT);
    console.log(URL_ENDPOINT, data.articles);

    //load only new data
    loadNewsArticles(data.articles);
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
    SETTINGS.LOADING = false;
  };

  //load news articles by category
  const newsArticlesByCategory = async (e) => {
    SETTINGS.PAGE = 1;
    SETTINGS.CATEGORY = e.target.textContent;
    const URL_ENDPOINT = SETTINGS.categoryEndpoint();
    const data = await fetchNewsArticles(URL_ENDPOINT);
    const view = query(".card-container");
    view.innerHTML = "";
    SETTINGS.NEWS_ARTICLES = data.articles;
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
        value: +SETTINGS.PAGE,
      },
      {
        key: "query",
        value: SETTINGS.SEARCH_QUERY,
      },
    ]);
  };

  const displayMenu=(e)=> {
    nav.style.display = "block"
    nav.style.textAlign = "left";
    navUl.style.display = "block";
    menu.style.display = "none";
    close.style.display = "block";
  };
  const closeMenu=(e)=> {
    nav.style.display = "flex"
    // nav.style.textAlign = "left";
    navUl.style.display = "none";
    menu.style.display = "block";
    close.style.display = "none";
  };
  //initialize event listeners
  const initializeEventListeners = () => {
    console.log("Initializing event listeners...");
    button.addEventListener("click", loadMoreArticles);
    search.addEventListener("click", queryNewsArticles);
    menu.addEventListener("click", displayMenu);
    close.addEventListener("click", closeMenu);
  };

  return init;
};
const init = app();
init();
