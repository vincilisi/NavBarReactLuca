const categorySelection = (category) => {
    switch (category) {
        case "panini":
            return ["Burgers", "Happy Meal", "Chicken & Fish"];
        case "bevande":
            return ["Beverages"];

        case "dessert":
            return ["Desserts"];
        default:
            return undefined;

    }
};

export default categorySelection;