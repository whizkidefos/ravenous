const apiKey = 'npSMcjtBqzVq0TgmcTuYFlIptEvtnmhUO0Ry-yXc4Fv-zsEJlnIvO7AYiclptSdeL1uaF3JhvRnNaT8dOQsx_R_yj60dt2DUcsm_yHXBZJhViZWZZ8DnACIt67KiWnYx';

const Yelp = {
    search(term, location, sortBy){
        console.log(term);
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCoda: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;