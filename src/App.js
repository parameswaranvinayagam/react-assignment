import React, { Fragment, useEffect, useState } from "react";
import logo from './logo.svg';
import 'antd/dist/antd.css';
import styleChanges from './index.css';
import { Layout } from 'antd';
import httpHelper from "./common/helpers/HttpHelper";


const { Header, Footer, Sider, Content } = Layout;



const useFetch = url => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchUser = async () => {


		fetch("http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=API_KEY")

			.then(

				(response) => {
					response = {
						"status": "ok",
						"totalResults": 38,
						"articles": [
							{
								"source": {
									"id": null,
									"name": "CBS Sports"
								},
								"author": "Sam Quinn",
								"title": "Lakers vs. Trail Blazers score, takeaways: LeBron, Anthony Davis have huge nights in closeout Game 5 win - CBSSports.com",
								"description": "The Lakers are headed to the second round",
								"url": "https://www.cbssports.com/nba/news/lakers-vs-trail-blazers-score-takeaways-lebron-anthony-davis-have-huge-nights-in-closeout-game-5-win/live/",
								"urlToImage": "https://sportshub.cbsistatic.com/i/r/2020/08/30/2a81bc93-ad97-4153-a91d-9ecd3e936367/thumbnail/1200x675/c273fa4c6b6329f55316f9062e1c7e8f/usatsi-14854814.jpg",
								"publishedAt": "2020-08-30T04:32:00Z",
								"content": "The Blazers made them earn it, but after losing the series opener, the Lakers are officially moving on to the second round after four straight wins. The Blazers kept up all night even without Damian … [+4197 chars]"
							},
							{
								"source": {
									"id": null,
									"name": "Billboard"
								},
								"author": "Ashley Iasimone",
								"title": "If 'Folklore' Turned You On to Taylor Swift, These Are the Deep Cuts You'll Like - Billboard",
								"description": "",
								"url": "https://www.billboard.com/articles/columns/pop/9438687/songs-like-taylor-swift-folklore",
								"urlToImage": "https://static.billboard.com/files/2020/07/03-taylor-swift-cr-Beth-Garrabrant-press-photo-2020-billboard-1548-1595547189-1024x677.jpg",
								"publishedAt": "2020-08-30T03:41:47Z",
								"content": "So, maybe you were never into Taylor Swift. But you were intrigued by Folklore, and somehow it's become your quarantine soundtrack.\r\nWould you like the rest of her discography? Where should you begin… [+8833 chars]"
							},
							{
								"source": {
									"id": "google-news",
									"name": "Google News"
								},
								"author": null,
								"title": "Big wrecks and highlights from the Coke Zero 400 at Daytona International Speedway | NASCAR - NASCAR",
								"description": null,
								"url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9NFhXdzlOdHluWWvSAQA?oc=5",
								"urlToImage": null,
								"publishedAt": "2020-08-30T03:11:56Z",
								"content": null
							},
							{
								"source": {
									"id": null,
									"name": "Vulture"
								},
								"author": "Charu Sinha",
								"title": "Bella Thorne Apologizes to OnlyFans Users - Vulture",
								"description": "She wrote that she intended to “normalize the stigmas” around sex work.",
								"url": "http://www.vulture.com/2020/08/bella-thorne-apologizes-to-onlyfans-users.html",
								"urlToImage": "https://pyxis.nymag.com/v1/imgs/c44/105/9955ea4d19e0090d20e43badd4ce83efd8-bella-thorne.1x.rsocial.w1200.jpg",
								"publishedAt": "2020-08-30T02:45:00Z",
								"content": "Bella Thorne responded to the controversy over her OnlyFans debut, apologizing and explaining that she had intended to advocate for something bigger than [herself]. Thorne, who made over $2 million o… [+2452 chars]"
							},
							{
								"source": {
									"id": "google-news",
									"name": "Google News"
								},
								"author": null,
								"title": "Actor Chadwick Boseman dead at 43 - ABC News",
								"description": null,
								"url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9QlMzT29QQ0pRMVHSAQA?oc=5",
								"urlToImage": null,
								"publishedAt": "2020-08-30T02:04:06Z",
								"content": null
							},
							{
								"source": {
									"id": null,
									"name": "Entertainment Tonight"
								},
								"author": "Liz Calvario‍",
								"title": "Kourtney Kardashian and Scott Disick Spotted on Dinner Date As Sofia Richie Dines at Same Location - Entertainment Tonight",
								"description": "The three were all photographed at Nobu in Malibu on Friday.",
								"url": "https://www.etonline.com/kourtney-kardashian-and-scott-disick-spotted-on-dinner-date-as-sofia-richie-dines-at-same-location",
								"urlToImage": "https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2020-08/mega697118_011.jpg?itok=NLUmVzWk",
								"publishedAt": "2020-08-30T01:10:55Z",
								"content": "Kourtney Kardashian and Scott Disick continue to fuel rumors that they've reignited their romance. The former couple was photographed having a dinner date at Nobu in Malibu on Friday night, the same … [+2063 chars]"
							},
							{
								"source": {
									"id": "fox-news",
									"name": "Fox News"
								},
								"author": "Caitlin McFall",
								"title": "Banksy’s overloaded migrant rescue boat saved by Italian government - Fox News",
								"description": "The Italian government stepped in Saturday to help a migrant rescue boat funded by the British street artist Banksy, which was overloaded with people and stranded in the Mediterranean ocean.",
								"url": "https://www.foxnews.com/world/banksys-migrant-rescue-boat-italian",
								"urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2020/08/Louise-Michel-Ship-AP-2.jpg",
								"publishedAt": "2020-08-30T00:11:50Z",
								"content": "The Italian government stepped in Saturday to help an overloaded, stranded migrant rescue boat, funded by the British street artist Banksy, in the Mediterranean Ocean.\r\nThe Italian coast guard took o… [+2451 chars]"
							},
							{
								"source": {
									"id": "google-news",
									"name": "Google News"
								},
								"author": null,
								"title": "Shaquille O'Neal Asks Elon Musk To Make a Big Boy Tesla - Torque News",
								"description": null,
								"url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9VmprekNrWGQ2MWPSAQA?oc=5",
								"urlToImage": null,
								"publishedAt": "2020-08-29T23:56:29Z",
								"content": null
							},
							{
								"source": {
									"id": null,
									"name": "ESPN"
								},
								"author": "Kevin Arnovitz",
								"title": "NBA playoffs - The Milwaukee Bucks' title bid now has a larger purpose - ESPN",
								"description": "The Bucks' postseason journey has evolved into something bigger than the quest for 16 wins and a trophy.",
								"url": "https://www.espn.com/nba/story/_/id/29740896/nba-playoffs-milwaukee-bucks-title-bid-now-larger-purpose",
								"urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0829%2Fr738089_1296x729_16%2D9.jpg",
								"publishedAt": "2020-08-29T23:51:24Z",
								"content": "When the Milwaukee Bucks left their hotel on Wednesday to ride over to AdventHealth Arena, they were an elite NBA team from a small market looking to complete a commonplace task: dispatching a No. 8 … [+8369 chars]"
							},
							{
								"source": {
									"id": "cbs-news",
									"name": "CBS News"
								},
								"author": "William Harwood",
								"title": "SpaceX to attempt historic back-to-back Falcon 9 flights - CBS News",
								"description": "Two Florida launches nine hours apart, plus a polar orbit, mark new records for SpaceX",
								"url": "https://www.cbsnews.com/news/spacex-attempts-historic-back-to-back-falcon-9-flights-sunday/",
								"urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2020/08/29/6c58feef-c864-4686-b67e-6350a12149ff/thumbnail/1200x630/d802f1dbae30d0b9c0c4ab04fc5cdb62/082920-f9-file.jpg",
								"publishedAt": "2020-08-29T23:42:00Z",
								"content": "SpaceX is gearing up for back-to-back launches on Sunday just nine hours apart, the shortest span between two Florida orbit-class flights since 1966. The launches are a dramatic bid to put 60 more St… [+4712 chars]"
							},
							{
								"source": {
									"id": "politico",
									"name": "Politico"
								},
								"author": "Kelly Hooper",
								"title": "Trump to visit Kenosha in wake of police protests - POLITICO",
								"description": "White House spokesperson Judd Deere confirmed the president will meet Tuesday with law enforcement and survey damage from recent violence.",
								"url": "https://www.politico.com/news/2020/08/29/trump-protests-kenosha-visit-404965",
								"urlToImage": "https://static.politico.com/09/92/abe934e74934b8c1b25d377b7fe5/200829-trump-ap-773.jpg",
								"publishedAt": "2020-08-29T23:32:00Z",
								"content": "Following Trump's comments, White House spokesperson Judd Deere confirmed the president will visit Kenosha on Tuesday to meet with law enforcement and survey damage from recent violence, according to… [+2127 chars]"
							},
							{
								"source": {
									"id": null,
									"name": "Atlanta Journal Constitution"
								},
								"author": "Shaddi Abusaid",
								"title": "UPDATE: 1-year-old located, 2 arrested after Chamblee kidnapping - Atlanta Journal Constitution",
								"description": "",
								"url": "https://www.ajc.com/news/breaking-amber-alert-issued-after-1-year-old-taken-from-mother-at-gunpoint/UKYRCJ2JEBBY5OLCTQJD73CAOE/",
								"urlToImage": "https://www.ajc.com/resizer/ORCnU4dsAz_xCTX5wtiYbRvi0yw=/1200x630/cloudfront-us-east-1.images.arcpublishing.com/ajc/J7DMDHFFSVERVP7WJANR4SJ6FQ.jpg",
								"publishedAt": "2020-08-29T23:26:12Z",
								"content": null
							},
							{
								"source": {
									"id": "google-news",
									"name": "Google News"
								},
								"author": null,
								"title": "Obama counseled some NBA players amid multi-day protest - CNN",
								"description": null,
								"url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Z0IwTWxWODFfVUHSAQA?oc=5",
								"urlToImage": null,
								"publishedAt": "2020-08-29T23:07:48Z",
								"content": null
							},
							{
								"source": {
									"id": "google-news",
									"name": "Google News"
								},
								"author": null,
								"title": "'We're really in a deep hole,' says Kansas City Fed President on the economy - Yahoo Finance",
								"description": null,
								"url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9d28wY0EtenQtYmPSAQA?oc=5",
								"urlToImage": null,
								"publishedAt": "2020-08-29T22:47:54Z",
								"content": null
							},
							{
								"source": {
									"id": "independent",
									"name": "Independent"
								},
								"author": "Oliver O'Connell",
								"title": "Trump tells Hurricane Laura emergency responders to sell his autograph on eBay for $10k - The Independent",
								"description": "<p>President surveys damage after storm sweeps through Louisiana leaving 16 people dead and hundreds of thousands without power or water</p>",
								"url": "https://www.independent.co.uk/news/world/americas/us-politics/donald-trump-hurricane-laura-first-responders-autograph-ebay-louisiana-a9695826.html",
								"urlToImage": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/08/29/21/donald-trump-lake-charles-louisiana-hurricane-laura.jpg",
								"publishedAt": "2020-08-29T21:01:00Z",
								"content": "President Donald Trump travelled to Lake Charles, Louisiana, on Saturday to inspect damage from Hurricane Laura and attend a briefing on the impact of the disaster and the federal response.\r\nAfter ta… [+3212 chars]"
							},
							{
								"source": {
									"id": null,
									"name": "MarketWatch"
								},
								"author": "MarketWatch",
								"title": "3 things to know about Apple’s stock split - MarketWatch",
								"description": "",
								"url": "https://www.marketwatch.com/story/3-things-to-know-about-apples-stock-split-2020-08-29-1710308",
								"urlToImage": "https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png",
								"publishedAt": "2020-08-29T21:00:00Z",
								"content": "Apple Inc.s stock price will appear quite a bit lower Monday morning, but investors shouldnt fret. See full story.\r\nWhat the Federal Reserve inflation policy means for your retirement savings\r\nLow in… [+777 chars]"
							},
							{
								"source": {
									"id": null,
									"name": "CNBC"
								},
								"author": "Noah Higgins-Dunn",
								"title": "China tightens tech export controls potentially jeopardizing TikTok deal, reports say - CNBC",
								"description": "An updated export rule from China could allow the country to complicate TikTok's sale in the U.S., according to a Wall Street Journal report published on Saturday.",
								"url": "https://www.cnbc.com/2020/08/29/china-tightens-tech-export-controls-jeopardizing-tiktok-deal-reports-say.html",
								"urlToImage": "https://image.cnbcfm.com/api/v1/image/106646093-1596511482925-gettyimages-1227893145-363736034_1-4.jpeg?v=1596540065",
								"publishedAt": "2020-08-29T20:51:00Z",
								"content": "An updated export rule from China could jeopardize the sale of TikTok's  U.S. operations, according to reports published Saturday in The Wall Street Journal and The New York Times. \r\nAccording to the… [+1080 chars]"
							}
						]
					};

					if (response) {

						const data = response.articles;

						debugger;


						console.log(data);//alert(insight.getCount);
						//list[0].gradeName
						setData(data);
					}

				}
			);

		setLoading(false);
	};

	useEffect(() => {
		fetchUser();
	}, []);

	return { data, loading };
};


export default function App(props) {
	const { data, loading } = useFetch('https://api.randomuser.me/');


	function handleScroll(event) {
		var heightBound = window.height * 0.8
		if (heightBound > window.scrollY) {
			// Probably you want to load new cards?
			alert('...');
		}
	}


	return (
		<Layout >
			<Header>Header</Header>

			{loading ? (
				<div>Loading...</div>
			) : (
					data ?

						<ul className="listItem" >
							{data.map((list) => {


								return list.description ? (<li>
									<div className="parentDiv">
										<div className="leftContent">
											<img className="imgStyle" src={list.urlToImage} />
										</div>
										<div className="rightContent">
											<div className="desc">{list.description}</div>
											<p className="contentP">
												{list.content}
											</p>
											<p className="contentP">
												<a href='#' >More Details</a>
											</p>
										</div>
									</div>
								</li>) : ''
							})}
						</ul>

						: ''
				)}
		</Layout>
	);
}

