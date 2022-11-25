# Weather Glitz - Weather Glitz Web Application.

## Table of contents

- [Overview](#overview)
  - [Screenshot](./assets/screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview
### Weather Glitz...a web application that is used to get the current weather condition of any location around the world. 

### Screenshot
![712AA5DC-74EB-408E-B10F-3130307BDDB5_1_201_a](https://user-images.githubusercontent.com/93778975/204041029-e701d49d-b4ed-4a63-bf42-b3733ea83d53.jpeg)
![7C98D846-62A7-4F82-9D8F-7E04C5AE9EEE_1_201_a](https://user-images.githubusercontent.com/93778975/204057698-7b8794f1-6131-43da-b0f3-b950184f28d3.jpeg)


### Links

- Solution URL: (https://github.com/Wizzy-05/Weather-Glitz)
- Live Site URL: (https://weatherglitz.netlify.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React js](https://beta.reactjs.org/) - JS library
- [Accu Weather Api]

### Some Nice Stuffs

```JS
    const updateCity = async (city) => {

        const cityId = await handleFetchCityId(city);
        const cityWeather = await handleFetchCityWeather(cityId.Key);

        return {
            cityId:cityId,
            cityWeather:cityWeather
        }
    }
```
```css
   .inner-first>.basic {
     width: 85%;
     display: flex;
     flex-direction: row;
     align-items: center;
     gap: 5%;
   }
```
```JSX
     <div className="two">
         <div className="inner-two">
             {
                 Object.values(suggestions).map((location, index) => {
                     return (
                         <p key={index} onClick={() => handleSuggestion(location)}> {location} </p>
                     )
                 })
             }
         </div>
     </div>
```



### Continued development

- Css Grid
- Sass functions
- React js
- Sass
- Node js
- Express js


### Useful resources

- [Accu Weather Api Docs](https://developer.accuweather.com/): This helped me while working with Fetching data from an API. I'll Like to work with it in upcoming projects.

## Author
- Github - [@Wizzy-05](https://github.com/Wizzy-05)
- Twitter - [@ahuzi_wisdom](https://twitter.com/ahuzi_wisdom)


## Acknowledgments
I really appreciate Harry @OpeAbidemi.


