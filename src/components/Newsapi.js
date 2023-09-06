import React from 'react'
import axios from "axios"
import {useState} from "react"
import Card1 from "../Card1"
import "../styles/news.css"

let dummy={
  "status": "ok",
  "totalResults": 38,
  "articles": [
      {
          "source": {
              "id": null,
              "name": "India Today"
          },
          "author": "Abhik Sengupta",
          "title": "Realme C51 with 50MP camera launched in India, priced at Rs 8,999 - India Today",
          "description": "The Realme C51 is priced at Rs 8,999 for the sole 4GB RAM and 64GB storage. The colour options include Mint Green and Carbon Black.",
          "url": "https://www.indiatoday.in/technology/news/story/realme-c51-with-50mp-camera-launched-in-india-priced-at-rs-8999-2431069-2023-09-05",
          "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/realme-c51-052700-16x9.jpg?VersionId=hI0qjnKyFqtY6HEBldbIjj1DkrgSq6w4",
          "publishedAt": "2023-09-05T04:28:00Z",
          "content": "Realme has refreshed its pocket-friendly Realme C-series smartphone line with a new Realme C51. Priced under Rs 10,000, the phone features a 6.7-inch IPS LCD panel with a 90Hz refresh rate and 33W fa… [+2133 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Hindustan Times"
          },
          "author": "HT Tech",
          "title": "Garena Free Fire launch U-turn! Know what's happening to India rollout - HT Tech",
          "description": "Garena Free Fire launch in India was slated for today, September 5.",
          "url": "https://tech.hindustantimes.com/gaming/news/garena-free-fire-launch-u-turn-know-what-s-happening-to-india-rollout-71693887336266.html",
          "urlToImage": "https://images.hindustantimes.com/tech/img/2023/09/05/1600x900/e550be_1693887532851_1693887533171.jpg",
          "publishedAt": "2023-09-05T04:22:07Z",
          "content": "The day for which Garena Free Fire enthusiasts were eagerly waiting is here, but the game launch is not likely to happen today! The Garena Free Fire launch date was meant to be today, but this most-a… [+2344 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "NDTV News"
          },
          "author": null,
          "title": "North Korea's Kim, Putin Plan To Meet In Russia To Discuss Arms Deal - NDTV",
          "description": "North Korean leader Kim Jong Un plans to travel to Russia this month to meet Russian President Vladimir Putin to discuss the possibility of supplying weapons for the war in Ukraine, the New York Times reported, citing U.S. and allied sources.",
          "url": "https://www.ndtv.com/world-news/kim-jong-un-to-meet-putin-this-month-in-russia-to-discuss-arms-deal-report-4359979",
          "urlToImage": "https://c.ndtvimg.com/2022-07/ogvps718_kim-jong-un-reuters_625x300_28_July_22.jpg",
          "publishedAt": "2023-09-05T04:10:00Z",
          "content": "North Korean leader Kim Jong Un plans to travel to Russia this month to meet Vladimir Putin.\r\nSeoul: North Korean leader Kim Jong Un expects to make a rare trip abroad to meet with President Vladimir… [+4699 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "NDTV News"
          },
          "author": null,
          "title": "G20: No Swiggy, Zomato, Amazon Deliveries From Sept 8-10 In Central Delhi - NDTV",
          "description": "All cloud kitchens, commercial establishments, markets, food delivery, and commercial delivery services will be shut for three days in the New Delhi district.",
          "url": "https://www.ndtv.com/india-news/g20-summit-swiggy-zomato-amazon-deliveries-not-allowed-from-september-8-10-in-new-delhi-district-4360149",
          "urlToImage": "https://c.ndtvimg.com/2023-08/g79usnc_swiggy-generic_625x300_17_August_23.jpg",
          "publishedAt": "2023-09-05T03:53:00Z",
          "content": "Essential services like medicine deliveries will be allowed during this period.\r\nThe G20 Leaders' Summit is scheduled to be held from September 9-10 at the newly built international convention and ex… [+1922 chars]"
      },
      {
          "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
          },
          "author": "Chethan Kumar",
          "title": "Vikram’s ‘hop’ before sleep spurs hopes for ‘giant leaps’ - Times of India",
          "description": "India News: Just hours before entering sleep mode, Chandrayan's Vikram accomplished a significant milestone by conducting a'short hop,' an accomplishment that bea",
          "url": "https://timesofindia.indiatimes.com/india/vikrams-hop-before-sleep-spurs-hopes-for-giant-leaps/articleshow/103371552.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-103371553,width-1070,height-580,imgsize-846083,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-09-05T03:48:00Z",
          "content": "AI imagines Chandrayaan-3 journey: From planning to success"
      },
      {
          "source": {
              "id": null,
              "name": "India.com"
          },
          "author": "Zee Media Bureau",
          "title": "LIVE | ICC ODI World Cup 2023 Team India Squad Announcement: Harsha Bhogle Wants KL Rahul In Squad - Zee News",
          "description": "LIVE | ICC ODI World Cup 2023 Team India Squad Announcement: Harsha Bhogle Wants KL Rahul In Squad",
          "url": "https://zeenews.india.com/cricket/live-updates/icc-odi-world-cup-2023-team-india-squad-announcement-meeting-chief-selector-bcci-ajit-agarkar-senior-selection-committee-standby-players-team-list-rohit-sharma-virat-kohli-jasprit-bumrah-kl-rahul-shreyas-iyer-sanju-samson-2657972",
          "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/09/05/1275119-indiasquadblog.jpg",
          "publishedAt": "2023-09-05T03:41:58Z",
          "content": null
      },
      {
          "source": {
              "id": null,
              "name": "NDTV News"
          },
          "author": null,
          "title": "Viral: Shah Rukh Khan Visits Tirupati With Daughter Suhana, Jawan Co-Star Nayanthara - NDTV Movies",
          "description": "Shah Rukh Khan was accompanied by daughter Suhana and his manager Pooja Dadlani",
          "url": "https://www.ndtv.com/entertainment/viral-shah-rukh-khan-visits-tirupati-with-daughter-suhana-jawan-co-star-nayanthara-4360204",
          "urlToImage": "https://c.ndtvimg.com/2023-09/7hk3nn0g_srk-_625x300_05_September_23.jpg",
          "publishedAt": "2023-09-05T03:17:47Z",
          "content": "Shah Rukh Khan and daughter Suhana at Tirupati.\r\nNew Delhi: Superstar Shah Rukh Khan offered prayers at the Sri Venkateshwara Swamy temple in Tirupati, ahead of the release of his upcoming film Jawan… [+1562 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "YouTube"
          },
          "author": null,
          "title": "India’s Chandrayaan-3 rover put in ‘sleep mode’ - South China Morning Post",
          "description": "Subscribe to our YouTube channel for free here: https://sc.mp/subscribe-youtubeFor more on this: https://sc.mp/7xbmThe Indian Space Research Organisation has...",
          "url": "https://www.youtube.com/watch?v=ovTYqWYzI3g",
          "urlToImage": "https://i.ytimg.com/vi/ovTYqWYzI3g/maxresdefault.jpg",
          "publishedAt": "2023-09-05T03:16:54Z",
          "content": null
      },
      {
          "source": {
              "id": null,
              "name": "Moneycontrol"
          },
          "author": null,
          "title": "Happy Teachers' Day: Wishes, greetings, messages, quotes, Facebook and WhatsApp status - Moneycontrol",
          "description": "Teachers' Day 2023: Here are some Happy Teachers’ Day wishes, greetings, messages and images you can share with your favourite teachers on September 5.",
          "url": "https://www.moneycontrol.com/news/trends/happy-teachers-day-wishes-greetings-messages-quotes-facebook-and-whatsapp-status-11311581.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/09/Collage-Maker-05-Sep-2023-08-37-AM-6212-770x433.jpg",
          "publishedAt": "2023-09-05T03:15:34Z",
          "content": "Good teachers are more than just educators, they are an inspiration and a role model to students. Teachers can shape a students life in significant ways encouraging them in areas where they show prom… [+2770 chars]"
      },
      {
          "source": {
              "id": "google-news",
              "name": "Google News"
          },
          "author": "Mint",
          "title": "Qantas Airways CEO Alan Joyce steps down amid ticket scandal, regulatory scrutiny | Mint - Mint",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMijAFodHRwczovL3d3dy5saXZlbWludC5jb20vY29tcGFuaWVzL25ld3MvcWFudGFzLWFpcndheXMtY2VvLWFsYW4tam95Y2Utc3RlcHMtZG93bi1hbWlkLXRpY2tldC1zY2FuZGFsLXJlZ3VsYXRvcnktc2NydXRpbnktMTE2OTM4Nzk1Njc4MDMuaHRtbNIBkAFodHRwczovL3d3dy5saXZlbWludC5jb20vY29tcGFuaWVzL25ld3MvcWFudGFzLWFpcndheXMtY2VvLWFsYW4tam95Y2Utc3RlcHMtZG93bi1hbWlkLXRpY2tldC1zY2FuZGFsLXJlZ3VsYXRvcnktc2NydXRpbnkvYW1wLTExNjkzODc5NTY3ODAzLmh0bWw?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-09-05T02:59:42Z",
          "content": null
      },
      {
          "source": {
              "id": null,
              "name": "The Indian Express"
          },
          "author": "Lifestyle Desk",
          "title": "National Nutrition Week: Understanding sustainable eating and its myriad benefits - The Indian Express",
          "description": "According to Vilasini Bhaskaran, Registered Specialist Dietitian, NHS UK and Dietetic Lead, Practo, sustainable eating means choosing foods based on the impact of their production on soil, water consumption, pesticides, land clearing, greenhouse gases and fos…",
          "url": "https://indianexpress.com/article/lifestyle/health/national-nutrition-week-sustainable-eating-diet-health-benefits-8922067/",
          "urlToImage": "https://images.indianexpress.com/2023/09/sustainable-eating-1.jpg",
          "publishedAt": "2023-09-05T02:50:52Z",
          "content": "National Nutrition Weekis observed annually in India in the first week of September. Dedicated to raising awareness among people about the importance of nutrition, it was first recognised in India in… [+5691 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "India Today"
          },
          "author": "Janani K",
          "title": "Video: Vijay Deverakonda to donate Rs 1 crore from 'Kushi' salary to 100 families - India Today",
          "description": "Vijay Deverakonda announced that he'd donate Rs 1 lakh to 100 families to spread 'Kushi'. He also revealed that he'd shell out Rs 1 crore from his remuneration to share the joy with his fans.",
          "url": "https://www.indiatoday.in/movies/regional-cinema/story/video-vijay-deverakonda-to-donate-rs-1-crore-from-kushi-salary-to-100-families-2431015-2023-09-05",
          "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/vijay-deverakonda-kushi-051859-16x9.jpg?VersionId=rltvkBu5dMcZjRW5bDBSVa8pJYqH2TPM",
          "publishedAt": "2023-09-05T02:48:40Z",
          "content": "Vijay Deverakonda and Samantha Ruth Prabhu are riding on the success of their recently released film, 'Kushi'. After visiting theatres in Hyderabad, Vijay attended a promotional event in Visakhapatna… [+2059 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "NDTV News"
          },
          "author": "NDTV Sports Desk",
          "title": "Watch: Rohit Sharma Left Dumbstruck After India's Poor Fielding Efforts Against Nepal In Asia Cup 20.. - NDTV Sports",
          "description": "India vs Nepal, Asia Cup 2023: Indian cricket team missed three catches within the first five overs against Nepal.",
          "url": "https://sports.ndtv.com/asia-cup-2023/india-vs-nepal-asia-cup-2023-rohit-sharma-left-dumbstruck-after-indias-poor-fielding-effort-watch-4358477",
          "urlToImage": "https://c.ndtvimg.com/2023-09/4q4h38go_rohit_625x300_05_September_23.jpg",
          "publishedAt": "2023-09-05T02:46:00Z",
          "content": "It was a horrible day for the Indian cricket team on the field as three catches were dropped within the first 5 overs against Nepal in the Asia Cup 2023 on Monday. In the very first over of the innin… [+1991 chars]"
      },
      {
          "source": {
              "id": "the-times-of-india",
              "name": "The Times of India"
          },
          "author": "Sumati Yengkhom",
          "title": "Hand Foot Mouth: Sharp Rise In Hand, Foot And Mouth Disease Cases | Kolkata News - Times of India - Times of India",
          "description": "Amid the dengue surge, children in Kolkata are being affected by the highly contagious hand, foot and mouth disease (HFMD). Doctors across the city st",
          "url": "https://timesofindia.indiatimes.com/city/kolkata/sharp-rise-in-hand-foot-and-mouth-disease-cases/articleshow/103373659.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-103377273,width-1070,height-580,imgsize-24026,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2023-09-05T02:45:00Z",
          "content": "AI imagines Chandrayaan-3 journey: From planning to success"
      },
      {
          "source": {
              "id": null,
              "name": "The Indian Express"
          },
          "author": "Sports Desk",
          "title": "‘Only Jay Shah can explain why Sri Lanka was accommodated against all reason, logic’: Former PCB chief Najam Sethi hits out at BCCI secy - The Indian Express",
          "description": "According to Najam Sethi, the ACC' refused to select UAE as an alternative venue as the co-host of Asia Cup after India refused to play their matches in Pakistan.",
          "url": "https://indianexpress.com/article/sports/cricket/only-jay-shah-can-explain-najam-sethi-hits-out-at-bcci-secy-8924903/",
          "urlToImage": "https://images.indianexpress.com/2023/01/BCCI-PCB.jpg",
          "publishedAt": "2023-09-05T02:25:58Z",
          "content": "In a series of tweets, Former Pakistan Cricket Board (PCB) chief Najam Sethi has hit out at BCCI secretary Jay Shah, who also leads the Asian Cricket Council (ACC), and vented his frustrations regard… [+2375 chars]"
      },
      {
          "source": {
              "id": "google-news",
              "name": "Google News"
          },
          "author": "Koimoi",
          "title": "Jawan Box Office Day 1 Prediction: Shah Rukh Khan’s Biggie All Set To Open In 60-70 Crores Range This Thursday - Koimoi",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMijwFodHRwczovL3d3dy5rb2ltb2kuY29tL2JveC1vZmZpY2UvamF3YW4tYm94LW9mZmljZS1kYXktMS1wcmVkaWN0aW9uLXNoYWgtcnVraC1raGFucy1iaWdnaWUtYWxsLXNldC10by1vcGVuLWluLTYwLTcwLWNyb3Jlcy1yYW5nZS10aGlzLXRodXJzZGF5L9IBkwFodHRwczovL3d3dy5rb2ltb2kuY29tL2JveC1vZmZpY2UvamF3YW4tYm94LW9mZmljZS1kYXktMS1wcmVkaWN0aW9uLXNoYWgtcnVraC1raGFucy1iaWdnaWUtYWxsLXNldC10by1vcGVuLWluLTYwLTcwLWNyb3Jlcy1yYW5nZS10aGlzLXRodXJzZGF5L2FtcC8?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-09-05T02:25:17Z",
          "content": null
      },
      {
          "source": {
              "id": null,
              "name": "Livemint"
          },
          "author": "Livemint",
          "title": "Stock market today: What to expect from Nifty, Sensex, Bank Nifty in trade on September 5 | Mint - Mint",
          "description": "The trends on Gift Nifty also indicate a weak start for the Indian benchmark index. The Gift Nifty was trading at around 19,593 level as compared to the Nifty futures’ previous close of 19,614.",
          "url": "https://www.livemint.com/market/stock-market-news/stock-market-today-what-to-expect-from-nifty-sensex-bank-nifty-in-trade-on-september-5-11693877877444.html",
          "urlToImage": "https://www.livemint.com/lm-img/img/2023/09/05/600x338/sensex_1661846646875_1693878125034.jpg",
          "publishedAt": "2023-09-05T02:11:39Z",
          "content": "The Indian stock market is likely to open lower on Tuesday following weak global cues. The trends on Gift Nifty also indicate a weak start for the Indian benchmark index. The Gift Nifty was trading a… [+2620 chars]"
      },
      {
          "source": {
              "id": null,
              "name": "Livemint"
          },
          "author": "Livemint",
          "title": "Sanatana Dharma Remark Row: Ayodhya seer offers ₹10 cr reward for beheading Udhayanidhi Stalin | Mint - Mint",
          "description": "Ayodhya seer offers  ₹10 crore reward to behead Udhayanidhi Stalin over remarks against Sanatana Dharma.",
          "url": "https://www.livemint.com/politics/news/sanatana-dharma-remark-row-ayodhya-seer-offers-rs-10-cr-reward-for-beheading-udhayanidhi-stalin-11693878620533.html",
          "urlToImage": "https://www.livemint.com/lm-img/img/2023/09/05/600x338/stalin_1693879641908_1693879642135.jpg",
          "publishedAt": "2023-09-05T02:10:23Z",
          "content": "Sanatana Dharma Remark Row: Ayodhya seer Paramhans Acharya on Monday announced a reward of 10 crore for beheading Tamil Nadu Minister Udhayanidhi Stalin over his alleged remarks against Sanatana Dhar… [+2198 chars]"
      },
      {
          "source": {
              "id": "google-news",
              "name": "Google News"
          },
          "author": "Hindustan Times",
          "title": "Thousands stranded at Burning Man festival in Nevada desert after heavy rain - Hindustan Times",
          "description": null,
          "url": "https://news.google.com/rss/articles/CBMiiwFodHRwczovL3d3dy5oaW5kdXN0YW50aW1lcy5jb20vd29ybGQtbmV3cy90aG91c2FuZHMtc3RyYW5kZWQtYXQtYnVybmluZy1tYW4tZmVzdGl2YWwtaW4tbmV2YWRhLWRlc2VydC1hZnRlci1oZWF2eS1yYWluLTEwMTY5Mzg3NzEzNDc5NC5odG1s0gGPAWh0dHBzOi8vd3d3LmhpbmR1c3RhbnRpbWVzLmNvbS93b3JsZC1uZXdzL3Rob3VzYW5kcy1zdHJhbmRlZC1hdC1idXJuaW5nLW1hbi1mZXN0aXZhbC1pbi1uZXZhZGEtZGVzZXJ0LWFmdGVyLWhlYXZ5LXJhaW4tMTAxNjkzODc3MTM0Nzk0LWFtcC5odG1s?oc=5",
          "urlToImage": null,
          "publishedAt": "2023-09-05T02:01:30Z",
          "content": null
      },
      {
          "source": {
              "id": null,
              "name": "The Indian Express"
          },
          "author": "The Indian Express",
          "title": "Today in Politics: Stumped by special session, Sanatan row, INDIA hopes bypolls its lucky break - The Indian Express",
          "description": null,
          "url": "https://indianexpress.com/article/political-pulse/today-in-politics-india-bypolls-sanatan-dharma-row-8924861/",
          "urlToImage": null,
          "publishedAt": "2023-09-05T01:45:43Z",
          "content": null
      }
  ]
}

const Newsapi = () => {
    const[ dota ,setData] = useState([]);
  const News= () => {
    // axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=70ef16c77c204f0590de53171b89f594").then((response) => {setData(response.data.articles)} )
    setData(dummy.articles)
}
const Filtered = dota.filter((val) => {
    if(val.description != null && val.urlToImage != null){return val}
})

return (
<>

    <h1 id='fetch' >CLICK THE BUTTON BELOW TO FETCH THE LATEST NEWS</h1>
    <button onClick={News} id='but'> FETCH NEWS</button>
    
    {Filtered.map((value) => {
        return(<Card1 title={value.title.substring(0,70)}  tagline={value.description.substring(0,100)} img={value.urlToImage} url={value.url}  />)}) }
  

  </> )
}

export default Newsapi
