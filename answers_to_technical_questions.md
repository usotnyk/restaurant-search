## How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I have spent approximatelly 5 hours for planning, setting up the development environment, creating the functionality, setting layout and styling and testing the application.

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Destructuring Assignment

```javascript
const { isError, isLoading, currentCity } = this.state;
```

Arrow Functions

```javascript
<form
  onSubmit={event => this.handleSubmit(event)}
  className="rest-search-from" 
>
```

Template Literals

```javascript
sendAjaxCall(city) {
  const url = 'http://opentable.herokuapp.com/api/restaurants?per_page=100&city='
  return axios.get(`${url}${city}`)
}
```

## How would you track down a performance issue in production? Have you ever had to do this?

I would use Google Developer Tools to determine which operations take the longest time. I would then try to determine what causes the performance issues in these operations. Tools that are available for these tasks are: `Performance`, `Network`, `Debugger`, `Audits` for Performance.

## How would you improve the API that you just used?

The Open Table API allows to find restaurants by passing additional parameters, however, `area` (which was one of required fields for refined search) is not accepted. Since this is one the returned fields for each restaurants, this parameter should be added to the list of accepted parameters. I would also expand the `image_url` property to be an object so that images of various sizes could be returned.

## Please describe yourself using JSON.

```javascript
{
	"name": "Julia Sotnyk",
  "occupation": "Front End Developer",
  "coding_languages" : ["JavaScript", "CSS", "HTML", "Ruby"],
  "technologies" : ["React", "Redux", "Webpack", "Ruby on Rails", "SASS", "jQuery"],
  "gitHub_profile":  "https://github.com/usotnyk",
}
```