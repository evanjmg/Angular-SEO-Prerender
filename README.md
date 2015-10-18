# Make Angular SEO friendly with Prerender and Node.js
See the Tutorial here to learn how it all works: TBA
This is PART 1 - How to make Angular work with Prerender.io in Node.js 
for PART 2 see Prerender Server Repo link here - [here](https://github.com/prerender/prerender)
## Setup
In terminal, run
<code> git clone git@github.com:evanjmg/Angular-SEO-Prerender.git </code>
<code> cd /angular-seo-prerender
<code> npm install </code>
<p></p>
<code> bower install</code>

<code> node server.js </code>
## Continue onto Part 2 then comeback
go to this [link](https://github.com/prerender/prerender), download, setup and run this separate server on a different port
## Check if it works
Go to: http://localhost:8000/login?_escaped_fragment_=
Right click view page source, and if this text: 
'If this shows with escape_fragment, then it works!' is visible in the div then you successfully setup SEO friendly pages for Angular, all locally :).
