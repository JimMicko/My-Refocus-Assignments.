
MENU={
    "restaurantName":"Jim's Restaurant",
    "arr_Dish":[
        {"dishId":"01",
        "dishName":"Chicken Adobo",
        "dishPrice":300,
        "Ingredients":[
            " 2 tbsp canola oil",
            " 6 cloves garlic crushed",
            " 1 pc onion, sliced",
            " 1 kilogram chicken cut ups",
            " 2 tbsp vinegar","1/4 cup soy sauce",
            " 1 cup water",
            " 2 pcs bay leaves",
            " 1 tsp whole black peppercorns, slightly crushed",
            " 2 pc Knorr chicken cubes",
            " 1 tsp brown sugar packed",
            ],},
        {"dishId":"02",
        "dishName":"Pork Sinigang",
        "dishPrice":400,
        "Ingredients":[
            " 4¼ cups water",
            " 1 pc red onion, quartered",
            " 2 pcs medium sized tomato, quartered",
            " 8 pcs sitaw, sliced into 2” pieces",
            " 250 g kangkong stalk and leaves",
            " 1 pc talong, sliced",
            " 2 pcs siling pangsigang",
            " 1 (20g) pack Knorr Sinigang sa Sampalok Mix Original",
            ],},
            {"dishId":"03",
            "dishName":"Beef Tapa",
            "dishPrice":500,
            "Ingredients":[
                " 1 kg beef sirloin slices, ¼” thick then pounded",
                " 1 tsp baking powder","1 pc Knorr Beef Cube, mashed",
                " 1/4 cup Knorr Liquid Seasoning",
                " 1/4 cup sugar",
                " 1/4 cup corn oil",
                " 1 tbsp cornstarch (diluted with 30 g water)",
                " 1/4 cup corn oil",
                " 5-6 cups cooked rice",
                " 5-6 cups cooked rice",
                ],},
        ],
    "displayRestaurantName":function(){
        console.log(this.restaurantName+B);
    },    
    "enumerateDish":function(){
        for(Dish of this.arr_Dish){
            console.log(
            Dish.dishName+" ₱"+Dish.dishPrice+B+
            "Contains "+Dish.Ingredients+B
            );
        }
    }    
};
let B="\r\n" // for breaker
MENU.displayRestaurantName()
MENU.enumerateDish();