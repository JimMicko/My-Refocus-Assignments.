let B="\r\n" // for breaker
MENU={
    "arr_Dish":[
        {"dishId":"01",
        "dishName":"Chicken Adobo",
        "dishPrice":300,
        "Ingredients":[B+
            "   • 2 tbsp canola oil"+B+
            "   • 6 cloves garlic crushed"+B+
            "   • 1 pc onion, sliced"+B+
            "   • 1 kilogram chicken cut ups"+B+
            "   • 2 tbsp vinegar","1/4 cup soy sauce"+B+
            "   • 1 cup water"+B+
            "   • 2 pcs bay leaves"+B+
            "   • 1 tsp whole black peppercorns, slightly crushed"+B+
            "   • 2 pc Knorr chicken cubes"+B+
            "   • 1 tsp brown sugar packed",
            ],},
        {"dishId":"02",
        "dishName":"Pork Sinigang",
        "dishPrice":400,
        "Ingredients":[B+
            "   • 4¼ cups water"+B+
            "   • 1 pc red onion, quartered"+B+
            "   • 2 pcs medium sized tomato, quartered"+B+
            "   • 8 pcs sitaw, sliced into 2” pieces"+B+
            "   • 250 g kangkong stalk and leaves"+B+
            "   • 1 pc talong, sliced"+B+
            "   • 2 pcs siling pangsigang"+B+
            "   • 1 (20g) pack Knorr Sinigang sa Sampalok Mix Original",
            ],},
        {"dishId":"03",
        "dishName":"Beef Tapa",
        "dishPrice":500,
        "Ingredients":[B+
            "   • 1 kg beef sirloin slices, ¼” thick then pounded"+B+
            "   • 1 tsp baking powder","1 pc Knorr Beef Cube, mashed"+B+
            "   • 1/4 cup Knorr Liquid Seasoning"+B+
            "   • 1/4 cup sugar"+B+
            "   • 1/4 cup corn oil"+B+
            "   • 1 tbsp cornstarch (diluted with 30 g water)"+B+
            "   • 1/4 cup corn oil"+B+
            "   • 5-6 cups cooked rice"+B+
            "   • 5-6 cups cooked rice",
            ],},
        ],
    "enumerateDish":function(){
        for(Dish of this.arr_Dish){
            console.log("Dish ID: "+Dish.dishId+B+
            "Dish Name: "+Dish.dishName+B+
            "Dish Price: ₱"+Dish.dishPrice+B+
            "Ingredients: "+Dish.Ingredients+B);
        }
    }    
};
MENU.enumerateDish();