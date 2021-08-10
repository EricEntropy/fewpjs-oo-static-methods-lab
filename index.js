class Formatter {

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]+/g, '');
  }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let finalTitle = [];

    let array = string.split(" ");
    for(let i = 0; i < array.length; i++){
      if(i === 0){
        finalTitle.push( this.capitalize(array[i]));
      }
      else{
        if( exceptions.includes(array[i])){
          finalTitle.push( array[i]);
        }
        else {
          finalTitle.push( this.capitalize(array[i]));
        }
      }
    }
    return finalTitle.join(" ");
  }
}