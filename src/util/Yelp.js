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
                        id: business.props.id,
                        imageSrc: business.props.imageSrc,
                        name: business.props.name,
                        address: business.props.address,
                        city: business.props.city,
                        state: business.props.state,
                        zipCode: business.props.zipCode,
                        category: business.props.category,
                        rating: business.props.rating,
                        reviewCount: business.props.reviewCount
                    };
                });
            }
    });
}};