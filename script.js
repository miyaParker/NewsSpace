const app = () => {
    // const articles = [
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "MMA Fighting"
    //         },
    //         "author": "MMA Fighting Newswire",
    //         "title": "Jake Paul vs. Tyron Woodley Results: Live updates of the undercard and main event - MMA Fighting",
    //         "description": "Get Jake Paul vs. Tyron Woodley results for the Paul vs. Woodley event Sunday in Cleveland.",
    //         "url": "https://www.mmafighting.com/2021/8/29/22646437/jake-paul-vs-tyron-woodley-results-live-updates-of-the-undercard-and-main-event",
    //         "urlToImage": "https://cdn.vox-cdn.com/thumbor/rZhbx2wcvP7tc8ceA3TqhLCmG-0=/0x0:4879x2554/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22812094/1336950990.jpg",
    //         "publishedAt": "2021-08-29T04:01:00Z",
    //         "content": "MMA Fighting has Jake Paul vs. Tyron Woodley results live for the Paul vs. Woodley fight card at the Rocket Mortgage Fieldhouse in Cleveland, Ohio.\r\nWhen the main event begins, likely around 10:45 p.… [+788 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "nbc-news",
    //             "name": "NBC News"
    //         },
    //         "author": "Alicia Victoria Lozano",
    //         "title": "Thousands of Louisiana residents flee as Hurricane Ida barrels toward Gulf Coast - NBC News",
    //         "description": "Thousands of Louisiana residents fled the state Saturday as Hurricane Ida barreled toward the Gulf Coast.",
    //         "url": "https://www.nbcnews.com/news/us-news/thousand-louisiana-residents-flee-hurricane-ida-barrels-toward-gulf-coast-n1277867",
    //         "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_34/3502152/210828-new-orleans-mb-1409.JPG",
    //         "publishedAt": "2021-08-29T03:46:00Z",
    //         "content": "At first, Tulane University senior Josie Kane didnt realize a monster hurricane was heading to New Orleans but she became increasingly worried as reports of the storm intensified in tone.\r\nShe went t… [+3863 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "fox-news",
    //             "name": "Fox News"
    //         },
    //         "author": "Associated Press",
    //         "title": "NASCAR: Blaney avoids last-lap wreck to win regular season finale at Daytona - Fox News",
    //         "description": "Ryan Blaney won his second race in a row to take the regular season-ending Daytona 400. Kyle Larson clinched the regular season championship.",
    //         "url": "https://www.foxnews.com/auto/nascar-blaney-season-finale-daytona",
    //         "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/daytona.jpg",
    //         "publishedAt": "2021-08-29T03:36:55Z",
    //         "content": "Ryan Blaney won for the second consecutive week when the race Saturday night at Daytona International Speedway ended under caution in overtime with a typical fiery finish.\r\n(Logan Riely/Getty Images)… [+5147 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "New York Post"
    //         },
    //         "author": "Post Editorial Board",
    //         "title": "Kamala Harris' cackling is Joe Biden's job security - New York Post ",
    //         "description": "Vice President Kamala Harris is just too prone to verbal fumbles that pour more fuel on the Biden administration’s fires.",
    //         "url": "https://nypost.com/2021/08/28/kamala-harris-cackling-is-joe-bidens-job-security/",
    //         "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/08/kamala-cackle.jpg?quality=90&strip=all&w=1024",
    //         "publishedAt": "2021-08-29T01:48:00Z",
    //         "content": "Vice President Kamala Harriss team canceled press access to her remarks to US troops at Pearl Harbor on Thursday surely because it feared yet another disaster for the veep at the site of a terrible a… [+2225 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "google-news",
    //             "name": "Google News"
    //         },
    //         "author": null,
    //         "title": "Bryson DeChambeau shoots 5-under 67 | Round 3 | BMW Championship | 2021 - PGA TOUR",
    //         "description": null,
    //         "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9MG1fTDdmejlxSmvSAQA?oc=5",
    //         "urlToImage": null,
    //         "publishedAt": "2021-08-29T01:04:01Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Los Angeles Times"
    //         },
    //         "author": "Hayley Smith, Anita Chabria",
    //         "title": "The Caldor fire is moving in on Strawberry. Can its historic lodge be saved? - Los Angeles Times",
    //         "description": "The raging Caldor fire was within striking distance of the historic lodge tucked along Highway 50 on Saturday.",
    //         "url": "https://www.latimes.com/california/story/2021-08-28/caldor-fire-is-moving-in-on-strawberry-can-historic-lodge-be-saved",
    //         "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/5297f84/2147483647/strip/true/crop/3960x2079+0+281/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fbc%2F07%2F03fe7c2b452d977ad17c8fbbad90%2Fla-photos-1staff-832093-la-me-caldor-fire-strawberry-jja-0014.JPG",
    //         "publishedAt": "2021-08-29T00:59:00Z",
    //         "content": "STRAWBERRY, Calif.  When Michael Hicks took ownership of Strawberry Lodge nearly 20 years ago, he knew fire was a possibility.\r\nThe historic lodge, tucked along Highway 50 in the tiny town of Strawbe… [+5241 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-hill",
    //             "name": "The Hill"
    //         },
    //         "author": "Caroline Vakil",
    //         "title": "Britain, France to propose Kabul safe zone for people trying to flee Afghanistan | TheHill - The Hill",
    //         "description": "French President Emmanuel Macron said Saturday that France a...",
    //         "url": "https://thehill.com/policy/international/569877-britain-france-to-propose-kabul-safe-zone-for-people-trying-to-flee",
    //         "urlToImage": "https://thehill.com/sites/default/files/macron_052721getty.jpg",
    //         "publishedAt": "2021-08-29T00:55:00Z",
    //         "content": "French President Emmanuel MacronEmmanuel Jean-Michel MacronReports of the Taliban's coming demise are greatly exaggeratedThe Hill's Morning Report - Presented by Facebook - Pelosi, Democratic moderat… [+4657 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Gizmodo.com"
    //         },
    //         "author": "Jody Serrano",
    //         "title": "Apple Announces Free Repair Program for Some iPhone 12 Models With Receiver Issues - Gizmodo",
    //         "description": "The company said that “a very small percentage” of the devices may experience sound issues due to a faulty component on the receiver module.",
    //         "url": "https://gizmodo.com/apple-announces-free-repair-program-for-some-iphone-12-1847579023",
    //         "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/915d05e94aab68395c3a5c7e9e9288c3.jpg",
    //         "publishedAt": "2021-08-29T00:53:00Z",
    //         "content": "While some of us have mostly abandoned calls for endless text messages, there are others who actually like or need to make and receive phone calls. Thats kind of hard to do with some iPhone 12 and iP… [+1652 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "TMZ"
    //         },
    //         "author": "TMZ Staff",
    //         "title": "Sarah Paulson Ridiculously Dragged for Playing Linda Tripp in Fat Suit - TMZ",
    //         "description": "Sarah Paulson addresses the fat suit controversy.",
    //         "url": "https://www.tmz.com/2021/08/28/sarah-paulson-linda-tripp-fat-suit-impeachment-american-crime-story/",
    //         "urlToImage": "https://imagez.tmz.com/image/9d/16by9/2021/08/29/9dd135608ca6462ab9d5317cfc8f8965_xl.jpg",
    //         "publishedAt": "2021-08-29T00:43:00Z",
    //         "content": "This could be the dumbest, most ridiculous woke move ever ... Sarah Paulson is getting dragged for wearing a fat suit portraying Linda Tripp in \"Impeachment: American Crime Story,\" because some criti… [+2210 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "fox-news",
    //             "name": "Fox News"
    //         },
    //         "author": "Adam Shaw",
    //         "title": "Pentagon appears to break with State Dept on Haqqani network, says there is ‘co-mingling’ with the Taliban - Fox News",
    //         "description": "The Pentagon said on Saturday that there is “co-mingling” between the Haqqani network and the Taliban in Afghanistan – a day after the State Dept. had called them separate entities.",
    //         "url": "https://www.foxnews.com/politics/pentagon-state-dept-haqqani-network-taliban",
    //         "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/Taliban-Afghanistan-1.jpg",
    //         "publishedAt": "2021-08-29T00:20:49Z",
    //         "content": "The Pentagon said on Saturday that there is \"co-mingling\" between the Haqqani network and the Taliban in Afghanistan a day after the State Dept. had called them separate entities.\r\nThe networks leade… [+2645 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Www.https"
    //         },
    //         "author": "New York Post",
    //         "title": "Experts question decision not to name ISIS terrorists killed in Afghanistan drone strike - Fox News",
    //         "description": "The failure of the Biden administration to name the two Islamic State terrorists killed in a US drone strike in Afghanistan on Friday has led some experts to conclude they were not high-value targets.",
    //         "url": "https://www.https://nypost.com/2021/08/28/experts-question-decision-not-to-name-isis-terrorist-killed-in-afghan-strike/",
    //         "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/08/AP21239601468341.jpg",
    //         "publishedAt": "2021-08-29T00:17:40Z",
    //         "content": "The failure of the Biden administration to name the two Islamic State terrorists killed in a US drone strike in Afghanistan on Friday has led some experts to conclude they were not high-value targets… [+2085 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Space.com"
    //         },
    //         "author": "Mike Wall",
    //         "title": "Astra rocket fails to reach space during test launch for US military - Space.com",
    //         "description": "The flight was terminated about 2.5 minutes after liftoff.",
    //         "url": "https://www.space.com/astra-rocket-fails-reach-space-military-test-flight",
    //         "urlToImage": "https://cdn.mos.cms.futurecdn.net/QSqEqFw5zgR8k6xyydP7xZ-1200-80.jpg",
    //         "publishedAt": "2021-08-28T23:58:55Z",
    //         "content": "The third try wasn't the charm for Astra\r\n.\r\nThe California Bay Area startup attempted its third orbital test flight today (Aug. 28), sending its two-stage Launch Vehicle 0006 skyward from the Pacifi… [+6215 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NPR"
    //         },
    //         "author": "Wynne Davis",
    //         "title": "Thousands March In D.C. For Voting Rights - NPR",
    //         "description": "People gathered in Washington, D.C., and also in other cities, to demand lawmakers protect voting rights after a slew of suppressive legislation in Republican-led states.",
    //         "url": "https://www.npr.org/2021/08/28/1032040685/march-on-voting-rights-washington-2021",
    //         "urlToImage": "https://media.npr.org/assets/img/2021/08/28/210828_votingrightsmarch_turner_30_wide-43168becc0b97e58abe284298c6f22f9b488d57b.jpg?s=1400",
    //         "publishedAt": "2021-08-28T23:52:00Z",
    //         "content": "Thousands came to Washington for the March On For Voting Rights. Martin Luther King III, the Rev. Al Sharpton, and Texas Rep. Sheila Jackson Lee are among those pictured.\r\nTyrone Turner for NPR\r\nThou… [+5184 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "usa-today",
    //             "name": "USA Today"
    //         },
    //         "author": "Bill Keveney",
    //         "title": "California Marine Nicole Gee, 23, who cradled baby at Kabul airport, killed in Afghanistan attack - USA TODAY",
    //         "description": "Gee, who was recently promoted to sergeant, was part of the U.S. military contingent helping evacuate people at the airport in Kabul, Afghanistan.",
    //         "url": "https://www.usatoday.com/story/news/nation/2021/08/28/marine-sgt-nicole-gee-23-killed-afghanistan-airport-attack/5637674001/",
    //         "urlToImage": "https://www.gannett-cdn.com/presto/2021/08/28/USAT/573ae716-514b-42a0-8b09-d2b9524ea4b5-AP_Afghanistan_Bombing_US_Troops_California.jpg?crop=1199,675,x0,y61&width=1600&height=800&fit=bounds",
    //         "publishedAt": "2021-08-28T23:28:11Z",
    //         "content": "Two bombings occurred at Kabul's Hamid Karzai International Airport leaving several U.S soldiers dead and many injured.\r\nAssociated Press\r\nMarine Sgt. Nicole Gee celebrated the joy of service just da… [+3202 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "reuters",
    //             "name": "Reuters"
    //         },
    //         "author": "Joseph Menn",
    //         "title": "Researchers, cybersecurity agency urge action by Microsoft cloud database users - Reuters",
    //         "description": "Researchers who discovered a massive flaw in the main databases stored in Microsoft Corp's <a href=\"https://www.reuters.com/companies/MSFT.O\" target=\"_blank\">(MSFT.O)</a> Azure cloud platform on Saturday urged all users to change their digital access keys, no…",
    //         "url": "https://www.reuters.com/technology/researchers-cybersecurity-agency-urge-action-by-microsoft-cloud-database-users-2021-08-28/",
    //         "urlToImage": "https://www.reuters.com/resizer/ziQQzPUKNQV5WIpMSPybCE4YFTg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/N45WXQTJYFIIBNBHNKPEHHVXO4.jpg",
    //         "publishedAt": "2021-08-28T23:28:00Z",
    //         "content": "A Microsoft logo is pictured on a store in the Manhattan borough of New York City, New York, U.S., January 25, 2021. REUTERS/Carlo AllegriAug 28 (Reuters) - Researchers who discovered a massive flaw … [+2780 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NPR"
    //         },
    //         "author": null,
    //         "title": "Gaza Border Clashes: Protests Over Blockade Turn Violent - NPR",
    //         "description": "Hamas-backed activists on Saturday kicked off what they said was a series of protests along the Israeli border meant to pressure Israel to lift a crippling economic blockade on the Gaza Strip.",
    //         "url": "https://www.npr.org/2021/08/28/1032087661/gaza-israel-border-protests-clashes",
    //         "urlToImage": "https://media.npr.org/assets/img/2021/08/28/ap21237652029050_wide-57b88d3c44f66073c0c5b62af9d7492c6ef6ee4c.jpg?s=1400",
    //         "publishedAt": "2021-08-28T22:58:03Z",
    //         "content": "Protesters take cover next to tires on fire near the fence of Gaza Strip border with Israel during a protest east of Khan Younis, southern Gaza Strip, on Wednesday.\r\nAbdel Kareem Hana/AP\r\nGAZA CITY, … [+3442 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "HuffPost"
    //         },
    //         "author": "Mary Papenfuss",
    //         "title": "'This Has Gotta Stop': Eric Clapton Drops Apparent Anti-Vax Anthem - HuffPost",
    //         "description": "“I can’t take this BS any longer. It’s gone far enough,” Clapton sings in new song.",
    //         "url": "https://www.huffpost.com/entry/eric-clapton-gotta-stop-anti-vaccination-anthem_n_612aa8cae4b0231e369c78d1",
    //         "urlToImage": "https://img.huffingtonpost.com/asset/612ab301410000fed8837fb8.jpeg?cache=ghkyrhbgay&ops=1778_1000",
    //         "publishedAt": "2021-08-28T22:52:00Z",
    //         "content": "Vehement anti-vax rocker Eric Clapton has just dropped what appears to be a musical rant against pandemic restrictions and vaccines.\r\nThe animated music video for the legendary guitarists apparent an… [+2818 chars]"
    //     }
    // ]
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

    //initialize application settings
    const init = async () => {
        console.log("Starting NewsSpace...");
        const URL_ENDPOINT = SETTINGS.urlEndpoint();
        console.log(`$init ${URL_ENDPOINT}`);
        const data = await fetchNewsArticles(URL_ENDPOINT);
        const articles = data.articles;
        loadNewsArticles(articles);
        initializeEventListeners();
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
            h2: createElement("h1"),
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
