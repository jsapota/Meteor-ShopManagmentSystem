Meteor.methods({
  'addToCart': (item, amount, size) => {
    if (Meteor.user()) {
      let user = Meteor.userId();
      user += "";
      if (Cart.find({user: user}).count() === 0) {
        Cart.insert({user: user, items: []});
      }
      if (Cart.find({user: user}).count() !== 0) {
        if (Cart.find({user: user, items: {id: item}}).count() === 0){
          Cart.update({user: user}, {
            $push: {
              items: {
                id: item,
                amount: amount,
                size: size
              }
            }
          });
        }
        else {
          Cart.update({user: user}, {
            $push: {
              items: {
                id: item,
                amount: amount,
                size: size
              }
            }
          });
        }
      }
    }
  },
  'updateCart': (id, action, size) => {
    let user = Meteor.userId();
    let items = Cart.findOne({user: user}).items;
    items.forEach((value) => {
      if (value.id === id && value.size === size){
        if(action > 0){
          value.amount = value.amount + action;
        } else {
          if(value.amount - 1 > 0){
            value.amount = value.amount + action
          } else {
            value.id = -1;
          }
        }
      }
    });
    let tempItems = [];
    items.forEach((value) => {
      if(value.id !== -1)
        tempItems.push(value);
    });
    items = tempItems;
    Cart.update({user: Meteor.userId()}, { $set : {'items': items}});
  },
  'refillBase': () => {
    if (Clothes.find().count() <= 70) {
      // Men hoodies
      console.log("Refil base");
      Clothes.insert({
        "name": "Painter Hoodie",
        "creator": "creator",
        "price": 59,
        "description": "Colourful print hoodie with Painter print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Straight fit./n" + "Model is 188 cm high and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menshoodies/painterhoodie.jpg",
        "photoSec": "/images/menshoodies/painterhoodie2.jpg",
        "colors": ["pink", "white", "blue"]
      });
      Clothes.insert({
        "name": "Explore Hoodie",
        "creator": "creator",
        "price": 69,
        "description": "Colourful printed hoodie with Explore print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Straight fit./n" + "Model is 185 cm tall and wearing size M",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menshoodies/explorehoodie.jpg",
        "photoSec": "/images/menshoodies/explorehoodie2.jpg",
        "colors": ["black", "white", "blue"]
      });
      Clothes.insert({
        "name": "Dreamer Hoodie",
        "creator": "creator",
        "price": 55,
        "description": "Colourful printed hoodie with Dreamer print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Straight fit./n" + "Model is 185 cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menshoodies/dreamerhoodie.jpg",
        "photoSec": "/images/menshoodies/dreamerhoodie2.jpg",
        "colors": ["white", "black", "pink"]
      });
      Clothes.insert({
        "name": "The King Hoodie",
        "creator": "creator",
        "price": 64,
        "description": "Colourful printed hoodie with The King print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Straight fit./n" + "Model is 185 cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menshoodies/kinghoodie.jpg",
        "photoSec": "/images/menshoodies/kinghoodie2.jpg",
        "colors": ["black", "grey"]
      });
      Clothes.insert({
        "name": "Awesome Hoodie",
        "creator": "creator",
        "price": 65,
        "description": "Colourful printed hoodie with Awesome print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Straight fit./n" + "Model is 185 cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menshoodies/awesomehoodie.jpeg",
        "photoSec": "/images/menshoodies/awesomehoodie2.jpg",
        "colors": ["brown", "blue"]
      });
      Clothes.insert({
        "name": "Deer Hoodie",
        "creator": "creator",
        "price": 67,
        "description": "Colourful printed hoodie with Deer print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Straight fit./n" + "Model is 185 cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menshoodies/deerhoodie.jpg",
        "photoSec": "/images/menshoodies/deerhoodie2.jpg",
        "colors": ["yellow", "grey"]
      });
      Clothes.insert({
        "name": "Boba Fett Hoodie",
        "creator": "creator",
        "price": 70,
        "description": "Colourful printed hoodie with Boba Fett print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Straight fit./n" + "Model is 185 cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menshoodies/bobafetthoodie.jpg",
        "photoSec": "/images/menshoodies/bobafetthoodie2.jpg",
        "colors": ["black", "blue", "orange"]
      });
      Clothes.insert({
        "name": "Perspective Hoodie",
        "creator": "creator",
        "price": 65,
        "description": "Colourful printed hoodie with Perspective print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Straight fit./n" + "Model is 185 cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menshoodies/perspectivehoodie.jpg",
        "photoSec": "/images/menshoodies/perspectivehoodie2.jpg",
        "colors": ["white", "yellow"]
      });
      Clothes.insert({
        "name": "Raingirl Hoodie",
        "creator": "creator",
        "price": 69,
        "description": "Colourful printed hoodie with Raingirl print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Straight fit./n" + "Model is 185 cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menshoodies/raingirlhoodie.jpeg",
        "photoSec": "/images/menshoodies/raingirlhoodie2.jpg",
        "colors": ["blue", "green", "yellow", "orange", "pink", "white"]
      });
      Clothes.insert({
        "name": "Moment Hoodie",
        "creator": "creator",
        "price": 55,
        "description": "Colourful printed hoodie with Moment print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Straight fit./n" + "Model is 185 cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menshoodies/momenthoodie.jpg",
        "photoSec": "/images/menshoodies/momenthoodie2.jpg",
        "colors": ["white", "blue", "yellow"]
      });

      //  Women hoodies
      Clothes.insert({
        "name": "Yellow Oversize Hoodie",
        "creator": "creator",
        "price": 50,
        "description": "Stay comfy and casual in this oversized hoodie. Try pairing with wide leg trousers and heels to compliment./n" + "-Hooded design/n" + "-Simple long sleeves/n" + "-Single pocket front/n" + "-Soft cotton blend/n" + "-Oversized for a looser fit/n" + "Dionne is 174cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenshoodies/yellowoversizedhoodie.jpg",
        "photoSec": "/images/womenshoodies/yellowoversizedhoodie2.jpg",
        "colors": ["yellow", "yellow"]
      });
      Clothes.insert({
        "name": "Pink Velour Hoodie",
        "creator": "creator",
        "price": 45,
        "description": "Bring the luxe lounge trend to your casual wardrobe with this velour hoodie. Pair with the matching joggers for a full blown 00s throwback./n" + "- Soft velour finish/n" + "- Hooded design/n" + "- 'Amour' gem embellished hood/n" + "- Simple long sleeves/n" + "- Zip front fastening/n" + "- Side pockets/n" + "- Matching joggers available/n" + "- Ribbed trim/n" + "- Soft cotton blend/n" + "- Casual fit that is true to size/n" + "- Sasha is 173cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenshoodies/pinkvelourhoodie.jpg",
        "photoSec": "/images/womenshoodies/pinkvelourhoodie2.jpg",
        "colors": ["pink", "pink"]
      });
      Clothes.insert({
        "name": "Black Oversize Hoodie",
        "creator": "creator",
        "price": 50,
        "description": "Stay comfy and casual in this oversized hoodie. Try pairing with a floral skirt and ankle boots to complement./n" + "- Hooded design/n" + "- Simple long sleeves/n" + "- Drawstring detail/n" + "- Single pocket front/n" + "- Soft cotton blend/n" + "- Oversized for a looser fit/n" + "Model is 176cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenshoodies/blackoversizedhoodie.jpg",
        "photoSec": "/images/womenshoodies/blackoversizedhoodie2.jpg",
        "colors": ["black", "black"]
      });
      Clothes.insert({
        "name": "Black Velour Zip Hoodie",
        "creator": "creator",
        "price": 40,
        "description": "Refresh the basics in this soft velour hoodie. Layer over a floral dress for a laid back look./n" + "- Hooded design/n" + "- Soft finish/n" + "- Zip front fastening/n" + "- Simple long sleeves/n" + "- Casual fit that is true to size/n" + "- Matching joggers available/n" + "Hana is 171cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenshoodies/blackvelourhoodie.jpg",
        "photoSec": "/images/womenshoodies/blackvelourhoodie2.jpg",
        "colors": ["black", "black"]
      });
      Clothes.insert({
        "name": "Grey Longline Hoodie",
        "creator": "creator",
        "price": 60,
        "description": "Keep cosy in this longline hoodie. Pair with ripped skinny jeans and trainers for an edgy casual look./n" + "- Hooded design/n" + "- Woven tie front/n" + "- Eyelet detail/n" + "- Simple long sleeves/n" + "- Single pocket front/n" + "- Cuffed hem/n" + "- Longline design/n" + "- Soft finish/n" + "- Casual fit that is true to size/n" + "Dionne is 174cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenshoodies/greylonglinehoodie.jpg",
        "photoSec": "/images/womenshoodies/greylonglinehoodie2.jpg",
        "colors": ["grey", "grey"]
      });
      Clothes.insert({
        "name": "Soho Hoodie",
        "creator": "creator",
        "price": 35,
        "description": "Update your causal wardrobe with this printed hoodies. Pair with jeans and trainers for a go-to off-duty outfit./n" + "- Hooded design/n" + "- Simple long sleeves/n" + "- 'Soho New York' printed front/n" + "- Drawstring hem/n" + "- Soft jersey finish/n" + "- Casual fit that is true to size/n" + "Dionne is 174cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenshoodies/sohohoodie.jpg",
        "photoSec": "/images/womenshoodies/sohohoodie2.jpg",
        "colors": ["white", "red"]
      });
      Clothes.insert({
        "name": "Sleeveless Hoodie",
        "creator": "creator",
        "price": 25,
        "description": "Bring the loungewear trend into your everyday wardrobe this season with this hoodie. Try complementing with leggings and trainers to finish./n" + "- Hooded design/n" + "- Sleeveless design/n" + "- Casual fit that is true to size/n" + "Model is 176cm tall and wearing size M.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenshoodies/sleevelesshoodie.jpg",
        "photoSec": "/images/womenshoodies/sleevelesshoodie2.jpg",
        "colors": ["grey", "red"]
      });
      Clothes.insert({
        "name": "God Team Hoodie",
        "creator": "creator",
        "price": 59,
        "description": "Colourful printed hoodie with God Team print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Oversized fit./n" + "Model is 177 cm tall and wearing size S.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenshoodies/godhoodie.jpg",
        "photoSec": "/images/womenshoodies/godhoodie2.jpg",
        "colors": ["green", "yellow", "blue"]
      });
      Clothes.insert({
        "name": "Tropical Hoodie",
        "creator": "creator",
        "price": 57,
        "description": "Colourful printed hoodie with Tropical print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Oversized fit./n" + "Model is 177 cm tall and wearing size S.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenshoodies/tropicalhoodie.jpg",
        "photoSec": "/images/womenshoodies/tropicalhoodie2.jpg",
        "colors": ["yellow", "white"]
      });
      Clothes.insert({
        "name": "Fly With Me Hoodie",
        "creator": "creator",
        "price": 40,
        "description": "Colourful printed hoodie with Fly With Me print on front and back fabricated from a blend of cotton and polyester. Featuring a drawstring hood, practical front pocket, long sleeves, ribbed cuffs and Bittersweet Paris logo on the neck. Ridiculously comfortable and fun to wear. Oversized fit./n" + "Model is 177 cm tall and wearing size S.",
        "type": "hoodie",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenshoodies/flywithmehoodie.jpg",
        "photoSec": "/images/womenshoodies/flywithmehoodie2.jpg",
        "colors": ["grey", "pink", "blue"]
      });

      //  Men tshirt
      Clothes.insert({
        "name": "Reality T-shirt",
        "creator": "creator",
        "price": 39,
        "description": "T-shirt cut from a blend of cotton and polyester with Reality print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menstshirts/realitytshirt.jpg",
        "photoSec": "/images/menstshirts/realitytshirt2.jpg",
        "colors": ["white", "yellow", "grey"]
      });
      Clothes.insert({
        "name": "Tree T-shirt",
        "creator": "creator",
        "price": 40,
        "description": "T-shirt cut from a blend of cotton and polyester with Tree print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menstshirts/treetshirt.jpg",
        "photoSec": "/images/menstshirts/treetshirt2.jpg",
        "colors": ["blue", "white", "yellow"]
      });
      Clothes.insert({
        "name": "Dreamer T-shirt",
        "creator": "creator",
        "price": 37,
        "description": "T-shirt cut from a blend of cotton and polyester with Dreamer print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menstshirts/dreamertshirt.jpg",
        "photoSec": "/images/menstshirts/dreamertshirt2.jpg",
        "colors": ["white", "pink", "grey"]
      });
      Clothes.insert({
        "name": "Boba Fett T-shirt",
        "creator": "creator",
        "price": 42,
        "description": "T-shirt cut from a blend of cotton and polyester with Boba Fett print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menstshirts/bobafetttshirt.jpg",
        "photoSec": "/images/menstshirts/bobafetttshirt2.jpg",
        "colors": ["blue", "black", "orange"]
      });
      Clothes.insert({
        "name": "Coca Cat T-shirt",
        "creator": "creator",
        "price": 38,
        "description": "T-shirt cut from a blend of cotton and polyester with Coca Cat print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menstshirts/cocacattshirt.jpg",
        "photoSec": "/images/menstshirts/cocacattshirt2.jpg",
        "colors": ["white", "blue"]
      });
      Clothes.insert({
        "name": "Wild T-shirt",
        "creator": "creator",
        "price": 35,
        "description": "T-shirt cut from a blend of cotton and polyester with Wild print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menstshirts/wildtshirt.jpg",
        "photoSec": "/images/menstshirts/wildtshirt2.jpg",
        "colors": ["green", "black"]
      });
      Clothes.insert({
        "name": "Explore T-shirt",
        "creator": "creator",
        "price": 41,
        "description": "T-shirt cut from a blend of cotton and polyester with Explore print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menstshirts/exploretshirt.jpg",
        "photoSec": "/images/menstshirts/exploretshirt2.jpg",
        "colors": ["white", "blue"]
      });
      Clothes.insert({
        "name": "Forest T-shirt",
        "creator": "creator",
        "price": 45,
        "description": "T-shirt cut from a blend of cotton and polyester with Forest print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menstshirts/foresttshirt.jpg",
        "photoSec": "/images/menstshirts/foresttshirt2.jpg",
        "colors": ["white", "blue"]
      });
      Clothes.insert({
        "name": "Magic Cat T-shirt",
        "creator": "creator",
        "price": 42,
        "description": "T-shirt cut from a blend of cotton and polyester with Magic Cat print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menstshirts/magiccattshirt.jpg",
        "photoSec": "/images/menstshirts/magiccattshirt2.jpg",
        "colors": ["blue", "green"]
      });
      Clothes.insert({
        "name": "Perspective T-shirt",
        "creator": "creator",
        "price": 38,
        "description": "T-shirt cut from a blend of cotton and polyester with Perspective print on front and back. All of Bittersweet Paris t-shirts are produced in Europe. It features round neck, short sleeves, straight fit and Bittersweet Paris logo printed on the neck. Durable seams are made with colours contrasting the graphic print, giving them even more character./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menstshirts/perspectivetshirt.jpg",
        "photoSec": "/images/menstshirts/perspectivetshirt2.jpg",
        "colors": ["white", "yellow", "grey"]
      });

      //  Women tshirt
      Clothes.insert({
        "name": "Cherry T-shirt",
        "creator": "creator",
        "price": 20,
        "description": "Update your casual wardrobe with this printed tee. Pair with skinny jeans and ankle boots to complement./n" + "- Rounded neckline/n" + "- Simple short sleeves/n" + "- 'Cherry Coke' printed front/n" + "- Soft cotton finish/n" + "- Casual fit that is true to size/n" + "Mary is 181cm tall and wearing size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenstshirts/cherrytshirt.jpg",
        "photoSec": "/images/womenstshirts/cherrytshirt2.jpg",
        "colors": ["red", "grey"]
      });
      Clothes.insert({
        "name": "The Rolling Stones T-shirt",
        "creator": "creator",
        "price": 21,
        "description": "Update your causal wardrobe with this band logo tee. Pair with cropped jeans and statement ankle boots./n" + "- Rounded neckline/n" + "- Simple short lives/n" + "- Rolling Stones logo printed front/n" + "- Soft cotton finsih/n" + "- Casual fit that is true to size/n" + "Mary is 181cm tall and wearing size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenstshirts/therollingstonestshirt.jpg",
        "photoSec": "/images/womenstshirts/therollingstonestshirt2.jpg",
        "colors": ["red", "white"]
      });
      Clothes.insert({
        "name": "Black Velvet T-shirt",
        "creator": "creator",
        "price": 39,
        "description": "Mix the lace and velvet trend this season in this chic top. Pair with a leather-look skirt and ankle boots to complement./n" + "- Rounded neckline/n" + "- Velvet design/n" + "- Lace yoke design/n" + "- Simple short sleeves/n" + "- Soft finish/n" + "- Casual fit that is true to size/n" + "Hana is 171cm tall and wearing size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenstshirts/blackvelvettshirt.jpg",
        "photoSec": "/images/womenstshirts/blackvelvettshirt2.jpg",
        "colors": ["black", "black"]

      });
      Clothes.insert({
        "name": "Cream T-shirt",
        "creator": "creator",
        "price": 25,
        "description": "Get on the tassel trend with this embroidered t-shirt. Layer over a turtle neck and pair with kick flare jeans for an on-trend look./n" + "- Embroidered detail/n" + "- Tassel trim/n" + "- Rounded neckline/n" + "- Simple short sleeves/n" + "- Soft cotton blend/n" + "- Casual fit that is true to size/n" + "Lydia is 170cm tall and wearing size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenstshirts/creamtshirt.jpg",
        "photoSec": "/images/womenstshirts/creamtshirt2.jpg",
        "colors": ["white", "red"]
      });
      Clothes.insert({
        "name": "Grey Metallic T-shirt",
        "creator": "creator",
        "price": 39,
        "description": "Go for glitz in this metallic top. Pair with leather-look trousers and biker boots to give it an edge./n" + "- Metallic finish/n" + "- Rounded neckline/n" + "- Short tiered sleeves/n" + "- Casual fit that is true to size/n" + "Taina is 174cm tall and wearing size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenstshirts/metallictshirt.jpg",
        "photoSec": "/images/womenstshirts/metallictshirt2.jpg",
        "colors": ["grey", "grey"]
      });
      Clothes.insert({
        "name": "Grey Luxe T-shirt",
        "creator": "creator",
        "price": 25,
        "description": "Update your causal wardrobe with this printed tee. Pair with a leather-look skirt and and ankle boots for an on-trend look./n" + "- Rounded neckline/n" + "- Rolled sleeves/n" + "- 'Luxe' printed front/n" + "- Metallic print detail/n" + "- Soft cotton blend/n" + "- Casual fit that is true to size/n" + "Hana is 171cm tall and wearing size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenstshirts/greyluxetshirt.jpg",
        "photoSec": "/images/womenstshirts/greyluxetshirt2.jpg",
        "colors": ["red", "grey"]
      });
      Clothes.insert({
        "name": "Yellow Scallop T-shirt",
        "creator": "creator",
        "price": 30,
        "description": "Get on the scallop trend with this short sleeve tee. Pair with black jeggings and shoe boots to complement./n" + "- Rounded neckline/n" + "- Simple short sleeves/n" + "- Scallop hem/n" + "- Casual fit that is true to size/n" + "Sasha is 173cm tall and wearing size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenstshirts/yelowscalloptshirt.jpg",
        "photoSec": "/images/womenstshirts/yelowscalloptshirt2.jpg",
        "colors": ["yellow", "yellow"]
      });
      Clothes.insert({
        "name": "Stripe T-shirt",
        "creator": "creator",
        "price": 18,
        "description": "Cover the basics in this organic cotton tee. Pair with jeans and trainers for a chic finish./n" + "- All over stripe design/n" + "- Rounded neckline/n" + "- Simple short sleeves/n" + "- Soft organic cotton/n" + "- Casual fit that is true to size/n" + "Mary is 181cm tall and wearing size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenstshirts/stripetshirt.jpg",
        "photoSec": "/images/womenstshirts/stripetshirt2.jpg",
        "colors": ["grey", "white"]
      });
      Clothes.insert({
        "name": "Teal Velvet T-shirt",
        "creator": "creator",
        "price": 37,
        "description": "Bring luxe textures to your casual wardrobe with this velvet tee. Pair with belted skinny jeans and ankle boots to complement./n" + "- Soft velvet finish/n" + "- Rounded neckline/n" + "- Simple short sleeves/n" + "- Casual fit that is true to size/n" + "Mariana is 170cm tall and wearing size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenstshirts/tealvelvettshirt.jpg",
        "photoSec": "/images/womenstshirts/tealvelvettshirt2.jpg",
        "colors": ["blue", "blue"]
      });
      Clothes.insert({
        "name": "Biscous T-shirt",
        "creator": "creator",
        "price": 23,
        "description": "Update your casual wardrobe with this printed tee. Pair with high waited jeans and statement ankle boots to complement./n" + "- Rounded neckline/n" + "- Floral puff print detail/n" + "- 'Bisous' printed front/n" + "- Simple short sleeves/n" + "- Soft cotton finish/n" + "- Oversized for a looser fit/n" + "Emily is 170cm tall and wearing size M.",
        "type": "t-shirt",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenstshirts/biscoustshirt.jpg",
        "photoSec": "/images/womenstshirts/biscoustshirt2.jpg",
        "colors": ["green", "white"]
      });


      // Men sweater
      Clothes.insert({
        "name": "New Vision Sweater",
        "creator": "creator",
        "price": 54,
        "description": "Fabricated from a blend of cotton and polyester with high quality New Vision print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menssweaters/newvisionsweater.jpg",
        "photoSec": "/images/menssweaters/newvisionsweater2.jpg",
        "colors": ["blue", "grey", "pink"]
      });
      Clothes.insert({
        "name": "Deer Sweater",
        "creator": "creator",
        "price": 57,
        "description": "Fabricated from a blend of cotton and polyester with high quality Deer print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menssweaters/deersweater.jpg",
        "photoSec": "/images/menssweaters/deersweater2.jpg",
        "colors": ["black", "yellow", "blue"]
      });
      Clothes.insert({
        "name": "Awesome Sweater",
        "creator": "creator",
        "price": 56,
        "description": "Fabricated from a blend of cotton and polyester with high quality Awesome print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menssweaters/awesomejumper.jpg",
        "photoSec": "/images/menssweaters/awesomejumper2.jpg",
        "colors": ["black", "blue"]
      });
      Clothes.insert({
        "name": "Painter Sweater",
        "creator": "creator",
        "price": 60,
        "description": "Fabricated from a blend of cotton and polyester with high quality Painter print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menssweaters/painterjumper.jpg",
        "photoSec": "/images/menssweaters/painterjumper2.jpg",
        "colors": ["pink", "blue", "white"]
      });
      Clothes.insert({
        "name": "Skywalker Sweater",
        "creator": "creator",
        "price": 54,
        "description": "Fabricated from a blend of cotton and polyester with high quality Skywalker print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menssweaters/skywalkerjumper.jpg",
        "photoSec": "/images/menssweaters/skywalkerjumper2.jpg",
        "colors": ["blue", "black"]
      });
      Clothes.insert({
        "name": "Eye Sweater",
        "creator": "creator",
        "price": 50,
        "description": "Fabricated from a blend of cotton and polyester with high quality Eye print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menssweaters/eyejumper.jpg",
        "photoSec": "/images/menssweaters/eyejumper2.jpg",
        "colors": ["white", "blue", "pink"]
      });
      Clothes.insert({
        "name": "Sky Is The Limit Sweater",
        "creator": "creator",
        "price": 48,
        "description": "Fabricated from a blend of cotton and polyester with high quality Sky Is The Limit print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menssweaters/skyjumper.jpg",
        "photoSec": "/images/menssweaters/skyjumper2.jpg",
        "colors": ["white", "grey"]
      });
      Clothes.insert({
        "name": "Stars Sweater",
        "creator": "creator",
        "price": 52,
        "description": "Fabricated from a blend of cotton and polyester with high quality Stars print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menssweaters/starsjumper.jpg",
        "photoSec": "/images/menssweaters/starsjumper2.jpg",
        "colors": ["blue", "white"]
      });
      Clothes.insert({
        "name": "Raingirl  Sweater",
        "creator": "creator",
        "price": 54,
        "description": "Fabricated from a blend of cotton and polyester with high quality Raingirl print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menssweaters/rainjumper.jpg",
        "photoSec": "/images/menssweaters/rainjumper2.jpg",
        "colors": ["blue", "white", "yellow", "pink"]
      });
      Clothes.insert({
        "name": "Technocat Sweater",
        "creator": "creator",
        "price": 53,
        "description": "Fabricated from a blend of cotton and polyester with high quality Technocat print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 185 cm tall and wearing a size M.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/menssweaters/technojumper.jpg",
        "photoSec": "/images/menssweaters/technojumper2.jpg",
        "colors": ["grey", "white"]
      });

      // Women sweater
      Clothes.insert({
        "name": "Explore Sweater",
        "creator": "creator",
        "price": 52,
        "description": "Fabricated from a blend of cotton and polyester with high quality Explore print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 177 cm tall and wearing a size S.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenssweaters/explorejumper.jpg",
        "photoSec": "/images/womenssweaters/explorejumper2.jpg",
        "colors": ["white", "blue"]
      });
      Clothes.insert({
        "name": "Deer Sweater",
        "creator": "creator",
        "price": 54,
        "description": "Fabricated from a blend of cotton and polyester with high quality Deer print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 177 cm tall and wearing a size S.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenssweaters/deerjumper.jpg",
        "photoSec": "/images/womenssweaters/deerjumper2.jpg",
        "colors": ["grey", "blue", "yellow"]
      });
      Clothes.insert({
        "name": "Prismatic Sweater",
        "creator": "creator",
        "price": 53,
        "description": "Fabricated from a blend of cotton and polyester with high quality Prismatic print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 177 cm tall and wearing a size S.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenssweaters/prismaticjumper.jpg",
        "photoSec": "/images/womenssweaters/prismaticjumper2.jpg",
        "colors": ["white", "black", "red", "yellow"]
      });
      Clothes.insert({
        "name": "Geometric Sweater",
        "creator": "creator",
        "price": 47,
        "description": "Fabricated from a blend of cotton and polyester with high quality Geometric print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 177 cm tall and wearing a size S.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenssweaters/geometricjumper.jpg",
        "photoSec": "/images/womenssweaters/geometricjumper2.jpg",
        "colors": ["white", "blue"]
      });
      Clothes.insert({
        "name": "Forest Sweater",
        "creator": "creator",
        "price": 50,
        "description": "Fabricated from a blend of cotton and polyester with high quality Forest print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 177 cm tall and wearing a size S.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenssweaters/forestjumper.jpg",
        "photoSec": "/images/womenssweaters/forestjumper2.jpg",
        "colors": ["white", "blue"]
      });
      Clothes.insert({
        "name": "New Vision Sweater",
        "creator": "creator",
        "price": 52,
        "description": "Fabricated from a blend of cotton and polyester with high quality New Vision print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 177 cm tall and wearing a size S.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenssweaters/newvisionjumper.jpg",
        "photoSec": "/images/womenssweaters/newvisionjumper2.jpg",
        "colors": ["blue", "grey", "pink"]
      });
      Clothes.insert({
        "name": "Purple Galaxy Sweater",
        "creator": "creator",
        "price": 59,
        "description": "Fabricated from a blend of cotton and polyester with high quality Purple Galaxy print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 177 cm tall and wearing a size S.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenssweaters/purplegalaxyjumper.jpg",
        "photoSec": "/images/womenssweaters/purplegalaxyjumper2.jpg",
        "colors": ["black", "blue", "pink"]
      });
      Clothes.insert({
        "name": "Fly With Me Sweater",
        "creator": "creator",
        "price": 52,
        "description": "Fabricated from a blend of cotton and polyester with high quality Fly With Me print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 177 cm tall and wearing a size S.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenssweaters/flywithmejumper.jpg",
        "photoSec": "/images/womenssweaters/flywithmejumper2.jpg",
        "colors": ["black", "pink", "blue"]
      });
      Clothes.insert({
        "name": "Tropical Sweater",
        "creator": "creator",
        "price": 45,
        "description": "Fabricated from a blend of cotton and polyester with high quality Tropical print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 177 cm tall and wearing a size S.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenssweaters/tropicaljumper.jpg",
        "photoSec": "/images/womenssweaters/tropicaljumper2.jpg",
        "colors": ["white", "yellow"]
      });
      Clothes.insert({
        "name": "Technocat Sweater",
        "creator": "creator",
        "price": 50,
        "description": "Fabricated from a blend of cotton and polyester with high quality Technocat print on front and back. Produced entirely in Europe, it has round neck, long sleeves, straight fit and Bittersweet Paris logo on the neck, Durable seams are colored to contrast the rest of the design, making you stand out even more./n" + "Model is 177 cm tall and wearing a size S.",
        "type": "sweater",
        "XS": 50,
        "SM": 50,
        "MD": 50,
        "LG": 50,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/womenssweaters/technocatjumper.jpg",
        "photoSec": "/images/womenssweaters/technocatjumper2.jpg",
        "colors": ["white", "grey", "black"]
      });

      // Men backpack
      Clothes.insert({
        "name": "Skywalker Backpack",
        "creator": "creator",
        "price": 34,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Skywalker print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/backpacks/skywalker.jpg",
        "photoSec": "/images/backpacks/skywalker2.jpg",
        "colors": ["blue", "black"]
      });
      Clothes.insert({
        "name": "Technocat Backpack",
        "creator": "creator",
        "price": 36,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Technocat print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/backpacks/technocat.jpg",
        "photoSec": "/images/backpacks/technocat2.jpg",
        "colors": ["black", "grey", "white"]
      });
      Clothes.insert({
        "name": "Reality Backpack",
        "creator": "creator",
        "price": 34,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Reality print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/backpacks/reality.jpg",
        "photoSec": "/images/backpacks/reality2.jpg",
        "colors": ["yellow", "white"]
      });
      Clothes.insert({
        "name": "Eye Backpack",
        "creator": "creator",
        "price": 35,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Eye print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/backpacks/eye.jpg",
        "photoSec": "/images/backpacks/eye2.jpg",
        "colors": ["white", "blue", "pink"]
      });
      Clothes.insert({
        "name": "Dreamer Backpack",
        "creator": "creator",
        "price": 34,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Dreamer print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/backpacks/dreamer.jpg",
        "photoSec": "/images/backpacks/dreamer2.jpg",
        "colors": ["white", "grey", "pink"]
      });
      Clothes.insert({
        "name": "Tree Backpack",
        "creator": "creator",
        "price": 37,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Tree print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/backpacks/tree.jpg",
        "photoSec": "/images/backpacks/tree2.jpg",
        "colors": ["yellow", "red", "white"]
      });
      Clothes.insert({
        "name": "Purple Galaxy Backpack",
        "creator": "creator",
        "price": 34,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Purple Galaxy print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/backpacks/purplegalaxy.jpg",
        "photoSec": "/images/backpacks/purplegalaxy2.jpg",
        "colors": ["black", "blue"]
      });
      Clothes.insert({
        "name": "Painter Backpack",
        "creator": "creator",
        "price": 34,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Painter print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/backpacks/Painter.jpg",
        "photoSec": "/images/backpacks/Painter2.jpg",
        "colors": ["blue", "pink", "white"]
      });
      Clothes.insert({
        "name": "Awesome Backpack",
        "creator": "creator",
        "price": 34,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Awesome print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/backpacks/Awesome.jpg",
        "photoSec": "/images/backpacks/Awesome2.jpg",
        "colors": ["black", "blue"]
      });
      Clothes.insert({
        "name": "Magic Cat Backpack",
        "creator": "creator",
        "price": 34,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Magic Cat print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "men",
        "status": "available",
        "photo": "/images/backpacks/magiccat.jpg",
        "photoSec": "/images/backpacks/magiccat2.jpg",
        "colors": ["blue", "green"]
      });

      // Women backpack
      Clothes.insert({
        "name": "Skywalker Backpack",
        "creator": "creator",
        "price": 34,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Skywalker print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/backpacks/skywalker.jpg",
        "photoSec": "/images/backpacks/skywalker2.jpg",
        "colors": ["blue", "black"]
      });
      Clothes.insert({
        "name": "Technocat Backpack",
        "creator": "creator",
        "price": 36,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Technocat print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/backpacks/technocat.jpg",
        "photoSec": "/images/backpacks/technocat2.jpg",
        "colors": ["black", "grey", "white"]
      });
      Clothes.insert({
        "name": "Reality Backpack",
        "creator": "creator",
        "price": 34,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Reality print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/backpacks/reality.jpg",
        "photoSec": "/images/backpacks/reality2.jpg",
        "colors": ["yellow", "white"]
      });
      Clothes.insert({
        "name": "Eye Backpack",
        "creator": "creator",
        "price": 35,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Eye print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/backpacks/eye.jpg",
        "photoSec": "/images/backpacks/eye2.jpg",
        "colors": ["white", "blue", "pink"]
      });
      Clothes.insert({
        "name": "Dreamer Backpack",
        "creator": "creator",
        "price": 34,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Dreamer print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/backpacks/dreamer.jpg",
        "photoSec": "/images/backpacks/dreamer2.jpg",
        "colors": ["white", "grey", "pink"]
      });
      Clothes.insert({
        "name": "Tree Backpack",
        "creator": "creator",
        "price": 37,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Tree print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/backpacks/tree.jpg",
        "photoSec": "/images/backpacks/tree2.jpg",
        "colors": ["yellow", "red", "white"]
      });
      Clothes.insert({
        "name": "Purple Galaxy Backpack",
        "creator": "creator",
        "price": 34,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Purple Galaxy print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/backpacks/purplegalaxy.jpg",
        "photoSec": "/images/backpacks/purplegalaxy2.jpg",
        "colors": ["black", "blue"]
      });
      Clothes.insert({
        "name": "Painter Backpack",
        "creator": "creator",
        "price": 34,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Painter print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/backpacks/Painter.jpg",
        "photoSec": "/images/backpacks/Painter2.jpg",
        "colors": ["blue", "pink", "white"]
      });
      Clothes.insert({
        "name": "Awesome Backpack",
        "creator": "creator",
        "price": 34,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Awesome print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/backpacks/Awesome.jpg",
        "photoSec": "/images/backpacks/Awesome2.jpg",
        "colors": ["black", "blue"]
      });
      Clothes.insert({
        "name": "Magic Cat Backpack",
        "creator": "creator",
        "price": 34,
        "description": "Drawstring backpack made from nylon with super practical and comfortable drawstrings, that let you keep all your stuff in one place. It features colorful Magic Cat print and adjustable shoulder straps.",
        "type": "backpack",
        "XS": 50,
        "SM": 0,
        "MD": 0,
        "LG": 0,
        "XL": 50,
        "sex": "women",
        "status": "available",
        "photo": "/images/backpacks/magiccat.jpg",
        "photoSec": "/images/backpacks/magiccat2.jpg",
        "colors": ["blue", "green"]
      });


    }
  }
});