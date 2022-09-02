import React, { useState, useEffect } from 'react'
import myIcons1 from "../icons/1.svg"
import myIcons2 from "../icons/2.svg"
import myIcons3 from "../icons/3.svg"
import myIcons4 from "../icons/4.svg"
import myIcons5 from "../icons/5.svg"
import myIcons6 from "../icons/6.svg"
import myIcons7 from "../icons/7.svg"
import myIcons8 from "../icons/8.svg"
import myIcons11 from "../icons/11.svg"
import myIcons12 from "../icons/12.svg"
import myIcons13 from "../icons/13.svg"
import myIcons14 from "../icons/14.svg"
import myIcons15 from "../icons/15.svg"
import myIcons16 from "../icons/16.svg"
import myIcons17 from "../icons/17.svg"
import myIcons18 from "../icons/18.svg"
import myIcons19 from "../icons/19.svg"
import myIcons20 from "../icons/20.svg"
import myIcons21 from "../icons/21.svg"
import myIcons22 from "../icons/22.svg"
import myIcons23 from "../icons/23.svg"
import myIcons24 from "../icons/24.svg"
import myIcons25 from "../icons/25.svg"
import myIcons26 from "../icons/26.svg"
import myIcons27 from "../icons/27.svg"
import myIcons30 from "../icons/30.svg"
import myIcons31 from "../icons/31.svg"
import myIcons32 from "../icons/32.svg"
import myIcons33 from "../icons/33.svg"
import myIcons34 from "../icons/34.svg"
import myIcons35 from "../icons/35.svg"
import myIcons36 from "../icons/36.svg"
import myIcons37 from "../icons/37.svg"
import myIcons38 from "../icons/38.svg"
import myIcons39 from "../icons/39.svg"
import myIcons40 from "../icons/40.svg"
import myIcons41 from "../icons/41.svg"
import myIcons42 from "../icons/42.svg"
import myIcons43 from "../icons/43.svg"





const Main = () => {


    const keymain = 'Dpwol6HM9xd070KVCF4MWBLx3yl3EmdQ';

    const [main, setMain] = useState({
        style: 'main',
        background: ''
    });

    const [basic, setBasic] = useState({
        degree: '',
        location: '',
        country: '',
        day: '',
        icon: myIcons1,
        text: '',
        cloudy: ''
    })


    const handleIcon = (iconWeather) => {
        switch (iconWeather) {
            case 1:
                setBasic((basic) => {
                    return{...basic, icon:myIcons1}
                })
                break;
            case 2:
                setBasic((basic) => {
                    return{...basic, icon:myIcons2}
                })
                break;
            case 3:
                setBasic((basic) => {
                    return{...basic, icon:myIcons3}
                })
                break;
            case 4:
                setBasic((basic) => {
                    return{...basic, icon:myIcons4}
                })
                break;
            case 5:
                setBasic((basic) => {
                    return{...basic, icon:myIcons5}
                })
                break;  
                
            case 6:
                setBasic((basic) => {
                    return{...basic, icon:myIcons6}
                })
                break;
            case 6:
                setBasic((basic) => {
                    return{...basic, icon:myIcons6}
                })
                break;
            case 7:
                setBasic((basic) => {
                    return{...basic, icon:myIcons7}
                })
                break;
            case 8:
                setBasic((basic) => {
                    return{...basic, icon:myIcons8}
                })
                break;
            case 11:
                setBasic((basic) => {
                    return{...basic, icon:myIcons11}
                })
                break;
            case 12:
                setBasic((basic) => {
                    return{...basic, icon:myIcons12}
                })
                break;
            case 13:
                setBasic((basic) => {
                    return{...basic, icon:myIcons13}
                })
                break;
            case 14:
                setBasic((basic) => {
                    return{...basic, icon:myIcons14}
                })
                break;
            case 15:
                setBasic((basic) => {
                    return{...basic, icon:myIcons15}
                })
                break;
            case 16:
                setBasic((basic) => {
                    return{...basic, icon:myIcons16}
                })
                break;
            case 17:
                setBasic((basic) => {
                    return{...basic, icon:myIcons17}
                })
                break;
            case 18:
                setBasic((basic) => {
                    return{...basic, icon:myIcons18}
                })
                break;
            case 19:
                setBasic((basic) => {
                    return{...basic, icon:myIcons19}
                })
                break;
            case 20:
                setBasic((basic) => {
                    return{...basic, icon:myIcons20}
                })
                break;
            case 21:
                setBasic((basic) => {
                    return{...basic, icon:myIcons21}
                })
                break;
            case 22:
                setBasic((basic) => {
                    return{...basic, icon:myIcons22}
                })
                break;
            case 23:
                setBasic((basic) => {
                    return{...basic, icon:myIcons23}
                })
                break;
            case 24:
                setBasic((basic) => {
                    return{...basic, icon:myIcons24}
                })
                break;
            case 25:
                setBasic((basic) => {
                    return{...basic, icon:myIcons25}
                })
                break;
            case 26:
                setBasic((basic) => {
                    return{...basic, icon:myIcons26}
                })
                break;
            case 27:
                setBasic((basic) => {
                    return{...basic, icon:myIcons27}
                })
                break;
            case 30:
                setBasic((basic) => {
                    return{...basic, icon:myIcons30}
                })
                break;
            case 31:
                setBasic((basic) => {
                    return{...basic, icon:myIcons31}
                })
                break;
            case 32:
                setBasic((basic) => {
                    return{...basic, icon:myIcons32}
                })
                break;
            case 33:
                setBasic((basic) => {
                    return{...basic, icon:myIcons33}
                })
                break;
            case 34:
                setBasic((basic) => {
                    return{...basic, icon:myIcons34}
                })
                break;
            case 35:
                setBasic((basic) => {
                    return{...basic, icon:myIcons35}
                })
                break;
            case 36:
                setBasic((basic) => {
                    return{...basic, icon:myIcons36}
                })
                break;
            case 37:
                setBasic((basic) => {
                    return{...basic, icon:myIcons37}
                })
                break;
            case 38:
                setBasic((basic) => {
                    return{...basic, icon:myIcons38}
                })
                break;
            case 39:
                setBasic((basic) => {
                    return{...basic, icon:myIcons39}
                })
                break;
            case 40:
                setBasic((basic) => {
                    return{...basic, icon:myIcons40}
                })
                break;
            case 41:
                setBasic((basic) => {
                    return{...basic, icon:myIcons41}
                })
                break;
            case 42:
                setBasic((basic) => {
                    return{...basic, icon:myIcons42}
                })
                break;
            case 43:
                setBasic((basic) => {
                    return{...basic, icon:myIcons43}
                })
                break;                    
            default:
                setBasic((basic) => {
                    return{...basic, icon:myIcons12}
                })
            break;
        }
    }


    const [city, setCity] = useState('');

    const [suggestions, setSuggestions] = useState({
        locationOne: 'Manchester',
        locationTwo: 'Dubai',
        locationThree: 'New York',
        locationFour: 'Lagos'
    });


    const handleFetchCityId =  async (city) =>{

        const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        const query = `?apikey=${keymain}&q=${city}`;

        const response = await fetch(base + query);

        const dataOne = await response.json();

        return dataOne[0];
    }

    const handleFetchCityWeather = async (id) => {

        
        const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
        const query = `${id}?apikey=${keymain}`;

        const response = await fetch(base + query);

        const dataTwo = await response.json();

        return dataTwo[0];
    }


    const updateCity = async (city) => {

        const cityId = await handleFetchCityId(city);
        const cityWeather = await handleFetchCityWeather(cityId.Key);

        return {
            cityId:cityId,
            cityWeather:cityWeather
        }
    }

    const handleMainSearch = (e) => {

        e.preventDefault();

        updateCity(city)
        .then((data) => {
            

            const basicTemps = data.cityWeather.Temperature;
            const weatherText = data.cityWeather.WeatherText;

            setCity('');

           
            localStorage.setItem('City', city)


            const day = new Date(data.cityWeather.LocalObservationDateTime).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"});
            const some = data.cityWeather.LocalObservationDateTime;
            const timeValue = some.slice(11,16);
            const completeDay = `${timeValue} - ${day}`;


            setBasic((basic) => {
                return{
                    degree: basicTemps.Metric.Value,
                    location:data.cityId.AdministrativeArea.EnglishName,
                    country:data.cityId.Country.EnglishName,
                    icon: handleIcon(data.cityWeather.WeatherIcon),
                    text: data.cityWeather.WeatherText,
                    day: completeDay,
                    cloudy:data.cityWeather.Temperature.Imperial.Value
                }
            });


            if (data.cityWeather.IsDayTime) {
                if (data.cityWeather.WeatherText.includes('loudy')) {
                    setMain((main) => {
                        return {...main, background:'cloudy'}
                    })
                }else if (data.cityWeather.WeatherText.includes('unny') || data.cityWeather.WeatherText.includes('Hot')) {
                    setMain((main) => {
                        return {...main, background:'sunny'}
                    })
                }else if (data.cityWeather.WeatherText.includes('ain') || data.cityWeather.WeatherText.includes('Cold')) {
                    setMain((main) => {
                        return {...main, background:'rainy-day'}
                    })
                }else if (data.cityWeather.WeatherText.includes('Dreary') || data.cityWeather.WeatherText.includes('vercast')) {
                    setMain((main) => {
                        return {...main, background:'overcast'}
                    })
                }else if (data.cityWeather.WeatherText.includes('fog')) {
                    setMain((main) => {
                        return {...main, background:'mist'}
                    })
                }else if (data.cityWeather.WeatherText.includes('Thunderstorm')) {
                    setMain((main) => {
                        return {...main, background:'T-Storms'}
                    })
                }else if (data.cityWeather.WeatherText.includes('Showers')) {
                    setMain((main) => {
                        return {...main, background:'Showers'}
                    })
                }else if (data.cityWeather.WeatherText.includes('Snow') || data.cityWeather.WeatherText.includes('Sleet') ) {
                    setMain((main) => {
                        return {...main, background:'snowy-day'}
                    })
                } else if (data.cityWeather.WeatherText.includes('Ice')) {
                    setMain((main) => {
                        return{...main, background:'hail' }
                    })
                } else if (data.cityWeather.WeatherText.includes('Windy')) {
                    setMain((main) => {
                        return{...main, background:'windy' }
                    })
                } else {
                    setMain(()=> {
                        return{...main, background:'day'}
                    })
                }
            }else{
              if (data.cityWeather.WeatherText.includes('Thunderstorm')) {
                    setMain(main => {
                        return { ...main, background: 'T-Storms' }
                    });
                }else if (data.cityWeather.WeatherText.includes('loudy')) {
                    setMain(main => {
                        return { ...main, background: 'cloudy-night' }
                    });
                }else if (data.cityWeather.WeatherText.includes('ain')) {
                    setMain(main => {
                        return { ...main, background: 'rainy' }
                    });
                }else if (data.cityWeather.WeatherText.includes('Hazy Moonlight')) {
                    setMain(main => {
                        return { ...main, background: 'Haze' }
                    });
                }else if (data.cityWeather.WeatherText.includes('Snow')) {
                    setMain(main => {
                        return { ...main, background: 'snowy-night' }
                    });
                }else if (data.cityWeather.WeatherText.includes('torm')) {
                    setMain(main => {
                        return { ...main, background: 'stormy' }
                    });
                }else if (data.cityWeather.WeatherText.includes('Mist') || data.cityWeather.WeatherText.includes('Fog') ) {
                    setMain(main => {
                        return { ...main, background: 'mist-night' }
                    });
                }else{
                    setMain(main => {
                        return { ...main, background: 'night' }
                    });
                }
            }

        })
        .catch(err => {
            console.log(err, "Wahalaaaa");
        });
    }


    const handleSuggestion = (location) => {

        updateCity(location)
        .then((data) => {
            console.log(data);

            const basicTemps = data.cityWeather.Temperature;
            const weatherText = data.cityWeather.WeatherText;


            const day = new Date(data.cityWeather.LocalObservationDateTime).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"});
            const some = data.cityWeather.LocalObservationDateTime;
            const timeValue = some.slice(11,16);
            const completeDay = `${timeValue} - ${day}`;


            setBasic((basic) => {
                return{
                    degree: basicTemps.Metric.Value,
                    location:data.cityId.AdministrativeArea.EnglishName,
                    country:data.cityId.Country.EnglishName,
                    icon: handleIcon(data.cityWeather.WeatherIcon),
                    text: data.cityWeather.WeatherText,
                    day: completeDay,
                    cloudy:data.cityWeather.Temperature.Imperial.Value
                }
            });


            if (data.cityWeather.IsDayTime) {
                if (data.cityWeather.WeatherText.includes('loudy')) {
                    setMain((main) => {
                        return {...main, background:'cloudy'}
                    })
                }else if (data.cityWeather.WeatherText.includes('unny') || data.cityWeather.WeatherText.includes('Hot')) {
                    setMain((main) => {
                        return {...main, background:'sunny'}
                    })
                }else if (data.cityWeather.WeatherText.includes('ain') || data.cityWeather.WeatherText.includes('Cold')) {
                    setMain((main) => {
                        return {...main, background:'rainy-day'}
                    })
                }else if (data.cityWeather.WeatherText.includes('Dreary') || data.cityWeather.WeatherText.includes('vercast')) {
                    setMain((main) => {
                        return {...main, background:'overcast'}
                    })
                }else if (data.cityWeather.WeatherText.includes('fog')) {
                    setMain((main) => {
                        return {...main, background:'mist'}
                    })
                }else if (data.cityWeather.WeatherText.includes('Thunderstorm')) {
                    setMain((main) => {
                        return {...main, background:'T-Storms'}
                    })
                }else if (data.cityWeather.WeatherText.includes('Showers')) {
                    setMain((main) => {
                        return {...main, background:'Showers'}
                    })
                }else if (data.cityWeather.WeatherText.includes('Snow') || data.cityWeather.WeatherText.includes('Sleet') ) {
                    setMain((main) => {
                        return {...main, background:'snowy-day'}
                    })
                } else if (data.cityWeather.WeatherText.includes('Ice')) {
                    setMain((main) => {
                        return{...main, background:'hail' }
                    })
                } else if (data.cityWeather.WeatherText.includes('Windy')) {
                    setMain((main) => {
                        return{...main, background:'windy' }
                    })
                } else {
                    setMain(()=> {
                        return{...main, background:'day'}
                    })
                }
             }else{
              if (data.cityWeather.WeatherText.includes('Thunderstorm')) {
                    setMain(main => {
                        return { ...main, background: 'T-Storms' }
                    });
                }else if (data.cityWeather.WeatherText.includes('loudy')) {
                    setMain(main => {
                        return { ...main, background: 'cloudy-night' }
                    });
                }else if (data.cityWeather.WeatherText.includes('ain')) {
                    setMain(main => {
                        return { ...main, background: 'rainy' }
                    });
                }else if (data.cityWeather.WeatherText.includes('Hazy Moonlight')) {
                    setMain(main => {
                        return { ...main, background: 'Haze' }
                    });
                }else if (data.cityWeather.WeatherText.includes('Snow')) {
                    setMain(main => {
                        return { ...main, background: 'snowy-night' }
                    });
                }else if (data.cityWeather.WeatherText.includes('torm')) {
                    setMain(main => {
                        return { ...main, background: 'stormy' }
                    });
                }else if (data.cityWeather.WeatherText.includes('Mist') || data.cityWeather.WeatherText.includes('Fog') ) {
                    setMain(main => {
                        return { ...main, background: 'mist-night' }
                    });
                }else{
                    setMain(main => {
                        return { ...main, background: 'night' }
                    });
                }
            }

        }).catch((err)=> {
            console.log(err, "sugesstion wahala");
        })
    }


    useEffect(() => {
        const savedCity = localStorage.getItem("City");

        setCity(city)

        if (savedCity) {
            updateCity(savedCity)
            .then((data) => {
    
                const basicTemps = data.cityWeather.Temperature;
                const weatherText = data.cityWeather.WeatherText;
            
                const day = new Date(data.cityWeather.LocalObservationDateTime).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"});
                const some = data.cityWeather.LocalObservationDateTime;
                const timeValue = some.slice(11,16);
                const completeDay = `${timeValue} - ${day}`;
    
    
                setBasic((basic) => {
                    return{
                        degree: basicTemps.Metric.Value,
                        location:data.cityId.AdministrativeArea.EnglishName,
                        country:data.cityId.Country.EnglishName,
                        icon: handleIcon(data.cityWeather.WeatherIcon),
                        text: weatherText,
                        day: completeDay,
                        cloudy:data.cityWeather.Temperature.Imperial.Value
                    }
                });
    




                if (data.cityWeather.IsDayTime) {
                    if (data.cityWeather.WeatherText.includes('loudy')) {
                        setMain((main) => {
                            return {...main, background:'cloudy'}
                        })
                    }else if (data.cityWeather.WeatherText.includes('unny') || data.cityWeather.WeatherText.includes('Hot')) {
                        setMain((main) => {
                            return {...main, background:'sunny'}
                        })
                    }else if (data.cityWeather.WeatherText.includes('ain') || data.cityWeather.WeatherText.includes('Cold')) {
                        setMain((main) => {
                            return {...main, background:'rainy-day'}
                        })
                    }else if (data.cityWeather.WeatherText.includes('Dreary') || data.cityWeather.WeatherText.includes('vercast')) {
                        setMain((main) => {
                            return {...main, background:'overcast'}
                        })
                    }else if (data.cityWeather.WeatherText.includes('fog')) {
                        setMain((main) => {
                            return {...main, background:'mist'}
                        })
                    }else if (data.cityWeather.WeatherText.includes('Thunderstorm')) {
                        setMain((main) => {
                            return {...main, background:'T-Storms'}
                        })
                    }else if (data.cityWeather.WeatherText.includes('Showers')) {
                        setMain((main) => {
                            return {...main, background:'Showers'}
                        })
                    }else if (data.cityWeather.WeatherText.includes('Snow') || data.cityWeather.WeatherText.includes('Sleet') ) {
                        setMain((main) => {
                            return {...main, background:'snowy-day'}
                        })
                    } else if (data.cityWeather.WeatherText.includes('Ice')) {
                        setMain((main) => {
                            return{...main, background:'hail' }
                        })
                    } else if (data.cityWeather.WeatherText.includes('Windy')) {
                        setMain((main) => {
                            return{...main, background:'windy' }
                        })
                    } else {
                        setMain(()=> {
                            return{...main, background:'day'}
                        })
                    }
                }else{
                  if (data.cityWeather.WeatherText.includes('Thunderstorm')) {
                        setMain(main => {
                            return { ...main, background: 'T-Storms' }
                        });
                    }else if (data.cityWeather.WeatherText.includes('loudy')) {
                        setMain(main => {
                            return { ...main, background: 'cloudy-night' }
                        });
                    }else if (data.cityWeather.WeatherText.includes('ain')) {
                        setMain(main => {
                            return { ...main, background: 'rainy' }
                        });
                    }else if (data.cityWeather.WeatherText.includes('Hazy Moonlight')) {
                        setMain(main => {
                            return { ...main, background: 'Haze' }
                        });
                    }else if (data.cityWeather.WeatherText.includes('Snow')) {
                        setMain(main => {
                            return { ...main, background: 'snowy-night' }
                        });
                    }else if (data.cityWeather.WeatherText.includes('torm')) {
                        setMain(main => {
                            return { ...main, background: 'stormy' }
                        });
                    }else if (data.cityWeather.WeatherText.includes('Mist') || data.cityWeather.WeatherText.includes('Fog') ) {
                        setMain(main => {
                            return { ...main, background: 'mist-night' }
                        });
                    }else{
                        setMain(main => {
                            return { ...main, background: 'night' }
                        });
                    }
                }
    
            }).catch((err)=> {
                console.log(err, "sugesstion wahala");
            })
        }else{

            
            const findLocation = () => {
  
                const success = (position) => {
                  const latitude = position.coords.latitude;
                  const longitude = position.coords.longitude;  
                  const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage*en`;
              
              
                  fetch(geoApiUrl)
                  .then(res => res.json())
                  .then(data => {
                    console.log(data.city, data.countryName);

                    setBasic((basic) => {
                        return {
                            ...basic, 
                            location:data.city,
                            country:data.countryName,
                        }
                    })  
                  })
                  .catch(err => {
                    console.log(err);
                  });
              
                }
              
                const error = (err) => {
                  console.log(err, "Find Location Error");
                }
              
                
                navigator.geolocation.getCurrentPosition(success, error);
            }

            findLocation();



            const findMyState = () => {


  
                const success = (position) => {
                  const latitude = position.coords.latitude;
                  const longitude = position.coords.longitude;  
                  const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage*en`;
                                

                  fetch(geoApiUrl)
                  .then(res => res.json())
                  .then(data => {

                    

                    setBasic((basic) => {
                        return {
                            ...basic, 
                            location:data.city,
                            country:data.countryName,
                        }
                    })                

                    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${keymain}&q=${data.city}`)
                    .then((res) => {
                        return res.json();
                    }).then((data) => {

                        

                        setBasic((basic) => {
                            return {
                                ...basic, 
                                location:data[0].AdministrativeArea.EnglishName,
                                country:data[0].Country.LocalizedName,
                            }
                        })

                        fetch(`http://dataservice.accuweather.com/currentconditions/v1/${data[0].Key}?apikey=${keymain}`)
                        .then((res) => {
                            return res.json();

                        }).then((data) => {
                            const basicTemps = data[0].Temperature;
                            const weatherText = data[0].WeatherText;
                        
                            const day = new Date(data[0].LocalObservationDateTime).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric"});
                            const some = data[0].LocalObservationDateTime;
                            const timeValue = some.slice(11,16);
                            const completeDay = `${timeValue} - ${day}`;
                
                
                            setBasic((basic) => {
                                return{
                                    ...basic,
                                    degree: basicTemps.Metric.Value,
                                    icon: handleIcon(data[0].WeatherIcon),
                                    text: weatherText,
                                    day: completeDay,
                                    cloudy:data[0].Temperature.Imperial.Value
                                }
                            });
                
            
            
            
            
                            if (data[0].IsDayTime) {
                                if (data[0].WeatherText.includes('loudy')) {
                                    setMain((main) => {
                                        return {...main, background:'cloudy'}
                                    })
                                }else if (data[0].WeatherText.includes('unny') || data[0].WeatherText.includes('Hot')) {
                                    setMain((main) => {
                                        return {...main, background:'sunny'}
                                    })
                                }else if (data[0].WeatherText.includes('ain') || data[0].WeatherText.includes('Cold')) {
                                    setMain((main) => {
                                        return {...main, background:'rainy-day'}
                                    })
                                }else if (data[0].WeatherText.includes('Dreary') || data[0].WeatherText.includes('vercast')) {
                                    setMain((main) => {
                                        return {...main, background:'overcast'}
                                    })
                                }else if (data[0].WeatherText.includes('fog')) {
                                    setMain((main) => {
                                        return {...main, background:'mist'}
                                    })
                                }else if (data[0].WeatherText.includes('Thunderstorm')) {
                                    setMain((main) => {
                                        return {...main, background:'T-Storms'}
                                    })
                                }else if (data[0].WeatherText.includes('Showers')) {
                                    setMain((main) => {
                                        return {...main, background:'Showers'}
                                    })
                                }else if (data[0].WeatherText.includes('Snow') || data[0].WeatherText.includes('Sleet') ) {
                                    setMain((main) => {
                                        return {...main, background:'snowy-day'}
                                    })
                                } else if (data[0].WeatherText.includes('Ice')) {
                                    setMain((main) => {
                                        return{...main, background:'hail' }
                                    })
                                } else if (data[0].WeatherText.includes('Windy')) {
                                    setMain((main) => {
                                        return{...main, background:'windy' }
                                    })
                                } else {
                                    setMain(()=> {
                                        return{...main, background:'day'}
                                    })
                                }
                            }else{
                              if (data[0].WeatherText.includes('Thunderstorm')) {
                                    setMain(main => {
                                        return { ...main, background: 'T-Storms' }
                                    });
                                }else if (data[0].WeatherText.includes('loudy')) {
                                    setMain(main => {
                                        return { ...main, background: 'cloudy-night' }
                                    });
                                }else if (data[0].WeatherText.includes('ain')) {
                                    setMain(main => {
                                        return { ...main, background: 'rainy' }
                                    });
                                }else if (data[0].WeatherText.includes('Hazy Moonlight')) {
                                    setMain(main => {
                                        return { ...main, background: 'Haze' }
                                    });
                                }else if (data[0].WeatherText.includes('Snow')) {
                                    setMain(main => {
                                        return { ...main, background: 'snowy-night' }
                                    });
                                }else if (data[0].WeatherText.includes('torm')) {
                                    setMain(main => {
                                        return { ...main, background: 'stormy' }
                                    });
                                }else if (data[0].WeatherText.includes('Mist') || data[0].WeatherText.includes('Fog') ) {
                                    setMain(main => {
                                        return { ...main, background: 'mist-night' }
                                    });
                                }else{
                                    setMain(main => {
                                        return { ...main, background: 'night' }
                                    });
                                }
                            }
                            
                        })



                        
                        .catch(err => {
                            console.log(err, "City weather error");
                        })

                    }).catch(err => {
                        console.log(err, "City id error");
                    })

                  })
                  .catch(err => {
                    console.log(err, "First error");
                  });
              
                }
              
                const error = (err) => {
                  console.log(err, "second error");
                }
              
                
                navigator.geolocation.getCurrentPosition(success, error);


            }

            findMyState();


        }         
    }, []);

    return (
        <div className='initial'>
            <div className={main.style} id={main.background} >
                <div className="first">
                    <div className="inner-first">
                        <a href="https://github.com/Wizzy-05"><svg width="118" height="15" viewBox="0 0 118 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.04616 14L0.351562 0.909091H2.90199L5.26065 10.5291H5.3821L7.90057 0.909091H10.2209L12.7457 10.5355H12.8608L15.2195 0.909091H17.7699L14.0753 14H11.7358L9.11506 4.81463H9.01278L6.38565 14H4.04616ZM22.6566 14.1918C21.6722 14.1918 20.8221 13.9872 20.1062 13.5781C19.3945 13.1648 18.8469 12.581 18.4634 11.8267C18.0799 11.0682 17.8881 10.1754 17.8881 9.14844C17.8881 8.13849 18.0799 7.25213 18.4634 6.48935C18.8512 5.7223 19.3924 5.12571 20.087 4.69957C20.7816 4.26918 21.5977 4.05398 22.5352 4.05398C23.1403 4.05398 23.7113 4.15199 24.2482 4.34801C24.7894 4.53977 25.2667 4.83807 25.68 5.2429C26.0977 5.64773 26.4258 6.16335 26.6644 6.78977C26.9031 7.41193 27.0224 8.15341 27.0224 9.0142V9.72372H18.9748V8.16406H24.8043C24.8001 7.72088 24.7042 7.3267 24.5167 6.98153C24.3292 6.6321 24.0671 6.35724 23.7305 6.15696C23.3981 5.95668 23.0103 5.85653 22.5671 5.85653C22.0941 5.85653 21.6786 5.97159 21.3207 6.2017C20.9627 6.42756 20.6836 6.72585 20.4833 7.09659C20.2873 7.46307 20.1871 7.86577 20.1829 8.30469V9.66619C20.1829 10.2372 20.2873 10.7273 20.4961 11.1364C20.7049 11.5412 20.9968 11.8523 21.3718 12.0696C21.7468 12.2827 22.1857 12.3892 22.6886 12.3892C23.0252 12.3892 23.3299 12.3423 23.6026 12.2486C23.8754 12.1506 24.1119 12.0078 24.3121 11.8203C24.5124 11.6328 24.6637 11.4006 24.766 11.1236L26.9265 11.3665C26.7901 11.9375 26.5302 12.4361 26.1467 12.8622C25.7674 13.2841 25.2816 13.6122 24.6893 13.8466C24.0969 14.0767 23.4194 14.1918 22.6566 14.1918ZM31.8052 14.1982C31.1831 14.1982 30.6227 14.0874 30.1241 13.8658C29.6298 13.6399 29.2377 13.3075 28.948 12.8686C28.6625 12.4297 28.5197 11.8885 28.5197 11.245C28.5197 10.6911 28.622 10.233 28.8265 9.87074C29.0311 9.50852 29.3102 9.21875 29.6639 9.00142C30.0176 8.78409 30.416 8.62003 30.8592 8.50923C31.3066 8.39418 31.769 8.31108 32.2463 8.25994C32.8216 8.20028 33.2882 8.14702 33.6461 8.10014C34.0041 8.04901 34.264 7.9723 34.426 7.87003C34.5922 7.76349 34.6752 7.59943 34.6752 7.37784V7.33949C34.6752 6.85795 34.5325 6.48509 34.247 6.22088C33.9615 5.95668 33.5502 5.82457 33.0133 5.82457C32.4466 5.82457 31.997 5.94815 31.6646 6.19531C31.3365 6.44247 31.1149 6.73437 30.9998 7.07102L28.8393 6.7642C29.0098 6.16761 29.291 5.66903 29.6831 5.26847C30.0751 4.86364 30.5545 4.56108 31.1213 4.3608C31.688 4.15625 32.3145 4.05398 33.0005 4.05398C33.4735 4.05398 33.9444 4.10938 34.4132 4.22017C34.8819 4.33097 35.3102 4.5142 35.698 4.76989C36.0858 5.02131 36.3968 5.36435 36.6312 5.79901C36.8699 6.23366 36.9892 6.77699 36.9892 7.42898V14H34.7647V12.6513H34.688C34.5474 12.924 34.3493 13.1797 34.0936 13.4183C33.8422 13.6527 33.5247 13.8423 33.1412 13.9872C32.7619 14.1278 32.3166 14.1982 31.8052 14.1982ZM32.4061 12.4979C32.8706 12.4979 33.2733 12.4062 33.6142 12.223C33.9551 12.0355 34.2172 11.7884 34.4004 11.4815C34.5879 11.1747 34.6816 10.8402 34.6816 10.478V9.32102C34.6092 9.38068 34.4856 9.43608 34.3109 9.48722C34.1404 9.53835 33.9487 9.5831 33.7356 9.62145C33.5225 9.6598 33.3116 9.69389 33.1028 9.72372C32.894 9.75355 32.7129 9.77912 32.5595 9.80043C32.2143 9.8473 31.9054 9.92401 31.6326 10.0305C31.3599 10.1371 31.1447 10.2862 30.987 10.478C30.8294 10.6655 30.7505 10.9084 30.7505 11.2067C30.7505 11.6328 30.9061 11.9545 31.2172 12.1719C31.5282 12.3892 31.9245 12.4979 32.4061 12.4979ZM44.2186 4.18182V5.97159H38.5744V4.18182H44.2186ZM39.9679 1.82955H42.2818V11.0469C42.2818 11.358 42.3287 11.5966 42.4224 11.7628C42.5204 11.9247 42.6483 12.0355 42.8059 12.0952C42.9636 12.1548 43.1383 12.1847 43.3301 12.1847C43.475 12.1847 43.6071 12.174 43.7264 12.1527C43.85 12.1314 43.9437 12.1122 44.0076 12.0952L44.3976 13.9041C44.274 13.9467 44.0971 13.9936 43.867 14.0447C43.6412 14.0959 43.3642 14.1257 43.036 14.1342C42.4565 14.1513 41.9345 14.0639 41.47 13.8722C41.0055 13.6761 40.6369 13.3736 40.3642 12.9645C40.0957 12.5554 39.9636 12.044 39.9679 11.4304V1.82955ZM48.6786 8.24716V14H46.3647V0.909091H48.6275V5.85014H48.7425C48.9727 5.29616 49.3285 4.85937 49.81 4.53977C50.2958 4.21591 50.9137 4.05398 51.6637 4.05398C52.3455 4.05398 52.94 4.19673 53.4471 4.48224C53.9542 4.76776 54.3462 5.18537 54.6232 5.73509C54.9045 6.2848 55.0451 6.95597 55.0451 7.74858V14H52.7312V8.10653C52.7312 7.44602 52.5607 6.93253 52.2198 6.56605C51.8832 6.19531 51.4102 6.00994 50.8008 6.00994C50.3917 6.00994 50.0252 6.09943 49.7013 6.27841C49.3817 6.45312 49.1303 6.70668 48.9471 7.03906C48.7681 7.37145 48.6786 7.77415 48.6786 8.24716ZM61.7504 14.1918C60.766 14.1918 59.9158 13.9872 59.1999 13.5781C58.4883 13.1648 57.9407 12.581 57.5572 11.8267C57.1737 11.0682 56.9819 10.1754 56.9819 9.14844C56.9819 8.13849 57.1737 7.25213 57.5572 6.48935C57.945 5.7223 58.4862 5.12571 59.1808 4.69957C59.8754 4.26918 60.6914 4.05398 61.6289 4.05398C62.234 4.05398 62.805 4.15199 63.342 4.34801C63.8832 4.53977 64.3604 4.83807 64.7738 5.2429C65.1914 5.64773 65.5195 6.16335 65.7582 6.78977C65.9968 7.41193 66.1161 8.15341 66.1161 9.0142V9.72372H58.0685V8.16406H63.8981C63.8938 7.72088 63.7979 7.3267 63.6104 6.98153C63.4229 6.6321 63.1609 6.35724 62.8242 6.15696C62.4918 5.95668 62.104 5.85653 61.6609 5.85653C61.1879 5.85653 60.7724 5.97159 60.4144 6.2017C60.0565 6.42756 59.7773 6.72585 59.5771 7.09659C59.381 7.46307 59.2809 7.86577 59.2766 8.30469V9.66619C59.2766 10.2372 59.381 10.7273 59.5898 11.1364C59.7987 11.5412 60.0906 11.8523 60.4656 12.0696C60.8406 12.2827 61.2795 12.3892 61.7823 12.3892C62.119 12.3892 62.4237 12.3423 62.6964 12.2486C62.9691 12.1506 63.2056 12.0078 63.4059 11.8203C63.6062 11.6328 63.7575 11.4006 63.8597 11.1236L66.0202 11.3665C65.8839 11.9375 65.6239 12.4361 65.2404 12.8622C64.8612 13.2841 64.3754 13.6122 63.783 13.8466C63.1907 14.0767 62.5131 14.1918 61.7504 14.1918ZM68.0737 14V4.18182H70.3173V5.81818H70.4196C70.5985 5.25142 70.9054 4.81463 71.34 4.50781C71.7789 4.19673 72.2797 4.04119 72.8422 4.04119C72.97 4.04119 73.1127 4.04758 73.2704 4.06037C73.4324 4.06889 73.5666 4.08381 73.6731 4.10511V6.23366C73.5751 6.19957 73.4196 6.16974 73.2065 6.14418C72.9977 6.11435 72.7953 6.09943 72.5993 6.09943C72.1774 6.09943 71.7981 6.19105 71.4615 6.37429C71.1291 6.55327 70.867 6.80256 70.6752 7.12216C70.4835 7.44176 70.3876 7.81037 70.3876 8.22798V14H68.0737ZM88.5474 5.08949C88.4409 4.74432 88.2939 4.43537 88.1064 4.16264C87.9231 3.88565 87.7015 3.64915 87.4416 3.45312C87.1859 3.2571 86.8919 3.11008 86.5595 3.01207C86.2271 2.9098 85.8649 2.85866 85.4728 2.85866C84.7697 2.85866 84.1433 3.03551 83.5936 3.3892C83.0439 3.7429 82.6113 4.26278 82.296 4.94886C81.9849 5.63068 81.8294 6.46165 81.8294 7.44176C81.8294 8.4304 81.9849 9.26776 82.296 9.95384C82.6071 10.6399 83.0396 11.1619 83.5936 11.5199C84.1476 11.8736 84.791 12.0504 85.524 12.0504C86.1887 12.0504 86.764 11.9226 87.2498 11.6669C87.7399 11.4112 88.117 11.049 88.3812 10.5803C88.6454 10.1072 88.7775 9.55327 88.7775 8.91832L89.3145 9.00142H85.7605V7.14773H91.0723V8.72017C91.0723 9.84091 90.8336 10.8104 90.3564 11.6286C89.8791 12.4467 89.2228 13.0774 88.3876 13.5206C87.5524 13.9595 86.5936 14.179 85.5112 14.179C84.3052 14.179 83.2463 13.9084 82.3343 13.3672C81.4267 12.8217 80.7172 12.0483 80.2058 11.0469C79.6987 10.0412 79.4451 8.84801 79.4451 7.46733C79.4451 6.41051 79.5943 5.46662 79.8926 4.63565C80.1951 3.80469 80.617 3.09943 81.1582 2.51989C81.6994 1.93608 82.3343 1.4929 83.063 1.19034C83.7917 0.883522 84.5843 0.730113 85.4409 0.730113C86.1653 0.730113 86.8407 0.836647 87.4672 1.04972C88.0936 1.25852 88.6497 1.55682 89.1355 1.9446C89.6255 2.33239 90.0282 2.79261 90.3436 3.32528C90.6589 3.85795 90.8656 4.44602 90.9636 5.08949H88.5474ZM95.5771 0.909091V14H93.2631V0.909091H95.5771ZM97.9565 14V4.18182H100.27V14H97.9565ZM99.1199 2.78835C98.7534 2.78835 98.438 2.6669 98.1738 2.42401C97.9096 2.17685 97.7775 1.88068 97.7775 1.53551C97.7775 1.18608 97.9096 0.889914 98.1738 0.647016C98.438 0.399857 98.7534 0.276278 99.1199 0.276278C99.4906 0.276278 99.8059 0.399857 100.066 0.647016C100.33 0.889914 100.462 1.18608 100.462 1.53551C100.462 1.88068 100.33 2.17685 100.066 2.42401C99.8059 2.6669 99.4906 2.78835 99.1199 2.78835ZM107.553 4.18182V5.97159H101.908V4.18182H107.553ZM103.302 1.82955H105.616V11.0469C105.616 11.358 105.663 11.5966 105.756 11.7628C105.854 11.9247 105.982 12.0355 106.14 12.0952C106.298 12.1548 106.472 12.1847 106.664 12.1847C106.809 12.1847 106.941 12.174 107.06 12.1527C107.184 12.1314 107.278 12.1122 107.342 12.0952L107.732 13.9041C107.608 13.9467 107.431 13.9936 107.201 14.0447C106.975 14.0959 106.698 14.1257 106.37 14.1342C105.79 14.1513 105.268 14.0639 104.804 13.8722C104.339 13.6761 103.971 13.3736 103.698 12.9645C103.43 12.5554 103.298 12.044 103.302 11.4304V1.82955ZM109.36 14V12.5298L114.422 6.18253V6.09943H109.526V4.18182H117.254V5.76065L112.434 11.9993V12.0824H117.42V14H109.36Z" fill="white" /></svg></a>
                        <div className="basic">
                            <div className="degree">
                                <p> {basic.degree}°c</p>
                            </div>
                            <div className="location">
                                <p>{basic.location}, {basic.country}</p>
                                <p> <span>{basic.day}</span></p>
                            </div>
                            <div className="condition">
                                <div className="icon">
                                    <img src={basic.icon} height="87" width="100" alt='Weather Icon' />
                                </div>
                                <p>{basic.text}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="second">
                    <div className="inner-second">
                        <div className="one">
                            <form onSubmit={handleMainSearch}>
                                <input type="text" value={city} placeholder='Another Location' onChange={(e) => { setCity(e.target.value) }} />
                            </form>
                            <div className="search" onClick={handleMainSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>
                        </div>
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
                        <div className="three">
                            <p>Weather Details</p>

                            <div className="inner-three">
                                <div className="inner-three-one">
                                    <span>Temperature(°F)</span>
                                    <span>{basic.cloudy} °F</span>
                                </div>
                                 <div className="inner-three-two">
                                    <span>Temperature(°c)</span>
                                    <span> {basic.degree}°c</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
