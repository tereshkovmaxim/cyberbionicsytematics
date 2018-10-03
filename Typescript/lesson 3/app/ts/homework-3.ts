function searchProperty(object: Object, property: string){
  return property.match(/\w+/ig).reduce( (obj, item) => {
    return  obj[item] ? obj[item] : (function(){throw new Error('property no found')}()); 
  }, object );
}