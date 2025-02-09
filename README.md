# Say byebye to AI with ByeBAI.
Search engine to remove AI search results. Made for the Royal Hackaway 8 hackathon.

## Inspiration
Why get rid of AI, it does my homework !?
Whilst AI has its uses, it tends to generate specific types of pages that seem useful but are actually pretty boring and uninformative.
Google filters by quality, not AI; this allows LLM's to generate pages that appeal to the algorithm rather than quality posts.

## What it does
Webpage that gets search results from google, and checks it against cached or anthropic AI results. Checking not just if it is AI generated but checking the format and content. 
We check for archetypes which chatbots tend to produce, chatbots are constrained by google eet format so we just have to analyse the archetype or style used to check if the content is actually useful or AI slop.
If the page is detected to be AI, a little warning is displayed next to the webpage url.

## Potential problems
> Dead internet theory -> Cant directly check to see if a website is AI generated
> User voting is not ideal -> People are lazy and a smaller website can get lost very easily. Website may change after voting as well.
> This archetype approach has some issues but works well as websites tend to be formulaic to match google algo policies.

## How we built it
![Alt text](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/259/857/datas/original.png)
__Architecture Diagram__

> 1. We call the google API with the search query to get the results. (Initially wanted to do a chrome extension but that is a BIG no no).
> 2. Call server with list of URLs
> 3. Use mongoDB atlas as a cache of recently seen URLs, makes more performant
> 4. IF unseen, a web scraper scrapers a 1000 lines of display content and then feeds it into a model 
> 5. Server returns list of URLs

## Accomplishments that we're proud of
> 1. Works with relatively good accuracy
> 2. Gets some false positives, but these tend to be well known sites with similar archetypes, and the ai warning is easy to ignore.

## What's next for ByeBAI
> DNS like architecture for checking domains, perhaps with white and blacklists reviewed by humans
> Switching db to redis and using caching more efficiently
> Training models
