# BOOTNETWORK APP

[![stars - readme-generator](https://img.shields.io/github/stars/melissakinsey/readme-generator?style=social)](https://github.com/melissakinsey/readme-generator)
[![forks - readme-generator](https://img.shields.io/github/forks/melissakinsey/readme-generator?style=social)](https://github.com/melissakinsey/readme-generator)

- [Description](##DESCRIPTION)
- [Contributors](##CONTRIBUTORS)
- [Installation](##SOURCE_CODE_&_DEMO)
- [Usage](##Usage)
- [Features](##Features)
- [Technical Specs](##Technical_Specs)
- [Lessons Learned](##Lessons_Learned)
- [Contributions](##Contributions)

## DESCRIPTION

BootNetwork helps bootcamp grads find other bootcamp grads through GitHub. You can search for people who graduated from your bootcamp or from other top bootcamps. Search for developers by language or platform (such as Python or AWS), and check out their repos to see what they're building. Search by company and city to see who's working in tech near you. Or find archived repos of deceased grads who attempted to deploy with Heroku. (R.I.P., my friends!)

This app was the final group project for the Columbia University Engineering Full-Stack Boot Camp (October 2020-April 2021).

## CONTRIBUTORS

The four students listed below collaborated on this project. Ping us with questions or project feedback:

### Lindsay Bowen

![Lindsey-Bowen](./client/src/assets/lindseybowen.png)

- GitHub: [@lindseybowen](https://linkhttps://github.com/lindseybowen)
- Email: [lindseyjbowen@gmail.com](mailto:lindseyjbowen@gmail.com)
- LinkedIn: [linkedin.com/lindseyjbowen](https://www.linkedin.com/in/lindseyjbowen/)

### Margaret Elson

![Margaret-Elson](./client/src/assets/margaretelson.png)

- GitHub: [@margaretelson](https://https://github.com/margaretelson)
- Email: [margaret.a.elson@gmail.com](mailto:margaret.a.elson@gmail.com)
- LinkedIn: [linkedin.com/margaretelson](https://www.linkedin.com/in/margaret-elson-b59627161/)

### Mateo Ferreira

![Mateo-Ferreira](./client/src/assets/mateoferreira.png)

- GitHub: [@Mf948](https://github.com/Mf948)
- Email: [mateof948@gmail.com](mailto:mateof948@icloud.com)
- LinkedIn: [linkedin.com/xferreiramatt](https://www.linkedin.com/in/xferreiramatt/)

### Melissa Kinsey

![Melissa-Kinsey](./client/src/assets/melissakinsey.png)

- GitHub: [@melissakinsey](https://melissakinsey.github.io/portfolio/)
- Twitter: [@KinseyMelissa](https://twitter.com/KinseyMelissa)
- Email: [kinsey.melissa@gmail.com](mailto:kinsey.melissa@gmail.com)
- LinkedIn: [linkedin.com/melissajaynekinsey](https://www.linkedin.com/in/melissajaynekinsey/)

## SOURCE CODE & DEMO

The [code for this app](https://github.com/margaretelson/BootNet) is housed on GitHub.

### User Story

_AS A_ boot camp graduate
_I WANT TO_ network with other boot camp grads
_SO I CAN_ get an edge in the job market.

### Usage

To use this app, create an account. Then log in with your securely encrypted username and password. Search GitHub users by bootcamp, by first or last name (or both), by city, or by company. Then save profile data for users you'd like to follow up with.

A few tips for effective searching:

- Search by first or last name. If you use both, put the name in quotation marks, as in "Niraj Patel."
- Execute your search using "bootcamp" and "boot camp."
- Use booleans to refine your search, as in these examples:
  - "Palo Alto" AND "boot camp" OR bootcamp
  - "Palo Alto" OR "Menlo Park" OR "Redwood City" AND "boot camp" OR bootcamp
  - Amazon OR AWS AND "Boris Volkov"

To see how the app works, watch this quick [video demo](https://youtu.be/xxxx).

## FEATURES

This app makes it easy for user to search GitHub for useful info on your bootcamp counterparts:

SEARCH BY BOOTCAMP

- Search for graduates of your own bootcamp
- Search for graduates of other top bootcamps
- Look at the bootcamps' own GitHub repos

SEARCH BY NAME

- Look up a bootcamp grad from your cohort
- Look up people from other bootcamps
- Search for anyone with a GitHub account
- Look up your intructor and TAs! We're talkin' to you, @warriorofzarona!

SEARCH BY CITY

- Search your city for fellow bootcamp graduates
- Search your city for GitHub users in general
- Search your city for developers working with a given technology
- Search your city for developers working at a particular company

SEARCH BY COMPANY

- See which companies employ bootcamp grads
- Search a particular company to see which bootcamp grads work there

SEARCH BY LANGUAGE OR TOOL

- Search for bootcamp grads who are using, say, React
- Find iOS developers or AWS network engineers

SEARCH USING BOOLEANS (as described under "Usage," above)

Regardless of how you search, the app will return a list of accounts for both people and organizations. They're listed in the order in which they signed up on GitHub.

![BootNetwork UI](./client/src/assets/results-ui.png)

## TECHNICAL SPECS

- Built with React
- Requires XX authentication
  If the authenticated user is authenticated through basic authentication or OAuth with the user scope, then the response lists public and private profile information.

If the authenticated user is authenticated through OAuth without the user scope, then the response lists only public profile information.

- Uses MongoDB to store database records
- Uses npm XXX
- Styled with HTML/CSS and React-Bootstrap
- Calls data from the [GitHub API](https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps#users).

![GitHub documentation](./client/src/assets/github-endpoints.png)

## LESSONS LEARNED

- Lorem ipsum
- Lorem ipsum
- Lorem ipsum
- Lorem ipsum

## TECHNOLOGIES

### GitHub API

A GET request to the GitHub API calls the "users" endpoint (https://api.github.com/users) to return data, as in the response below:

![GitHub API sample response](/client/src/assets/sample-response.png)

### MongoDB

### React-Bootstrap

### Passport

![Passport logo](/client/src/assets/passport.png)

## INTEGRATIONS

In addition to our app, we created other ways for people to interact with BootNet.

###LinkedIn Page
We created [a BootNet page on LinkedIn](https://www.linkedin.com/company/bootnetwork/?viewAsMember=true) to raise awareness and encourage people to check out our app.

![LinkedIn page for BootNetwork](/client/src/assets/linkedin.png)

###Slack Channel
We also created a ![Slack channel](/client/src/assets/slack.png) @BootNetwork.

## FUTURE DIRECTIONS

In the future, we'd like to develop a more sophisticated dashboard. Mateo developed a UI that could eventually be programmed to show

!(Future developments UI)[/client/src/assets/future-dev.png]

## CREDITS

### People Credits

Credit is due to our fabulous Columbia University Boot Camp instructor, teaching assistants, tutors, and staff.

### Image Credits

- Header Image: Adobe Stock/PCH.Vector

## LICENSE (This makes it official)

Copyright (c) 2020, BootNetwork

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
