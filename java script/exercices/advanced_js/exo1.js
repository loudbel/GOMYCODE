/*---------------------------------- Exo 1 ---------------------------------

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes(), which must take in input array, containing the names of people who 
like an item. It must return the display text as shown in the examples:

likes([]) -- must be "no one likes this"
likes(["Peter"]) -- must be "Peter likes this"
likes(["Jacob", "Alex"]) -- must be "Jacob and Alex like this"
likes(["Max", "John", "Mark"]) -- must be "Max, John and Mark like this"
likes(["Alex", "Jacob", "Mark", "Max"]) -- must be "Alex, Jacob and 2 others like this"

/**/
function likes(like){
    let count =  like.length;
    let message;
    if(count < 1){
       message = "no one likes this"
    } else if (count == 1) {
      message = `${like[0]} likes this`;
    } else if (count == 2) {
      message = `${like[0]} and ${like[1]} like this`;
    } else if (count == 3) {
      message = `${like[0]}, ${like[1]} and ${like[2]} like this`;
    } else if (count > 3) {
      message = `${like[0]}, ${like[1]} and ${count - 2 } others like this`;
    }
    return message ;
  }
  console.log(likes([]));
  console.log(likes(["Peter"]));
  console.log(likes(["Jacob", "Alex"]));
  console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
  