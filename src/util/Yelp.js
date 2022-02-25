const apiKey = 'rc2TsQ_ClkScNdg3Do04fAW8EcyOC3mBocmbj_ojn09O2y-cQ6fY4gH8o3yrBj0tpVKTjE18CkeZDj-SV66Z-nNE7cA9dXVgjPjLwI4Deg4yI0OyCze9pLaLPr8KYnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
    });
}};

export default Yelp;