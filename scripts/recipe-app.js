/*

// Javascript 'Recipe' Object to hold all data for a single recipe

function Recipe() {
    this.title = 
    this.introduction =
    this.ingredientListArray = 
    this.descriptiveInstructionsArray =
    this.recipeCardInstructionsArray = 
    this.photoArray =
 

    // I need to do more research on taxonomies to make this section better
    this.keywordArray = //general search terms
    this.categoryArray = //heirarchical categories
    this.tagArray = // facet taxonimies

    this.recipeNumber = // an identification number that will be unique to each recipe
    this.dateCreated = 
    this.datePosted = 
    this.creator = // name of the person that created the recipe

    // Metrics
    this.visitsArray = // maybe an array of dates and users
    this.returnVisitsArray = 
    this.downloadedArray = 
    this.popularity() = // a method for calculating a popularity score
}

Recipe.prototype.category = "Recipe";
*/

let categories = ["Recipe", "Blog", "Shop", "Review"];

let tags = [["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"],
    ["Main", "Side", "Sweet", "Stew", "Hamburger"]
    ["Bear", "Antelope", "Deer", "Wild Turkey", "Salmon"],
    ["Smoke", "BBQ", "Skillet", "Bake"]]



function saveRecipe() {

}

function formFieldValidation(recipeFormEvent) {
    console.log(recipeFormEvent.target.id);
    switch (recipeFormEvent.id) {
        case "recipe-title":
            
            break;
    
        default:
            break;
    }



}





// Event listeners
document.querySelector("#save-button").addEventListener("click", saveRecipe());
document.querySelector("#add-recipe-form").addEventListener("keydown", formFieldValidation);












/* Make text areas auto height
I found this solution at the following website: https://gomakethings.com/automatically-expand-a-textarea-as-the-user-types-using-vanilla-javascript/
written by Chris Ferdinandi, Twitter @ChrisFerdinandi */


const autoExpand = function (field) {

	// Reset field height
	field.style.height = 'inherit';

	// Get the computed styles for the element
	var computed = window.getComputedStyle(field);

	// Calculate the height
	var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
	             + parseInt(computed.getPropertyValue('padding-top'), 10)
	             + field.scrollHeight
	             + parseInt(computed.getPropertyValue('padding-bottom'), 10)
	             + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

	field.style.height = height + 'px';

};

document.querySelectorAll("textarea").forEach(item => {
    item.addEventListener("input", event => {
        if (event.target.tagName.toLowerCase() !== 'textarea')
            return;
        autoExpand(event.target);
        return;
    });
});