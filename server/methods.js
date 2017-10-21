/**
 * Created by Jakub on 21.10.2017.
 */
Meteor.methods({
  refillBase: () => {
    //men hoodies
    Clothes.insert({
      "name": "Painter Hoodie",
      "creator": "creator",
      "price": 59,
      "description": "Colourful print hoodie with Painter print on front and back fabricated from a blend of cotton and polyester. " +
      "Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. " +
      "Ridiculously comfortable and fun to wear. Straight fit. Model is 188 cm high and wearing size M.",
      "type": "hoodie",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/painterhoodie.jpg",
      "photoSec": "/images/painterhoodie2.jpg",
      "colors": [
        "pink",
        "white",
        "blue"
      ]
    });
    Clothes.insert({
      "name": "Explore Hoodie",
      "creator": "creator",
      "price": 69,
      "description": "Colourful printed hoodie with Explore print on front and back fabricated from a blend of cotton and polyester. " +
      "Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. " +
      "Ridiculously comfortable and fun to wear. Straight fit. Model is 185 cm tall and wearing size M",
      "type": "hoodie",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/explorehoodie.jpg",
      "photoSec": "/images/explorehoodie2.jpg",
      "colors": [
        "black",
        "white",
        "blue"
      ]
    });
    Clothes.insert({
      "name": "Dreamer Hoodie",
      "creator": "creator",
      "price": 55,
      "description": "Colourful printed hoodie with Dreamer print on front and back fabricated from a blend of cotton and polyester. " +
      "Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. " +
      "Ridiculously comfortable and fun to wear. Straight fit. LłModel is 185 cm tall and wearing size M.",
      "type": "hoodie",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/dreamerhoodie.jpg",
      "photoSec": "/images/dreamerhoodie2.jpg",
      "colors": [
        "white",
        "black",
        "pink"
      ]
    });
    Clothes.insert({
      "name": "The King Hoodie",
      "creator": "creator",
      "price": 64,
      "description": "Colourful printed hoodie with The King print on front and back fabricated from a blend of cotton and polyester. " +
      "Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. " +
      "Ridiculously comfortable and fun to wear. Straight fit. Model is 185 cm tall and wearing size M.",
      "type": "hoodie",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/kinghoodie.jpg",
      "photoSec": "/images/kinghoodie2.jpg",
      "colors": [
        "black",
        "grey"
      ]
    });
    Clothes.insert({
      "name": "Awesome Hoodie",
      "creator": "creator",
      "price": 65,
      "description": "Colourful printed hoodie with Awesome print on front and back fabricated from a blend of cotton and polyester. " +
      "Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. " +
      "Ridiculously comfortable and fun to wear. Straight fit. Model is 185 cm tall and wearing size M.",
      "type": "hoodie",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/awesomehoodie.jpeg",
      "photoSec": "/images/awesomehoodie2.jpg",
      "colors": [
        "brown",
        "blue"
      ]
    });
    Clothes.insert({
      "name": "Deer Hoodie",
      "creator": "creator",
      "price": 67,
      "description": "Colourful printed hoodie with Deer print on front and back fabricated from a blend of cotton and polyester. " +
      "Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. " +
      "Ridiculously comfortable and fun to wear. Straight fit. Model is 185 cm tall and wearing size M.",
      "type": "hoodie",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/deerhoodie.jpg",
      "photoSec": "/images/deerhoodie2.jpg",
      "colors": [
        "yellow",
        "grey"
      ]
    });
    Clothes.insert({
      "name": "Boba Fett Hoodie",
      "creator": "creator",
      "price": 70,
      "description": "Colourful printed hoodie with Boba Fett print on front and back fabricated from a blend of cotton and polyester. " +
      "Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. " +
      "Ridiculously comfortable and fun to wear. Straight fit. Model is 185 cm tall and wearing size M.",
      "type": "hoodie",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/bobafetthoodie.jpg",
      "photoSec": "/images/bobafetthoodie2.jpg",
      "colors": [
        "black",
        "blue",
        "orange"
      ]
    });
    Clothes.insert({
      "name": "Perspective Hoodie",
      "creator": "creator",
      "price": 65,
      "description": "Colourful printed hoodie with Perspective print on front and back fabricated from a blend of cotton and polyester. " +
      "Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. " +
      "Ridiculously comfortable and fun to wear. Straight fit. Model is 185 cm tall and wearing size M.",
      "type": "hoodie",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/perspectivehoodie.jpg",
      "photoSec": "/images/perspectivehoodie2.jpg",
      "colors": [
        "white",
        "yellow"
      ]
    });
    Clothes.insert({
      "name": "Raingirl Hoodie",
      "creator": "creator",
      "price": 69,
      "description": "Colourful printed hoodie with Raingirl print on front and back fabricated from a blend of cotton and polyester. " +
      "Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. " +
      "Ridiculously comfortable and fun to wear. Straight fit.Model is 185 cm tall and wearing size M.",
      "type": "hoodie",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/raingirlhoodie.jpeg",
      "photoSec": "/images/raingirlhoodie2.jpg",
      "colors": [
        "blue",
        "green",
        "yellow",
        "orange",
        "pink",
        "white"
      ]
    });
    Clothes.insert({
      "name": "Moment Hoodie",
      "creator": "creator",
      "price": 55,
      "description": "Colourful printed hoodie with Moment print on front and back fabricated from a blend of cotton and polyester. " +
      "Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. " +
      "Ridiculously comfortable and fun to wear. Straight fit. Model is 185 cm tall and wearing size M.",
      "type": "hoodie",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/momenthoodie.jpg",
      "photoSec": "/images/momenthoodie2.jpg",
      "colors": [
        "white",
        "blue",
        "yellow"
      ]
    })

    //men tshirt
    Clothes.insert({
      "name": "Reality T-shirt",
      "creator": "creator",
      "price": 39,
      "description": "T-shirt cut from a blend of cotton and polyester with Reality print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character. Model is 185 cm tall and wearing a size M.",
      "type": "t-shirt",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/realitytshirt.jpg",
      "photoSec": "/images/realitytshirt2.jpg",
      "colors": [
        "white",
        "yellow",
        "grey"
      ]
    });
    Clothes.insert({
      "name": "Tree T-shirt",
      "creator": "creator",
      "price": 40,
      "description": "T-shirt cut from a blend of cotton and polyester with Tree print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character. Model is 185 cm tall and wearing a size M.",
      "type": "t-shirt",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/treetshirt.jpg",
      "photoSec": "/images/treetshirt2.jpg",
      "colors": [
        "blue",
        "white",
        "yellow"
      ]
    });
    Clothes.insert({
      "name": "Dreamer T-shirt",
      "creator": "creator",
      "price": 37,
      "description": "T-shirt cut from a blend of cotton and polyester with Dreamer print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character. Model is 185 cm tall and wearing a size M.",
      "type": "t-shirt",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/dreamertshirt.jpg",
      "photoSec": "/images/dreamertshirt2.jpg",
      "colors": [
        "white",
        "pink",
        "grey"
      ]
    });
    Clothes.insert({
      "name": "Boba Fett T-shirt",
      "creator": "creator",
      "price": 42,
      "description": "T-shirt cut from a blend of cotton and polyester with Boba Fett print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character. Model is 185 cm tall and wearing a size M.",
      "type": "t-shirt",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/bobafetttshirt.jpg",
      "photoSec": "/images/bobafetttshirt2.jpg",
      "colors": [
        "blue",
        "black",
        "orange"
      ]
    });
    Clothes.insert({
      "name": "Coca Cat T-shirt",
      "creator": "creator",
      "price": 38,
      "description": "T-shirt cut from a blend of cotton and polyester with Coca Cat print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character. Model is 185 cm tall and wearing a size M.",
      "type": "t-shirt",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/cocacattshirt.jpg",
      "photoSec": "/images/cocacattshirt2.jpg",
      "colors": [
        "white",
        "blue"
      ]
    });
    Clothes.insert({
      "name": "Wild T-shirt",
      "creator": "creator",
      "price": 35,
      "description": "T-shirt cut from a blend of cotton and polyester with Wild print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character. Model is 185 cm tall and wearing a size M.",
      "type": "t-shirt",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/wildtshirt.jpg",
      "photoSec": "/images/wildtshirt2.jpg",
      "colors": [
        "green",
        "black"
      ]
    });
    Clothes.insert({
      "name": "Explore T-shirt",
      "creator": "creator",
      "price": 41,
      "description": "T-shirt cut from a blend of cotton and polyester with Explore print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character. Model is 185 cm tall and wearing a size M.",
      "type": "t-shirt",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/exploretshirt.jpg",
      "photoSec": "/images/exploretshirt2.jpg",
      "colors": [
        "white",
        "blue"
      ]
    });
    Clothes.insert({
      "name": "Forest T-shirt",
      "creator": "creator",
      "price": 45,
      "description": "T-shirt cut from a blend of cotton and polyester with Forest print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character. Model is 185 cm tall and wearing a size M.",
      "type": "t-shirt",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/foresttshirt.jpg",
      "photoSec": "/images/foresttshirt2.jpg",
      "colors": [
        "white",
        "blue"
      ]
    });
    Clothes.insert({
      "name": "Magic Cat T-shirt",
      "creator": "creator",
      "price": 42,
      "description": "T-shirt cut from a blend of cotton and polyester with Magic Cat print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character. Model is 185 cm tall and wearing a size M.",
      "type": "t-shirt",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/magiccattshirt.jpg",
      "photoSec": "/images/magiccattshirt2.jpg",
      "colors": [
        "blue",
        "green"
      ]
    });
    Clothes.insert({
      "name": "Perspective T-shirt",
      "creator": "creator",
      "price": 38,
      "description": "T-shirt cut from a blend of cotton and polyester with Perspective print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character. Model is 185 cm tall and wearing a size M.",
      "type": "t-shirt",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "men",
      "status": "available",
      "photo": "/images/perspectivetshirt.jpg",
      "photoSec": "/images/perspectivetshirt2.jpg",
      "colors": [
        "white",
        "yellow",
        "grey"
      ]
    });

    //women hoodies
    Clothes.insert({
      "name": "God Team Hoodie",
      "creator": "creator",
      "price": 59,
      "description": "Colourful printed hoodie with God Team print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Oversized fit. Model is 177 cm tall and wearing size S.",
      "type": "hoodie",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "women",
      "status": "available",
      "photo": "/images/godhoodie.jpg",
      "photoSec": "/images/godhoodie2.jpg",
      "colors": [
        "green",
        "yellow",
        "blue"
      ]
    });
    Clothes.insert({
      "name": "Tropical Hoodie",
      "creator": "creator",
      "price": 57,
      "description": "Colourful printed hoodie with Tropical print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Oversized fit. Model is 177 cm tall and wearing size S.",
      "type": "hoodie",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "women",
      "status": "available",
      "photo": "/images/tropicalhoodie.jpg",
      "photoSec": "/images/tropicalhoodie2.jpg",
      "colors": [
        "yellow",
        "white"
      ]
    });
    Clothes.insert({
      "name": "Fly With Me Hoodie",
      "creator": "creator",
      "price": 40,
      "description": "Colourful printed hoodie with Fly With Me print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Oversized fit. Model is 177 cm tall and wearing size S.",
      "type": "hoodie",
      "XS": 50,
      "SM": 50,
      "MD": 50,
      "LG": 50,
      "XL": 50,
      "sex": "women",
      "status": "available",
      "photo": "/images/flywithmehoodie.jpg",
      "photoSec": "/images/flywithmehoodie2.jpg",
      "colors": [
        "grey",
        "pink",
        "blue"
      ]
    });

    //women tshits
  }
});